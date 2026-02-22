// ===== DAY 19: CLOSURES WITH TYPE SAFETY =====
// TypeScript ensures closure variables maintain their types

console.log('--- Typed Closures ---');

// Basic closure with type annotations
const createCounter = (start: number) => {
  let count: number = start;

  return {
    increment: (): number => ++count,
    decrement: (): number => --count,
    getCount: (): number => count
  };
};

const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

// 🔴 JAVASCRIPT: Variables have no explicit type
// Function returns { increment: function, decrement: function, getCount: function }
// No way to know return types of each method

// 🔵 TYPESCRIPT: Explicitly typed closure
interface Counter {
  increment: () => number;
  decrement: () => number;
  getCount: () => number;
}

const createTypedCounter = (start: number): Counter => {
  let count: number = start;

  return {
    increment: (): number => ++count,
    decrement: (): number => --count,
    getCount: (): number => count
  };
};

// FACTORY WITH GENERIC CLOSURES
console.log('\n--- Generic Closures ---');

const createStorage = <T,>(initial: T) => {
  let value: T = initial;

  return {
    get: (): T => value,
    set: (newValue: T): void => {
      value = newValue;
    },
    update: (fn: (current: T) => T): T => {
      value = fn(value);
      return value;
    }
  };
};

const numberStorage = createStorage(10);
console.log(numberStorage.get()); // 10
numberStorage.set(20);
console.log(numberStorage.get()); // 20

const stringStorage = createStorage('hello');
console.log(stringStorage.get()); // 'hello'
// stringStorage.set(123); // ✗ TypeScript error!

// CLOSURE WITH OBJECT STATE
console.log('\n--- Complex Closure State ---');

interface UserSession {
  userId: number;
  username: string;
  loginTime: Date;
}

const createSessionManager = () => {
  let session: UserSession | null = null;
  const loginAttempts: number[] = [];

  return {
    login: (userId: number, username: string): boolean => {
      session = { userId, username, loginTime: new Date() };
      return true;
    },
    getSession: (): UserSession | null => session,
    logout: (): void => {
      session = null;
    },
    recordAttempt: (timestamp: number): void => {
      loginAttempts.push(timestamp);
    },
    getAttempts: (): number[] => [...loginAttempts]
  };
};

const sessionMgr = createSessionManager();
sessionMgr.login(1, 'alice');
console.log(sessionMgr.getSession()?.username); // 'alice'

// HIGHER ORDER FUNCTIONS WITH CLOSURES
console.log('\n--- Closures in Higher Order Functions ---');

const createMultiplier = (multiplier: number) => {
  return (value: number): number => value * multiplier;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// MEMOIZATION WITH TYPED CLOSURES
console.log('\n--- Memoization ---');

const createMemoizedFunction = <T extends any[], R>(
  fn: (...args: T) => R
) => {
  const cache = new Map<string, R>();

  return (...args: T): R => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const expensiveAdd = (a: number, b: number): number => {
  console.log('Computing...');
  return a + b;
};

const memoizedAdd = createMemoizedFunction(expensiveAdd);
console.log(memoizedAdd(2, 3)); // Computing... 5
console.log(memoizedAdd(2, 3)); // 5 (cached)

// EVENT EMITTER WITH TYPE SAFETY
console.log('\n--- Type-Safe Event Emitter ---');

type EventListener<T> = (data: T) => void;

const createEventEmitter = <T,>() => {
  const listeners: Set<EventListener<T>> = new Set();

  return {
    on: (listener: EventListener<T>): void => {
      listeners.add(listener);
    },
    off: (listener: EventListener<T>): void => {
      listeners.delete(listener);
    },
    emit: (data: T): void => {
      listeners.forEach((listener) => listener(data));
    }
  };
};

interface Message {
  id: number;
  text: string;
}

const messageEmitter = createEventEmitter<Message>();

messageEmitter.on((msg) => {
  console.log('Received:', msg.text);
});

messageEmitter.emit({ id: 1, text: 'Hello!' });

// NESTED CLOSURES WITH TYPE NARROWING
console.log('\n--- Type Narrowing in Closures ---');

const createValidator = <T,>(schema: Record<string, boolean>) => {
  return (data: unknown): data is T => {
    if (typeof data !== 'object' || data === null) {
      return false;
    }

    const obj = data as Record<string, unknown>;

    for (const [key, shouldExist] of Object.entries(schema)) {
      if (shouldExist && !(key in obj)) {
        return false;
      }
    }

    return true;
  };
};

interface Product {
  name: string;
  price: number;
}

const isProduct = createValidator<Product>({
  name: true,
  price: true
});

const item: unknown = { name: 'Book', price: 19.99 };

if (isProduct(item)) {
  console.log('Valid product:', item.name);
}

// ✨ ADVANTAGES:
console.log('\n--- TS Closure Advantages ---');
console.log('✨ Captured variables keep their types');
console.log('✨ Return types are explicit and checked');
console.log('✨ Generic closures work with any type');
console.log('✨ Type guards prevent invalid operations');
console.log('✨ IntelliSense works inside closures');

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Closures ---');
console.log('🔴 JS: Captured variables are "any"');
console.log('🔵 TS: Captured variables maintain types');
console.log('');
console.log('🔴 JS: Return types unknown');
console.log('🔵 TS: Return types declared and checked');
console.log('');
console.log('🔴 JS: Can modify captured variables wrongly');
console.log('🔵 TS: Type system prevents wrong modifications');
console.log('');
console.log('🔴 JS: No type narrowing across closures');
console.log('🔵 TS: Type guards work in closure body');
console.log('');
console.log('🔴 JS: Generic functions not well-typed');
console.log('🔵 TS: Generics ensure closure type safety');
