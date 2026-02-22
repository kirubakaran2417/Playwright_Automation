// ===== DAY 2: DATA TYPES - GENERICS =====
// Generics: Write code that works with any type while maintaining type safety

console.log('--- Generics Basics ---');

// GENERIC FUNCTIONS
// JavaScript: No type information
// const getFirstElement = (array) => array[0];

// TypeScript: With Generics
const getFirstElement = <T,>(array: T[]): T => {
  return array[0];
};

// TypeScript knows the return type based on input
const firstString = getFirstElement(["a", "b", "c"]);   // Type: string
const firstNumber = getFirstElement([1, 2, 3]);         // Type: number

console.log('First string:', firstString);
console.log('First number:', firstNumber);

// ✨ ADVANTAGE: Type-safe without duplicating code for each type

// GENERIC ARRAYS
console.log('\n--- Generic Array Types ---');

type StringArray = Array<string>;
type NumberArray = Array<number>;

const words1: StringArray = ["hello", "world"];
const numbers1g: NumberArray = [1, 2, 3];

console.log('Words:', words1);
console.log('Numbers:', numbers1g);

// GENERIC INTERFACES
console.log('\n--- Generic Interfaces ---');

interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

// Implementing for string
const stringContainer: Container<string> = {
  value: "Hello",
  getValue() { return this.value; },
  setValue(value: string) { this.value = value; }
};

// Implementing for number
const numberContainer: Container<number> = {
  value: 42,
  getValue() { return this.value; },
  setValue(value: number) { this.value = value; }
};

console.log('String container:', stringContainer.getValue());
console.log('Number container:', numberContainer.getValue());

// ✨ ADVANTAGE: Single interface works for any type, no code duplication

// GENERIC CONSTRAINTS
console.log('\n--- Generic Constraints ---');

interface Identifiable {
  id: number;
}

const getId = <T extends Identifiable,>(obj: T): number => {
  return obj.id;
};

const user1g = { id: 1, name: "John" };
const product1g = { id: 101, price: 99.99 };

console.log('User ID:', getId(user1g));
console.log('Product ID:', getId(product1g));

// getId({ name: "Invalid" });  // ERROR: doesn't have id property

// MULTIPLE GENERIC TYPES
console.log('\n--- Multiple Generics ---');

const createPair = <T, U,>(first: T, second: U): [T, U] => {
  return [first, second];
};

const pair1 = createPair("hello", 42);        // [string, number]
const pair2 = createPair(true, { name: "John" });  // [boolean, object]

console.log('Pair 1:', pair1);
console.log('Pair 2:', pair2);

// GENERIC CLASSES
console.log('\n--- Generic Classes ---');

class Stack<T> {
  private items: T[] = [];
  
  push(value: T): void {
    this.items.push(value);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
  
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log('Peek:', numberStack.peek());  // 3

const stringStack = new Stack<string>();
stringStack.push("a");
stringStack.push("b");
console.log('Peek:', stringStack.peek());  // "b"

// ✨ ADVANTAGE: Same Stack class works for any type, fully type-safe

// KEYOF operator
console.log('\n--- Keyof Operator ---');

interface Person {
  name: string;
  age: number;
  email: string;
}

const getProperty2 = <T, K extends keyof T,>(obj: T, key: K): T[K] => {
  return obj[key];
};

const person1g: Person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log('Name:', getProperty2(person1g, "name"));
console.log('Age:', getProperty2(person1g, "age"));
// getProperty2(person1g, "invalid");  // ERROR: invalid is not a key of Person

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Generics ---');
console.log('JS: Dynamic types, same function works for any type but no type safety');
console.log('TS: Generics provide flexibility while maintaining type safety');
console.log('JS: No way to enforce type constraints on function parameters');
console.log('TS: Generic constraints ensure inputs have required properties');
console.log('JS: No type checking for object properties');
console.log('TS: keyof and type indexing prevent accessing non-existent properties');
console.log('JS: Reuse means copy-paste or loss of type information');
console.log('TS: Generics enable code reuse without sacrificing type safety');
