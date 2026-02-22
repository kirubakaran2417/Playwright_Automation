// ===== DAY 17: WEB STORAGE WITH TYPES =====
// TypeScript enables type-safe localStorage and sessionStorage management

console.log('--- Typed Web Storage Manager ---');

// Generic storage manager
class TypedStorage<T> {
  constructor(private storage: Storage, private key: string) {}

  set(value: T): void {
    try {
      this.storage.setItem(this.key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }

  get(): T | null {
    try {
      const item = this.storage.getItem(this.key);
      if (item === null) return null;
      return JSON.parse(item) as T;
    } catch (e) {
      console.error('Parse error:', e);
      return null;
    }
  }

  remove(): void {
    this.storage.removeItem(this.key);
  }

  clear(): void {
    this.storage.clear();
  }
}

// Define user interface
interface UserData {
  username: string;
  email: string;
  theme: 'light' | 'dark';
}

// Create typed storage instances
const userStorage = new TypedStorage<UserData>(localStorage, 'user');
const settingsStorage = new TypedStorage<{ notifications: boolean }>(
  localStorage,
  'settings'
);

// 🔴 JAVASCRIPT approach (no type safety):
// const userData = JSON.parse(localStorage.getItem('user'));
// userData.username; // Could be anything, no autocomplete

// 🔵 TYPESCRIPT approach (with types):
const user: UserData = {
  username: 'alice',
  email: 'alice@example.com',
  theme: 'dark'
};

userStorage.set(user);
const retrieved = userStorage.get(); // Type: UserData | null

if (retrieved) {
  console.log('User:', retrieved.username); // Autocomplete works!
  console.log('Theme:', retrieved.theme); // Type-safe access
}

// SESSION STORAGE WITH TYPES
console.log('\n--- Session Storage ---');

interface SessionData {
  sessionId: string;
  expiresAt: number;
}

class SessionManager {
  private storage: TypedStorage<SessionData>;

  constructor() {
    this.storage = new TypedStorage(sessionStorage, 'session');
  }

  createSession(): void {
    const session: SessionData = {
      sessionId: `session_${Date.now()}`,
      expiresAt: Date.now() + 3600000 // 1 hour
    };
    this.storage.set(session);
  }

  isValid(): boolean {
    const session = this.storage.get();
    if (!session) return false;
    return Date.now() < session.expiresAt;
  }
}

// UTILITY FUNCTIONS WITH TYPES
console.log('\n--- Storage Utilities ---');

const getOrDefault = <T,>(
  storage: TypedStorage<T>,
  defaultValue: T
): T => {
  return storage.get() ?? defaultValue;
};

const defaultUser: UserData = {
  username: 'guest',
  email: 'guest@example.com',
  theme: 'light'
};

const currentUser = getOrDefault(userStorage, defaultUser);
console.log('Current user:', currentUser.username);

// MULTI-KEY STORAGE
console.log('\n--- Multi-Key Storage ---');

class MultiKeyStorage<T extends Record<string, unknown>> {
  constructor(private storage: Storage) {}

  set(key: keyof T, value: T[keyof T]): void {
    this.storage.setItem(String(key), JSON.stringify(value));
  }

  get(key: keyof T): T[keyof T] | null {
    const item = this.storage.getItem(String(key));
    return item ? JSON.parse(item) : null;
  }

  getAll(): Partial<T> {
    const result: Partial<T> = {};
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      if (key) {
        const value = this.storage.getItem(key);
        if (value) {
          result[key as keyof T] = JSON.parse(value);
        }
      }
    }
    return result;
  }
}

// TYPE-SAFE PREFERENCES
console.log('\n--- Type-Safe Preferences ---');

interface AppPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: 'en' | 'es' | 'fr' | 'de';
  fontSize: 'small' | 'medium' | 'large';
}

// This enforces only valid preference keys
const prefs = new MultiKeyStorage<AppPreferences>(localStorage);

// Compiler ensures only valid keys
prefs.set('theme', 'dark'); // ✓ OK
prefs.set('language', 'en'); // ✓ OK
// prefs.set('invalid', 'value'); // ✗ TypeScript error!

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Web Storage ---');
console.log('🔴 JS: localStorage.getItem() returns string | null, type unknown');
console.log('🔵 TS: TypedStorage<T> returns T | null, type guaranteed');
console.log('');
console.log('🔴 JS: No validation, parsed data could be anything');
console.log('🔵 TS: Generic types ensure correct structure');
console.log('');
console.log('🔴 JS: No autocomplete for properties');
console.log('🔵 TS: IntelliSense works for stored data');
console.log('');
console.log('🔴 JS: Manual JSON stringify/parse everywhere');
console.log('🔵 TS: Abstracted in reusable manager class');
console.log('');
console.log('🔴 JS: Can store/retrieve wrong data types silently');
console.log('🔵 TS: Compiler catches type mismatches');
