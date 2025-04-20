/**
 * Script to sync Bolt configuration with project configuration
 */

const fs = require('fs');
const path = require('path');

// Paths to configuration files
const boltConfigPath = path.join(__dirname, '..', '.bolt', 'config.json');
const siteConfigPath = path.join(__dirname, '..', 'config', 'site.config.js');

// Function to read the site configuration
function getSiteConfig() {
  try {
    // This is a simplistic approach; in a real implementation,
    // you'd need to parse the JavaScript file to extract configuration
    const configFile = fs.readFileSync(siteConfigPath, 'utf8');
    
    // Extract the configuration object using regex
    const match = configFile.match(/export\s+const\s+siteConfig\s*=\s*(\{[\s\S]*?\});/);
    
    if (match && match[1]) {
      // Very unsafe, but this is just a demonstration
      // In a real implementation, you'd use a proper JS parser
      // eslint-disable-next-line no-eval
      const config = eval(`(${match[1]})`);
      return config;
    }
    
    throw new Error('Could not parse site configuration');
  } catch (error) {
    console.error('Error reading site configuration:', error.message);
    return null;
  }
}

// Function to read the Bolt configuration
function getBoltConfig() {
  try {
    if (fs.existsSync(boltConfigPath)) {
      const configJson = fs.readFileSync(boltConfigPath, 'utf8');
      return JSON.parse(configJson);
    }
    return {};
  } catch (error) {
    console.error('Error reading Bolt configuration:', error.message);
    return {};
  }
}

// Function to update the Bolt configuration
function updateBoltConfig(siteConfig) {
  try {
    const boltConfig = getBoltConfig();
    
    // Update Bolt configuration with site configuration
    const updatedConfig = {
      ...boltConfig,
      site: {
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
      },
    };
    
    // Create .bolt directory if it doesn't exist
    const boltDir = path.dirname(boltConfigPath);
    if (!fs.existsSync(boltDir)) {
      fs.mkdirSync(boltDir, { recursive: true });
    }
    
    // Write the updated configuration
    fs.writeFileSync(boltConfigPath, JSON.stringify(updatedConfig, null, 2));
    
    console.log('✅ Bolt configuration updated successfully');
  } catch (error) {
    console.error('Error updating Bolt configuration:', error.message);
  }
}

// Main function
function syncConfig() {
  const siteConfig = getSiteConfig();
  
  if (siteConfig) {
    updateBoltConfig(siteConfig);
  } else {
    console.error('❌ Failed to sync configuration');
  }
}

// Run the sync
syncConfig();