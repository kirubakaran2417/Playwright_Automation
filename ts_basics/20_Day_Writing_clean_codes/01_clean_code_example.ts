// ===== DAY 20: CLEAN CODE WITH TYPESCRIPT =====
// TypeScript enforces code quality through its type system

console.log('--- TypeScript Clean Code Practices ---');

// 1. MEANINGFUL NAMES WITH TYPES
console.log('\n--- 1. Meaningful Names ---');

// 🔴 JAVASCRIPT (unclear)
// function calc(a, b) {
//   return a * b;
// }

// 🔵 TYPESCRIPT (clear intent)
const calculateTotalPrice = (unitPrice: number, quantity: number): number => {
  return unitPrice * quantity;
};

console.log(calculateTotalPrice(10, 5)); // 50

// 2. SINGLE RESPONSIBILITY PRINCIPLE
console.log('\n--- 2. Single Responsibility ---');

// ❌ Bad: Multiple responsibilities
// function processUser(user: any) {
//   validate(user);
//   save(user);
//   email(user);
//   log(user);
// }

// ✅ Good: Separated concerns
interface User {
  id: number;
  email: string;
  name: string;
}

const validateUser = (user: User): boolean => {
  return user.email.includes('@') && user.name.length > 0;
};

const saveUser = (user: User): void => {
  console.log('Saving user:', user.id);
};

const notifyUser = (user: User): void => {
  console.log('Notifying:', user.email);
};

// 3. DRY (Don't Repeat Yourself)
console.log('\n--- 3. DRY Principle ---');

// ❌ Repeated logic
// const getUserById = (id: number): User | null => {
//   const data = fetch(`/api/users/${id}`);
//   if (!data.ok) return null;
//   return data.json();
// };

// const getPostById = (id: number): Post | null => {
//   const data = fetch(`/api/posts/${id}`);
//   if (!data.ok) return null;
//   return data.json();
// };

// ✅ Reusable generic fetch
const fetchById = async <T,>(endpoint: string, id: number): Promise<T | null> => {
  try {
    const response = await fetch(`${endpoint}/${id}`);
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
};

// 4. ERROR HANDLING
console.log('\n--- 4. Error Handling ---');

// ❌ Silent failures
// const parseData = (json: string): User => {
//   return JSON.parse(json);
// };

// ✅ Explicit error handling
class ParseError extends Error {
  constructor(message: string, public json: string) {
    super(message);
  }
}

const parseUserData = (json: string): User => {
  try {
    const data = JSON.parse(json);
    if (!isValidUser(data)) {
      throw new ParseError('Invalid user structure', json);
    }
    return data;
  } catch (error) {
    if (error instanceof ParseError) {
      throw error;
    }
    throw new ParseError('Failed to parse JSON', json);
  }
};

const isValidUser = (data: unknown): data is User => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'email' in data &&
    'name' in data &&
    typeof (data as any).id === 'number'
  );
};

// 5. IMMUTABILITY
console.log('\n--- 5. Immutability ---');

// ❌ Mutating objects
// const user = { name: 'Alice', age: 25 };
// user.age = 26; // Side effect!

// ✅ Creating new objects with readonly
interface ReadonlyUser {
  readonly id: number;
  readonly name: string;
}

const user: ReadonlyUser = { id: 1, name: 'Alice' };
// user.name = 'Bob'; // ✗ TypeScript error!

const updateUser = (user: ReadonlyUser, name: string): ReadonlyUser => {
  return { ...user, name };
};

// 6. COMPOSITION OVER INHERITANCE
console.log('\n--- 6. Composition Over Inheritance ---');

// Smaller, focused interfaces
interface Logger {
  log(message: string): void;
}

interface Validator {
  validate(data: unknown): boolean;
}

interface Persister {
  save(data: unknown): Promise<void>;
}

// Compose capabilities
class UserService implements Logger, Validator, Persister {
  log(message: string): void {
    console.log(`[USER] ${message}`);
  }

  validate(data: unknown): boolean {
    return isValidUser(data);
  }

  async save(data: unknown): Promise<void> {
    if (!this.validate(data)) {
      throw new Error('Invalid user data');
    }
    this.log('User saved');
  }
}

// 7. PURE FUNCTIONS
console.log('\n--- 7. Pure Functions ---');

