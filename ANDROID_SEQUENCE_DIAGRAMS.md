# Android (Google Play) Sequence Diagrams

Visual walkthrough of the two main Android subscription flows in this repo, as they hit Google Play's API.

- [1. Subscription + Base Plan Creation](#1-subscription--base-plan-creation)
- [2. Offer Creation (on an Existing Base Plan)](#2-offer-creation-on-an-existing-base-plan)
- [Resource Model Recap](#resource-model-recap)
- [Key Things Google Validates](#key-things-google-validates)

---

## 1. Subscription + Base Plan Creation

Driven by `npm run bulk-create-subscriptions-android -- <json-file> --package <package-name>`.

Each line in the input JSON becomes one `Subscription` in Google Play that embeds exactly one `BasePlan`. Base plans are created in `DRAFT` state — they must be **activated** in a separate call before they can be used.

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant CLI as bulk-create-subscriptions-android.js
    participant GPC as googleplay-client.js
    participant GPA as Google Play API<br/>(androidpublisher v3)

    User->>CLI: npm run bulk-create-subscriptions-android -- product-ids.json --package <pkg>
    CLI->>CLI: Load & parse JSON file

    Note over CLI: For each subscription entry…

    loop Each product in JSON
        CLI->>CLI: Build USD price from entry

        alt Regional prices not cached
            CLI->>GPC: convertRegionPrices(pkg, usdPrice)
            GPC->>GPA: POST /monetization/convertRegionPrices
            GPA-->>GPC: { convertedRegionPrices, convertedOtherRegionsPrice,<br/>regionVersion? }
            GPC-->>CLI: converted prices + regionsVersion
            CLI->>CLI: Cache by price
        else Cached
            CLI->>CLI: Reuse cached prices
        end

        CLI->>CLI: Build Subscription body:<br/>• productId, name, subscriptionGroupId<br/>• basePlans[0] = { basePlanId,<br/>  autoRenewingBasePlanType.billingPeriodDuration,<br/>  regionalConfigs[], otherRegionsConfig? }

        CLI->>GPC: createSubscription(pkg, productId, body, regionsVersion)
        GPC->>GPA: POST /monetization/subscriptions<br/>?regionsVersion.version=2025/03
        GPA-->>GPC: Created Subscription (base plan = DRAFT)
        GPC-->>CLI: response.data

        Note over CLI,GPA: Base plan created in DRAFT state — not yet usable
    end

    alt --activate-existing flag (or freshly created draft plans)
        loop Each base plan in DRAFT
            CLI->>GPC: activateBasePlan(pkg, productId, basePlanId)
            GPC->>GPA: POST /monetization/subscriptions/.../basePlans/.../activate
            GPA-->>GPC: Activated base plan
            GPC-->>CLI: success
        end
    end

    CLI-->>User: Summary: created N, failed M
```

### Key points

- `convertRegionPrices` is called **once per distinct USD price** and cached — avoids thrashing the API for products that share a price.
- The `regionsVersion.version` parameter tells Google which snapshot of "supported regions" you're targeting (`2025/03` is the current default).
- `createSubscription` creates the subscription and its **first base plan** as one nested payload. Multi-base-plan subscriptions would need separate `basePlans.create` calls (not currently used).
- A base plan starts in **DRAFT** state. Until activated, it's invisible to users and can't receive offers.
- **Offers depend on active base plans** — see the next flow.

---

## 2. Offer Creation (on an Existing Base Plan)

Driven by `npm run bulk-create-android-offers -- <package-name> [options]`.

The CLI does **not** know base plan IDs up front — it pulls them from Google by listing subscriptions, then iterates every `(subscription × base plan)` pair matching the optional filters (`--product-ids`, `--base-plan-ids`, `--plan-period`). Each pair gets one offer.

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant CLI as bulk-create-android-offers.js
    participant Svc as android-offers.js<br/>(bulkCreateOffers)
    participant GPC as googleplay-client.js
    participant GPA as Google Play API

    User->>CLI: npm run bulk-create-android-offers -- <pkg> [options]
    CLI->>CLI: Parse args, build offerTemplate<br/>(offerId, phases, targetNewCustomers, filters)
    CLI->>Svc: bulkCreateOffers(pkg, offerTemplate)

    Svc->>GPC: getSubscriptions(pkg)
    GPC->>GPA: GET /monetization/subscriptions?pageToken=…
    GPA-->>GPC: subscriptions[] (paginated, each with basePlans[])
    GPC-->>Svc: all subscriptions + base plans

    Svc->>Svc: Apply filters:<br/>• productIds<br/>• basePlanIds<br/>• basePlanPeriods<br/>→ filteredSubscriptions + targetBasePlans

    loop Each (subscription × base plan)
        Svc->>Svc: Extract from base plan:<br/>• regionalConfigs (regionCode +<br/>  newSubscriberAvailability)<br/>• otherRegionsConfig present?

        Svc->>Svc: convertToGooglePlayFormat:<br/>• offer.regionalConfigs = mirror<br/>  base plan's availability per region<br/>• offer.otherRegionsConfig only if<br/>  base plan has one<br/>• offer.targeting.acquisitionRule.<br/>  scope.thisSubscription = {}<br/>  (if targetNewCustomers)

        Svc->>Svc: convertPhaseToGooglePlayFormat:<br/>per region, emit one of:<br/>• free: {}   (FREE_TRIAL)<br/>• relativeDiscount (% off)<br/>• price (absolute override)

        Svc->>GPC: createSubscriptionOffer(pkg, productId,<br/>basePlanId, offerId, offerData)
        GPC->>GPA: POST /…/basePlans/:bp/offers<br/>?regionsVersion.version=2025/03
        alt Success
            GPA-->>GPC: Created offer (DRAFT)
            GPC-->>Svc: response.data
            Svc->>Svc: results.created.push({...})
        else 400 / 500
            GPA-->>GPC: Error
            GPC-->>Svc: throw
            Svc->>Svc: results.failed.push({...})<br/>loop continues
        end
    end

    Svc-->>CLI: { created, failed, summary }
    CLI->>CLI: Write bulk-android-offers-*.json<br/>+ rollback-android-*.json

    CLI-->>User: Summary (succeeded / failed, per-pair detail)
```

### Key points

- Google exposes subscriptions and base plans on **one list call** (`subscriptions.list` paginated) — no need to fetch base plans separately.
- An offer's `regionalConfigs` **must be a subset** of the base plan's, and `newSubscriberAvailability` must not exceed what the base plan allows.
- An offer's `otherRegionsConfig` can only exist if the base plan has one. Mismatches produce either a clean 400 ("Other regions location was set in phase 0, but not in the top level") or an ugly 500 ("Internal error encountered").
- `regionsVersion.version` is a **query parameter** (not in the body) and is required — without it Google returns `400 "Regions Version must be specified."`
- A created offer starts in **DRAFT** and must be **activated** (`POST /…/offers/:id/activate`) before users see it. The bulk script leaves offers in DRAFT so you can review before going live.
- One offer ID is reused across every `(product, base plan)` pair — Google scopes offer IDs to `(product, basePlan)`, so collision isn't possible across pairs.

---

## Resource Model Recap

```mermaid
flowchart TD
    A[Package<br/>com.vtech.plus.inapp.test3] --> B1[Subscription<br/>productId: com.vtech.plus.monthly]
    A --> B2[Subscription<br/>productId: com.vtech.plus.annual]

    B1 --> C1[Base Plan<br/>basePlanId: monthly-autorenew<br/>billingPeriodDuration: P1M<br/>state: ACTIVE]
    B2 --> C2[Base Plan<br/>basePlanId: annual-autorenew<br/>billingPeriodDuration: P1Y<br/>state: ACTIVE]

    C1 --> D1[Offer<br/>offerId: promo-xxx<br/>phase: free P1W<br/>targetNewCustomers: true]
    C1 --> D2[Offer<br/>offerId: holiday24<br/>phase: 50% off P1M × 3<br/>targetNewCustomers: false]
    C2 --> D3[Offer<br/>offerId: promo-xxx<br/>phase: free P1M<br/>targetNewCustomers: true]

    classDef pkg fill:#e3f2fd,stroke:#1976d2,color:#0d47a1
    classDef sub fill:#f3e5f5,stroke:#7b1fa2,color:#4a148c
    classDef plan fill:#e8f5e9,stroke:#388e3c,color:#1b5e20
    classDef offer fill:#fff3e0,stroke:#f57c00,color:#e65100

    class A pkg
    class B1,B2 sub
    class C1,C2 plan
    class D1,D2,D3 offer
```

- One package → many subscriptions → many base plans → many offers.
- Notice **`offerId: promo-xxx` appears twice** — under different base plans. Legal, because offer IDs are scoped to `(productId, basePlanId)`.
- Base plan availability and pricing define the **ceiling** for every offer under it.

---

## Key Things Google Validates

These are the invariants the real Google Play API enforces that surfaced during this project's debugging:

| Invariant | Error you get if violated |
|---|---|
| `regionsVersion.version` query param set | `400 "Regions Version must be specified."` |
| Every region in payload billable under the chosen `regionsVersion` | `400 "Region code X is not billable at the specified regions version Y."` |
| Offer `regionalConfigs[i].newSubscriberAvailability` ≤ base plan's for the same region | `400 "Region code X was set to be available to new subscribers by the offer, but is not available in parent base plan."` |
| Offer-level and phase-level `otherRegionsConfig` both set OR both omitted | `400 "The Other regions location was set in phase 0, but not in the top level."` |
| Offer `otherRegionsConfig` only set when base plan has one | `500 "Internal error encountered."` *(Google choking on the inconsistency rather than returning a clean 400)* |
| Phase type implied by payload shape (`free` / `relativeDiscount` / `price`), **not** by a `subscriptionOfferPhaseType` field | `400 "Unknown name 'subscriptionOfferPhaseType' at 'subscription_offer.phases[0]': Cannot find field."` |
| `targeting.acquisitionRule.scope` uses `thisSubscription: {}` / `specificSubscriptionInApp` / `anySubscriptionInApp` — **not** `scopeType` | `400 "Unknown name 'scopeType' at 'subscription_offer.targeting.acquisition_rule.scope': Cannot find field."` |
| Service account has Play Console **write** permission on the target app | `403 "The caller does not have permission"` |

---

**Last Updated:** April 2026
