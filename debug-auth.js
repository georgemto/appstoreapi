#!/usr/bin/env node

/**
 * Apple App Store Connect API Authentication Debugger
 * 
 * This script helps debug authentication issues by checking:
 * - Environment variables
 * - Private key file
 * - JWT token generation
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

console.log('🔍 Apple App Store Connect API Authentication Debugger\n');

// Check environment variables
console.log('📋 Environment Variables Check:');
const requiredVars = {
  'APPSTORE_TEAM_ID': process.env.APPSTORE_TEAM_ID,
  'APPSTORE_KEY_ID': process.env.APPSTORE_KEY_ID,
  'APPSTORE_PRIVATE_KEY_PATH': process.env.APPSTORE_PRIVATE_KEY_PATH,
  'APPSTORE_ISSUER_ID': process.env.APPSTORE_ISSUER_ID
};

let hasAllVars = true;
for (const [key, value] of Object.entries(requiredVars)) {
  const status = value ? '✅' : '❌';
  console.log(`  ${status} ${key}: ${value ? '***SET***' : 'NOT SET'}`);
  if (!value) hasAllVars = false;
}

if (!hasAllVars) {
  console.log('\n❌ Missing required environment variables. Please check your .env file.');
  process.exit(1);
}

console.log('\n🔑 Private Key File Check:');
const keyPath = path.resolve(process.env.APPSTORE_PRIVATE_KEY_PATH);
console.log(`  📁 Path: ${keyPath}`);

// Check if file exists
if (!fs.existsSync(keyPath)) {
  console.log('  ❌ Private key file not found!');
  console.log('  💡 Make sure to:');
  console.log('     - Download your .p8 file from App Store Connect');
  console.log('     - Place it in the keys/ directory');
  console.log('     - Update the path in your .env file');
  process.exit(1);
}

console.log('  ✅ Private key file exists');

// Check file permissions
const stats = fs.statSync(keyPath);
const permissions = (stats.mode & parseInt('777', 8)).toString(8);
console.log(`  🔒 File permissions: ${permissions}`);

if (permissions !== '600') {
  console.log('  ⚠️  Recommended permissions: 600 (read/write for owner only)');
  console.log('  💡 Run: chmod 600 ' + keyPath);
}

// Check file format
console.log('\n📄 Private Key Format Check:');
try {
  const keyContent = fs.readFileSync(keyPath, 'utf8');
  
  if (keyContent.includes('-----BEGIN PRIVATE KEY-----')) {
    console.log('  ✅ Valid PEM format detected');
  } else {
    console.log('  ❌ Invalid format - should start with "-----BEGIN PRIVATE KEY-----"');
    process.exit(1);
  }

  if (keyContent.includes('-----END PRIVATE KEY-----')) {
    console.log('  ✅ Valid PEM ending detected');
  } else {
    console.log('  ❌ Invalid format - should end with "-----END PRIVATE KEY-----"');
    process.exit(1);
  }

} catch (error) {
  console.log('  ❌ Cannot read private key file:', error.message);
  process.exit(1);
}

// Test JWT token generation
console.log('\n🎫 JWT Token Generation Test:');
try {
  const privateKey = fs.readFileSync(keyPath, 'utf8');
  const now = Math.floor(Date.now() / 1000);
  const expirationTime = now + (20 * 60); // 20 minutes

  const payload = {
    iss: process.env.APPSTORE_ISSUER_ID,
    iat: now,
    exp: expirationTime,
    aud: 'appstoreconnect-v1'
  };

  const token = jwt.sign(payload, privateKey, {
    algorithm: 'ES256',
    keyid: process.env.APPSTORE_KEY_ID
  });

  console.log('  ✅ JWT token generated successfully');
  console.log(`  📏 Token length: ${token.length} characters`);
  console.log(`  ⏰ Expires: ${new Date(expirationTime * 1000).toISOString()}`);
  
  // Show first and last parts of token for verification
  const tokenParts = token.split('.');
  console.log(`  🔍 Header: ${tokenParts[0]}`);
  console.log(`  🔍 Payload preview: ${tokenParts[1].substring(0, 20)}...`);
  console.log(`  🔍 Signature preview: ${tokenParts[2].substring(0, 20)}...`);

} catch (error) {
  console.log('  ❌ JWT token generation failed:', error.message);
  console.log('\n💡 Common causes:');
  console.log('   - Private key format is incorrect');
  console.log('   - Key ID doesn\'t match the private key');
  console.log('   - Issuer ID is incorrect');
  process.exit(1);
}

// Validate IDs format
console.log('\n🔍 ID Format Validation:');

// Team ID should be 10 characters
const teamId = process.env.APPSTORE_TEAM_ID;
if (teamId.length === 10 && /^[A-Z0-9]+$/.test(teamId)) {
  console.log('  ✅ Team ID format looks correct');
} else {
  console.log('  ⚠️  Team ID should be 10 alphanumeric characters');
}

// Key ID should be 10 characters  
const keyId = process.env.APPSTORE_KEY_ID;
if (keyId.length === 10 && /^[A-Z0-9]+$/.test(keyId)) {
  console.log('  ✅ Key ID format looks correct');
} else {
  console.log('  ⚠️  Key ID should be 10 alphanumeric characters');
}

// Issuer ID should be UUID format
const issuerId = process.env.APPSTORE_ISSUER_ID;
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
if (uuidRegex.test(issuerId)) {
  console.log('  ✅ Issuer ID format looks correct');
} else {
  console.log('  ⚠️  Issuer ID should be in UUID format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)');
}

console.log('\n🎉 Authentication setup validation completed!');
console.log('\n💡 Next steps:');
console.log('   1. Start your server: npm start');
console.log('   2. Test health endpoint: curl http://localhost:3000/health');
console.log('   3. Test service health: curl http://localhost:3000/api/subscriptions/health');
console.log('   4. Test API connection: curl http://localhost:3000/api/apps');
console.log('\n📚 For more help, see: AUTHENTICATION_SETUP.md');