// ❌ Impure: Side effects
// let total = 0;
// const addToTotal = (amount: number): void => {
//   total += amount; // Side effect!
// };

// ✅ Pure: No side effects
const add = (a: number, b: number): number => a + b;
const multiply = (a: number, b: number): number => a * b;

// Compose pure functions
const compose = <A, B, C>(
  f: (a: A) => B,
  g: (b: B) => C
) => (a: A): C => g(f(a));

const addTen = (n: number) => add(n, 10);
const multiplyByTwo = (n: number) => multiply(n, 2);
const addThenMultiply = compose(addTen, multiplyByTwo);

console.log(addThenMultiply(5)); // (5 + 10) * 2 = 30

// 8. DEPENDENCY INJECTION
console.log('\n--- 8. Dependency Injection ---');

interface Database {
  findUser(id: number): Promise<User | null>;
}

// ✅ Depends on abstraction, not concrete implementation
class UserRepository {
  constructor(private db: Database) {}

  async getUser(id: number): Promise<User | null> {
    return this.db.findUser(id);
  }
}

// Easy to test with mock
class MockDatabase implements Database {
  async findUser(id: number): Promise<User | null> {
    return { id, email: 'test@example.com', name: 'Test' };
  }
}

const repo = new UserRepository(new MockDatabase());

// 9. TYPE SAFETY FOR CONFIG
console.log('\n--- 9. Type-Safe Configuration ---');

// ❌ Config is any
// const config = {
//   port: 3000,
//   host: 'localhost',
//   debug: true
// };

// ✅ Typed config
interface AppConfig {
  readonly port: number;
  readonly host: string;
  readonly debug: boolean;
  readonly env: 'development' | 'production';
}

const createConfig = (env: 'development' | 'production'): AppConfig => ({
  port: env === 'development' ? 3000 : 8080,
  host: 'localhost',
  debug: env === 'development',
  env
});

// 10. UTILITY TYPES FOR CONSISTENCY
console.log('\n--- 10. Utility Types ---');

interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  error?: string;
}

// Success response
type SuccessResponse<T> = ApiResponse<T> & { status: 'success'; data: T };
// Error response
type ErrorResponse = ApiResponse<never> & { status: 'error'; error: string };

const handleResponse = <T,>(response: ApiResponse<T>): string => {
  if (response.status === 'success') {
    return `Success: ${JSON.stringify(response.data)}`;
  } else {
    return `Error: ${response.error}`;
  }
};

// ✨ TYPESCRIPT CLEAN CODE ADVANTAGES:
console.log('\n--- TS Clean Code Advantages ---');
console.log('✨ Types document code intent');
console.log('✨ Compiler catches mistakes early');
console.log('✨ Refactoring is safer');
console.log('✨ Interfaces enable composition');
console.log('✨ Generics eliminate code duplication');
console.log('✨ Type guards ensure runtime safety');
console.log('✨ Access modifiers enforce encapsulation');
console.log('✨ Abstract classes define contracts');

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Clean Code ---');
console.log('🔴 JS: No compile-time type checking');
console.log('🔵 TS: Compiler enforces type safety');
console.log('');
console.log('🔴 JS: Documentation is manual/often outdated');
console.log('🔵 TS: Types are living documentation');
console.log('');
console.log('🔴 JS: Refactoring requires manual testing');
console.log('🔵 TS: Compiler guides refactoring');
console.log('');
console.log('🔴 JS: Interfaces are just conventions');
console.log('🔵 TS: Interfaces are enforced contracts');
console.log('');
console.log('🔴 JS: Privacy is by convention (_private)');
console.log('🔵 TS: private keyword enforces privacy');
console.log('');
console.log('🔴 JS: Any can bypass all checks');
console.log('🔵 TS: Types catch accidental uses');

// BEST PRACTICES SUMMARY
console.log('\n--- TypeScript Clean Code Checklist ---');
console.log('✅ Use meaningful, descriptive names');
console.log('✅ Write pure functions when possible');
console.log('✅ Follow single responsibility principle');
console.log('✅ Use composition over inheritance');
console.log('✅ Leverage type system for validation');
console.log('✅ Handle errors explicitly');
console.log('✅ Use readonly for immutability');
console.log('✅ Inject dependencies');
console.log('✅ Use utility types for consistency');
console.log('✅ Write tests with type coverage');
