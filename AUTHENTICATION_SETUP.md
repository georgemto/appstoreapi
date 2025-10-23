# Apple App Store Connect API Authentication Setup

This guide will help you properly configure the Apple App Store Connect API authentication to resolve the bearer token error.

## Error Analysis

The error you're seeing:
```
"Provide a properly configured and signed bearer token, and make sure that it has not expired"
```

This typically occurs when:
1. Missing or incorrect API credentials
2. Private key file not found or invalid format
3. Incorrect Team ID, Key ID, or Issuer ID
4. Private key doesn't match the Key ID

## Step-by-Step Setup

### 1. Generate App Store Connect API Key

1. **Log in to App Store Connect**
   - Go to https://appstoreconnect.apple.com
   - Sign in with your Apple Developer account

2. **Navigate to API Keys**
   - Click "Users and Access"
   - Click "Keys" tab
   - Click "Generate API Key" or "+" button

3. **Create the Key**
   - Enter a name for your key
   - Select access level (Admin, Developer, etc.)
   - Click "Generate"

4. **Download the Key**
   - **IMPORTANT**: Download the `.p8` file immediately (you can only download it once!)
   - Note the Key ID (e.g., `2X9R4HXF34`)
   - Note the Issuer ID (shown at the top of the page)

### 2. Find Your Team ID

1. **In App Store Connect**
   - Go to "Users and Access"
   - Look for "Team ID" in the top section
   - It's a 10-character alphanumeric string

2. **Alternative: Apple Developer Portal**
   - Go to https://developer.apple.com/account
   - Team ID is shown in the top right corner

### 3. Configure Your Environment

1. **Copy the example environment file**
   ```bash
   cp .env.example .env
   ```

2. **Edit the .env file with your actual values**
   ```bash
   # Replace with your actual values
   APPSTORE_TEAM_ID=ABC123DEFG
   APPSTORE_KEY_ID=2X9R4HXF34
   APPSTORE_PRIVATE_KEY_PATH=./keys/AuthKey_2X9R4HXF34.p8
   APPSTORE_ISSUER_ID=12345678-1234-1234-1234-123456789012
   
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   
   # API Configuration
   API_BASE_URL=https://api.appstoreconnect.apple.com/v1
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   
   # Logging
   LOG_LEVEL=debug
   ```

3. **Place your private key file**
   ```bash
   # Create keys directory
   mkdir -p keys
   
   # Copy your downloaded .p8 file to the keys directory
   # Make sure the filename matches what you put in APPSTORE_PRIVATE_KEY_PATH
   cp ~/Downloads/AuthKey_2X9R4HXF34.p8 ./keys/
   
   # Set proper permissions
   chmod 600 ./keys/*.p8
   ```

### 4. Verify Your Configuration

Use the built-in debugging endpoint to test your configuration:

```bash
# Test configuration
curl -X GET "http://localhost:3000/api/subscriptions/health"
```

Expected successful response:
```json
{
  "success": true,
  "message": "Subscription service is healthy",
  "timestamp": "2023-10-23T14:52:00.000Z",
  "configuration": {
    "hasTeamId": true,
    "hasKeyId": true,
    "hasPrivateKey": true,
    "hasIssuerId": true
  }
}
```

## Common Issues and Solutions

### Issue 1: "Private key file not found"

**Solution:**
```bash
# Check if file exists
ls -la keys/

# Verify the path in .env matches the actual file
cat .env | grep PRIVATE_KEY_PATH

# Make sure filename matches Key ID
# File should be named: AuthKey_[YOUR_KEY_ID].p8
```

### Issue 2: "Invalid format" or "Cannot parse private key"

**Solution:**
```bash
# Verify the .p8 file format
head -3 keys/AuthKey_*.p8
# Should start with: -----BEGIN PRIVATE KEY-----

# Check file permissions
ls -la keys/
# Should show: -rw------- (600 permissions)

# Re-download the key if format is wrong
```

### Issue 3: "Team ID not found" or "Invalid Team ID"

**Solution:**
1. Double-check Team ID in App Store Connect > Users and Access
2. Team ID should be exactly 10 characters
3. Make sure there are no extra spaces in your .env file

### Issue 4: "Key ID not found" or "Invalid Key ID"

**Solution:**
1. Verify Key ID in App Store Connect > Users and Access > Keys
2. Key ID should match exactly (case-sensitive)
3. Make sure the .p8 filename includes the correct Key ID

### Issue 5: "Issuer ID not found" or "Invalid Issuer ID"

**Solution:**
1. Copy Issuer ID from App Store Connect > Users and Access > Keys (top of page)
2. Should be in UUID format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
3. Make sure there are no extra spaces

## Testing Your Setup

### 1. Basic Health Check
```bash
curl -X GET "http://localhost:3000/health"
```

### 2. Service Health Check
```bash
curl -X GET "http://localhost:3000/api/subscriptions/health"
```

### 3. Test API Connection
```bash
# This should return your apps (might be empty if no apps)
curl -X GET "http://localhost:3000/api/apps"
```

### 4. Debug Mode
Set `LOG_LEVEL=debug` in your .env file and restart the server to see detailed JWT token generation logs.

## Security Best Practices

1. **Keep your .p8 file secure**
   - Never commit it to version control
   - Set restrictive file permissions (600)
   - Store securely in production

2. **Rotate keys regularly**
   - Apple recommends rotating API keys periodically
   - You can have multiple active keys

3. **Use environment variables**
   - Never hardcode credentials in your source code
   - Use secure environment variable management in production

## Troubleshooting Checklist

- [ ] Downloaded .p8 file from App Store Connect
- [ ] Placed .p8 file in `./keys/` directory
- [ ] Filename matches pattern: `AuthKey_[KEY_ID].p8`
- [ ] File permissions set to 600
- [ ] Team ID is exactly 10 characters
- [ ] Key ID matches the one from App Store Connect
- [ ] Issuer ID is in UUID format
- [ ] No extra spaces in .env file values
- [ ] .env file is in the project root directory
- [ ] All required environment variables are set

## Example Working Configuration

```bash
# .env file example with dummy values
APPSTORE_TEAM_ID=ABC123DEFG
APPSTORE_KEY_ID=2X9R4HXF34
APPSTORE_PRIVATE_KEY_PATH=./keys/AuthKey_2X9R4HXF34.p8
APPSTORE_ISSUER_ID=12345678-1234-1234-1234-123456789012
PORT=3000
NODE_ENV=development
LOG_LEVEL=debug
```

```bash
# Directory structure
appstoreapi/
├── keys/
│   └── AuthKey_2X9R4HXF34.p8
├── .env
├── server.js
└── ...
```

Once you've verified all these steps, restart your server and try the API calls again. The authentication error should be resolved!
