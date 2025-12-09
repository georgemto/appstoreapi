const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const logger = require('../utils/logger');

class SubscriptionDatabase {
  constructor() {
    this.db = null;
    this.dbPath = path.resolve(__dirname, '../../data/subscriptions.db');
    this.initialized = false;
  }

  /**
   * Initialize the database connection and create tables
   */
  async initialize() {
    if (this.initialized) {
      return;
    }

    try {
      // Create data directory if it doesn't exist
      const fs = require('fs');
      const dataDir = path.dirname(this.dbPath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      // Open database connection
      this.db = await this.openDatabase();
      
      // Create tables
      await this.createTables();
      
      this.initialized = true;
      logger.info('SQLite database initialized successfully', { path: this.dbPath });
    } catch (error) {
      logger.error('Failed to initialize database:', error);
      throw error;
    }
  }

  /**
   * Open database connection
   */
  openDatabase() {
    return new Promise((resolve, reject) => {
      const db = new sqlite3.Database(this.dbPath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(db);
        }
      });
    });
  }

  /**
   * Create database tables
   */
  async createTables() {
    const createAppsTable = `
      CREATE TABLE IF NOT EXISTS apps (
        id TEXT PRIMARY KEY,
        bundle_id TEXT UNIQUE NOT NULL,
        name TEXT,
        sku TEXT,
        primary_locale TEXT,
        is_made_for_kids INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const createSubscriptionGroupsTable = `
      CREATE TABLE IF NOT EXISTS subscription_groups (
        id TEXT PRIMARY KEY,
        app_id TEXT NOT NULL,
        reference_name TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (app_id) REFERENCES apps(id) ON DELETE CASCADE
      )
    `;

    const createSubscriptionsTable = `
      CREATE TABLE IF NOT EXISTS subscriptions (
        id TEXT PRIMARY KEY,
        app_id TEXT NOT NULL,
        subscription_group_id TEXT,
        product_id TEXT NOT NULL,
        name TEXT,
        state TEXT,
        subscription_period TEXT,
        family_sharable INTEGER,
        review_note TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (app_id) REFERENCES apps(id) ON DELETE CASCADE,
        FOREIGN KEY (subscription_group_id) REFERENCES subscription_groups(id) ON DELETE SET NULL
      )
    `;

    const createIndexes = [
      'CREATE INDEX IF NOT EXISTS idx_apps_bundle_id ON apps(bundle_id)',
      'CREATE INDEX IF NOT EXISTS idx_subscription_groups_app_id ON subscription_groups(app_id)',
      'CREATE INDEX IF NOT EXISTS idx_subscriptions_app_id ON subscriptions(app_id)',
      'CREATE INDEX IF NOT EXISTS idx_subscriptions_product_id ON subscriptions(product_id)',
      'CREATE INDEX IF NOT EXISTS idx_subscriptions_group_id ON subscriptions(subscription_group_id)'
    ];

    try {
      await this.run(createAppsTable);
      await this.run(createSubscriptionGroupsTable);
      await this.run(createSubscriptionsTable);
      
      for (const indexQuery of createIndexes) {
        await this.run(indexQuery);
      }
      
      logger.info('Database tables created successfully');
    } catch (error) {
      logger.error('Failed to create tables:', error);
      throw error;
    }
  }

  /**
   * Run a SQL query with parameters
   */
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ lastID: this.lastID, changes: this.changes });
        }
      });
    });
  }

  /**
   * Get a single row
   */
  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  /**
   * Get all rows
   */
  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  /**
   * Save app information
   */
  async saveApp(appData) {
    if (!this.initialized) {
      await this.initialize();
    }

    const sql = `
      INSERT OR REPLACE INTO apps (id, bundle_id, name, sku, primary_locale, is_made_for_kids, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `;

    const params = [
      appData.id,
      appData.bundleId,
      appData.name,
      appData.sku,
      appData.primaryLocale,
      appData.isMadeForKids ? 1 : 0
    ];

    try {
      await this.run(sql, params);
      logger.info(`Saved app to database: ${appData.bundleId}`);
    } catch (error) {
      logger.error(`Failed to save app ${appData.bundleId}:`, error);
      throw error;
    }
  }

  /**
   * Save subscription group
   */
  async saveSubscriptionGroup(groupData) {
    if (!this.initialized) {
      await this.initialize();
    }

    const sql = `
      INSERT OR REPLACE INTO subscription_groups (id, app_id, reference_name, updated_at)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    `;

    const params = [
      groupData.id,
      groupData.appId,
      groupData.referenceName
    ];

    try {
      await this.run(sql, params);
    } catch (error) {
      logger.error(`Failed to save subscription group ${groupData.id}:`, error);
      throw error;
    }
  }

  /**
   * Save subscription
   */
  async saveSubscription(subscriptionData) {
    if (!this.initialized) {
      await this.initialize();
    }

    const sql = `
      INSERT OR REPLACE INTO subscriptions 
      (id, app_id, subscription_group_id, product_id, name, state, subscription_period, family_sharable, review_note, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `;

    const params = [
      subscriptionData.id,
      subscriptionData.appId,
      subscriptionData.subscriptionGroupId || null,
      subscriptionData.productId,
      subscriptionData.name,
      subscriptionData.state,
      subscriptionData.subscriptionPeriod,
      subscriptionData.familySharable ? 1 : 0,
      subscriptionData.reviewNote
    ];

    try {
      await this.run(sql, params);
    } catch (error) {
      logger.error(`Failed to save subscription ${subscriptionData.id}:`, error);
      throw error;
    }
  }

  /**
   * Save complete subscription data for a bundle ID
   */
  async saveSubscriptionData(bundleId, data) {
    if (!this.initialized) {
      await this.initialize();
    }

    try {
      // Save app
      await this.saveApp({
        id: data.appId,
        bundleId: bundleId,
        name: data.appName,
        sku: null,
        primaryLocale: null,
        isMadeForKids: false
      });

      // Save subscription groups
      if (data.subscriptionGroups) {
        for (const group of data.subscriptionGroups) {
          await this.saveSubscriptionGroup({
            id: group.id,
            appId: data.appId,
            referenceName: group.referenceName
          });
        }
      }

      // Save subscriptions
      if (data.subscriptions) {
        for (const subscription of data.subscriptions) {
          await this.saveSubscription({
            id: subscription.id,
            appId: data.appId,
            subscriptionGroupId: null,
            productId: subscription.productId,
            name: subscription.name,
            state: subscription.state,
            subscriptionPeriod: subscription.subscriptionPeriod,
            familySharable: subscription.familySharable,
            reviewNote: subscription.reviewNote
          });
        }
      }

      logger.info(`Saved complete subscription data for ${bundleId}`, {
        groups: data.subscriptionGroups?.length || 0,
        subscriptions: data.subscriptions?.length || 0
      });
    } catch (error) {
      logger.error(`Failed to save subscription data for ${bundleId}:`, error);
      throw error;
    }
  }

  /**
   * Get app by bundle ID
   */
  async getAppByBundleId(bundleId) {
    if (!this.initialized) {
      await this.initialize();
    }

    const sql = 'SELECT * FROM apps WHERE bundle_id = ?';
    return await this.get(sql, [bundleId]);
  }

  /**
   * Get all subscription groups for an app
   */
  async getSubscriptionGroups(appId) {
    if (!this.initialized) {
      await this.initialize();
    }

    const sql = 'SELECT * FROM subscription_groups WHERE app_id = ? ORDER BY reference_name';
    return await this.all(sql, [appId]);
  }

  /**
   * Get all subscriptions for an app
   */
  async getSubscriptions(appId) {
    if (!this.initialized) {
      await this.initialize();
    }

    const sql = 'SELECT * FROM subscriptions WHERE app_id = ? ORDER BY name';
    return await this.all(sql, [appId]);
  }

  /**
   * Get subscription product IDs for a bundle ID
   */
  async getSubscriptionProductIds(bundleId) {
    if (!this.initialized) {
      await this.initialize();
    }

    const sql = `
      SELECT s.product_id
      FROM subscriptions s
      JOIN apps a ON s.app_id = a.id
      WHERE a.bundle_id = ?
      ORDER BY s.product_id
    `;

    const rows = await this.all(sql, [bundleId]);
    return rows.map(row => row.product_id);
  }

  /**
   * Get complete subscription data for a bundle ID from database
   */
  async getSubscriptionDataByBundleId(bundleId) {
    if (!this.initialized) {
      await this.initialize();
    }

    try {
      const app = await this.getAppByBundleId(bundleId);
      
      if (!app) {
        return null;
      }

      const groups = await this.getSubscriptionGroups(app.id);
      const subscriptions = await this.all(
        'SELECT * FROM subscriptions WHERE app_id = ? ORDER BY name',
        [app.id]
      );

      return {
        appId: app.id,
        appName: app.name,
        bundleId: app.bundle_id,
        subscriptionGroups: groups.map(g => ({
          id: g.id,
          referenceName: g.reference_name
        })),
        subscriptions: subscriptions.map(s => ({
          id: s.id,
          productId: s.product_id,
          name: s.name,
          state: s.state,
          subscriptionPeriod: s.subscription_period,
          familySharable: s.family_sharable === 1,
          reviewNote: s.review_note
        })),
        productIds: subscriptions.map(s => s.product_id),
        updatedAt: app.updated_at
      };
    } catch (error) {
      logger.error(`Failed to get subscription data for ${bundleId}:`, error);
      throw error;
    }
  }

  /**
   * Get statistics
   */
  async getStats() {
    if (!this.initialized) {
      await this.initialize();
    }

    const appCount = await this.get('SELECT COUNT(*) as count FROM apps');
    const groupCount = await this.get('SELECT COUNT(*) as count FROM subscription_groups');
    const subscriptionCount = await this.get('SELECT COUNT(*) as count FROM subscriptions');

    return {
      totalApps: appCount.count,
      totalGroups: groupCount.count,
      totalSubscriptions: subscriptionCount.count
    };
  }

  /**
   * Close database connection
   */
  close() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        this.db.close((err) => {
          if (err) {
            reject(err);
          } else {
            this.initialized = false;
            logger.info('Database connection closed');
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }
}

// Export singleton instance
const subscriptionDatabase = new SubscriptionDatabase();
module.exports = subscriptionDatabase;
