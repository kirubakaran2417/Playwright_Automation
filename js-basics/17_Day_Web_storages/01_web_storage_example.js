// ===== DAY 17: WEB STORAGES =====
// Learning: localStorage and sessionStorage for client-side data persistence

// Note: These examples demonstrate localStorage and sessionStorage concepts
// In Node.js environment, localStorage is not available

console.log('--- Web Storage Info ---');
console.log('localStorage: Persists until manually cleared');
console.log('sessionStorage: Persists until tab is closed');

// 1. localStorage.setItem() - Store data
console.log('\n--- localStorage.setItem() ---');
let userData = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

// Convert to JSON before storing (if using browser)
// localStorage.setItem('user', JSON.stringify(userData));

// Simulating with an object
let simulatedStorage = {};
simulatedStorage['user'] = JSON.stringify(userData);
console.log('Stored user data:', simulatedStorage['user']);

// 2. localStorage.getItem() - Retrieve data
console.log('\n--- localStorage.getItem() ---');
let storedUser = JSON.parse(simulatedStorage['user']);
console.log('Retrieved user:', storedUser);
console.log('User name:', storedUser.name);

// 3. localStorage.removeItem() - Remove specific item
console.log('\n--- localStorage.removeItem() ---');
// localStorage.removeItem('user');
delete simulatedStorage['user'];
console.log('After removal:', simulatedStorage['user'] || 'User data removed');

// 4. localStorage.clear() - Clear all data
console.log('\n--- localStorage.clear() ---');
simulatedStorage = {};
console.log('Storage cleared');

// 5. Storing different data types
console.log('\n--- Storing Different Types ---');
let settings = {
  theme: 'dark',
  language: 'en',
  notifications: true,
  volume: 75
};

// Storing
simulatedStorage['settings'] = JSON.stringify(settings);

// Retrieving
let retrievedSettings = JSON.parse(simulatedStorage['settings']);
console.log('Settings:', retrievedSettings);

// 6. Working with arrays
console.log('\n--- Working with Arrays ---');
let bookmarks = [
  { title: 'MDN Docs', url: 'https://mdn.org' },
  { title: 'GitHub', url: 'https://github.com' },
  { title: 'Stack Overflow', url: 'https://stackoverflow.com' }
];

// Store array
simulatedStorage['bookmarks'] = JSON.stringify(bookmarks);

// Retrieve and modify
let savedBookmarks = JSON.parse(simulatedStorage['bookmarks']);
savedBookmarks.push({ title: 'freeCodeCamp', url: 'https://freecodecamp.org' });

// Save updated
simulatedStorage['bookmarks'] = JSON.stringify(savedBookmarks);
console.log('Updated bookmarks:', JSON.parse(simulatedStorage['bookmarks']));

// 7. sessionStorage (same API as localStorage)
console.log('\n--- sessionStorage ---');
// sessionStorage.setItem('tempData', 'This will be deleted when tab closes');
// Works the same as localStorage but data is session-specific

// 8. Storage utility functions
console.log('\n--- Utility Functions ---');
class StorageManager {
  static set(key, value) {
    try {
      simulatedStorage[key] = JSON.stringify(value);
      console.log(`Stored ${key}`);
    } catch (error) {
      console.log('Storage error:', error.message);
    }
  }

  static get(key) {
    try {
      let data = simulatedStorage[key];
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.log('Retrieval error:', error.message);
      return null;
    }
  }

  static remove(key) {
    delete simulatedStorage[key];
    console.log(`Removed ${key}`);
  }

  static clear() {
    simulatedStorage = {};
    console.log('Storage cleared');
  }

  static getAll() {
    return simulatedStorage;
  }
}

// Using utility
console.log('\n--- Using Utility Functions ---');
StorageManager.set('profile', { name: 'Alice', age: 25 });
console.log('Retrieved:', StorageManager.get('profile'));

StorageManager.set('scores', [95, 87, 92, 88]);
console.log('Retrieved scores:', StorageManager.get('scores'));

// 9. Checking storage availability
console.log('\n--- Check Storage ---');
function isStorageAvailable(type) {
  try {
    let storage = type === 'local' ? 'localStorage' : 'sessionStorage';
    return true;  // In browser this would test write capability
  } catch (e) {
    return false;
  }
}

console.log('localStorage available:', true);  // Would test properly in browser

// 10. Storage events (when data changes from another tab)
console.log('\n--- Storage Events ---');
console.log('In browsers, storage events trigger when data changes in other tabs');
console.log('This cannot be tested in Node.js environment');
