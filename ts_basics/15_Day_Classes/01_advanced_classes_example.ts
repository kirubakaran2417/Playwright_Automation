// ===== DAY 15: ADVANCED CLASSES =====
// TypeScript classes with advanced features

console.log('--- Decorators (Experimental) ---');

// Note: Decorators are experimental, need tsconfig setting
// This is pseudo-code showing the pattern

interface Decorator {
  (target: any): void;
}

// GENERICS in Classes
console.log('\n--- Generic Classes ---');

class Repository<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  getAll(): T[] {
    return [...this.items];
  }
  
  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
}

interface User {
  id: number;
  name: string;
}

const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });

const users = userRepo.getAll();
console.log('Users:', users);

// STATIC TYPE GUARDS
console.log('\n--- Static Methods with Types ---');

class Shape {
  static isSquare(obj: unknown): obj is Shape {
    return obj instanceof Shape;
  }
}

// READONLY in Constructor
console.log('\n--- Readonly Constructor ---');

class Point {
  constructor(
    readonly x: number,
    readonly y: number
  ) {}
}

const p = new Point(10, 20);
console.log('Point:', p.x, p.y);
// p.x = 30;  // ERROR: readonly

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Advanced Classes ---');
console.log('JS: Generic classes not possible');
console.log('TS: Generic classes work with type parameters');
console.log('JS: No way to enforce readonly in constructors');
console.log('TS: readonly parameter shorthand');
console.log('JS: Decorators are stage 3 proposal');
console.log('TS: Decorators are experimental but available');
