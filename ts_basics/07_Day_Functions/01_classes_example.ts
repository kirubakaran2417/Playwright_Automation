// ===== DAY 7: CLASSES WITH TYPES =====
// TypeScript classes are more powerful than JavaScript classes

console.log('--- TypeScript Classes ---');

// ACCESS MODIFIERS (NEW in TypeScript!)
class BankAccount {
  public accountNumber: string;      // Accessible everywhere
  private balance: number;            // Only within this class
  protected owner: string;            // Within class and subclasses
  readonly createdAt: Date;           // Cannot be modified after creation
  
  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
    this.accountNumber = "ACC-" + Math.random().toString(36).substr(2, 9);
    this.createdAt = new Date();
  }
  
  public deposit(amount: number): void {
    this.balance += amount;
  }
  
  private calculateInterest(): number {
    return this.balance * 0.05;
  }
  
  public getBalance(): number {
    return this.balance;
  }
}

const account7 = new BankAccount("Alice", 1000);
account7.deposit(500);
console.log('Balance:', account7.getBalance());
// account7.balance = 0;  // ERROR: Property 'balance' is private
// account7.createdAt = new Date();  // ERROR: Cannot assign to readonly

// INHERITANCE WITH TYPES
console.log('\n--- Inheritance ---');

class Animal {
  constructor(protected name: string) {}
  
  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name: string, private breed: string) {
    super(name);
  }
  
  speak(): void {
    console.log(`${this.name} barks`);
  }
  
  getBreed(): string {
    return this.breed;
  }
}

const dog7 = new Dog("Buddy", "Golden Retriever");
dog7.speak();
console.log('Breed:', dog7.getBreed());

// ABSTRACT CLASSES
console.log('\n--- Abstract Classes ---');

abstract class Vehicle {
  abstract move(): void;
  
  stop(): void {
    console.log("Vehicle stopped");
  }
}

class Car7 extends Vehicle {
  move(): void {
    console.log("Car is driving");
  }
}

const car7 = new Car7();
car7.move();
car7.stop();
// const vehicle = new Vehicle();  // ERROR: Cannot instantiate abstract class

// GETTERS AND SETTERS
console.log('\n--- Getters & Setters ---');

class Person7 {
  private _age: number = 0;
  
  get age(): number {
    return this._age;
  }
  
  set age(value: number) {
    if (value < 0 || value > 150) {
      throw new Error("Invalid age");
    }
    this._age = value;
  }
}

const person7 = new Person7();
person7.age = 25;
console.log('Age:', person7.age);

// STATIC MEMBERS
console.log('\n--- Static Members ---');

class Counter {
  private static count: number = 0;
  
  static increment(): void {
    Counter.count++;
  }
  
  static getCount(): number {
    return Counter.count;
  }
}

Counter.increment();
Counter.increment();
console.log('Count:', Counter.getCount());

// READONLY PROPERTIES
console.log('\n--- Readonly ---');

class Config {
  readonly apiKey: string;
  readonly maxRetries: number = 3;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    // this.maxRetries = 5;  // ERROR: Cannot assign to readonly
  }
}

// PARAMETER PROPERTIES
console.log('\n--- Parameter Properties ---');

class User7 {
  // Shorthand: automatically creates properties
  constructor(
    public id: number,
    public name: string,
    private password: string
  ) {}
}

const user7 = new User7(1, "Alice", "secret");
console.log('User:', user7.id, user7.name);
// console.log(user7.password);  // ERROR: private

// FUNCTIONS WITH TYPES
console.log('\n--- Function Examples ---');

// Basic typed function
const add = (a: number, b: number): number => {
  return a + b;
};

console.log('5 + 3 =', add(5, 3));

// Function with optional and default parameters
const greetPerson = (name: string, greeting: string = "Hello", emoji?: string): string => {
  return `${greeting}, ${name}${emoji ? ' ' + emoji : ''}!`;
};

console.log(greetPerson("John"));
console.log(greetPerson("Jane", "Hi"));
console.log(greetPerson("Bob", "Hey", "👋"));

// Function that takes a callback
const processNumbers = (numbers: number[], callback: (n: number) => number): number[] => {
  return numbers.map(callback);
};

const doubled = processNumbers([1, 2, 3, 4], (n) => n * 2);
console.log('Doubled:', doubled);

// Function type definition
type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => (b !== 0 ? a / b : 0);

console.log('10 * 5 =', multiply(10, 5));
console.log('20 / 4 =', divide(20, 4));

// REST parameters
const sumAll = (...numbers: number[]): number => {
  return numbers.reduce((acc, n) => acc + n, 0);
};

console.log('Sum:', sumAll(1, 2, 3, 4, 5));

// Function that returns a function (currying)
const multiplier = (factor: number): ((n: number) => number) => {
  return (n: number) => n * factor;
};

const double = multiplier(2);
const triple = multiplier(3);

console.log('Double 5:', double(5));
console.log('Triple 5:', triple(5));

// Generic function
const first = <T,>(array: T[]): T | undefined => {
  return array[0];
};

console.log('First string:', first(['a', 'b', 'c']));
console.log('First number:', first([10, 20, 30]));

// Function with union types
const formatValue = (value: string | number): string => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
};

console.log('Format "hello":', formatValue("hello"));
console.log('Format 3.14159:', formatValue(3.14159));

// Function decorator pattern (simulated)
const validateAge = (age: number): boolean => {
  return age >= 0 && age <= 150;
};

const createUser8 = (name: string, age: number): { name: string; age: number } | null => {
  if (!validateAge(age)) {
    console.log('Invalid age');
    return null;
  }
  return { name, age };
};

const newUser = createUser8("Alice", 25);
console.log('Created user:', newUser);

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Classes ---');
console.log('JS: All properties are public by default');
console.log('TS: Can be public, private, protected');
console.log('JS: No type annotations for properties');
console.log('TS: All properties have types');
console.log('JS: No readonly keyword');
console.log('TS: readonly prevents modifications');
console.log('JS: No abstract classes');
console.log('TS: Abstract classes define interfaces for subclasses');
console.log('JS: Access modifiers must be enforced by convention');
console.log('TS: Access modifiers are enforced by compiler');

// ✨ FUNCTIONS KEY ADVANTAGES:
console.log('\n--- TS vs JS: Functions ---');
console.log('JS: Function parameters have no type checking');
console.log('TS: Parameter types prevent wrong arguments');
console.log('JS: No way to know function return type');
console.log('TS: Return types ensure correct outputs');
console.log('JS: Callbacks can pass anything');
console.log('TS: Callback types enforce signature');
console.log('JS: Generic functions require careful documentation');
console.log('TS: Generics provide type-safe reusable functions');
console.log('JS: Optional parameters hard to track');
console.log('TS: Optional (?) and default parameters are explicit');
console.log('JS: Union types require runtime checks');
console.log('TS: Union types with type guards are safe');

