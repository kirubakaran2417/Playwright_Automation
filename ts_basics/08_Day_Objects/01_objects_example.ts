// ===== DAY 8: OBJECTS & RECORDS =====
// TypeScript adds strict typing to objects

console.log('--- Typed Objects ---');

// Basic object type
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
}

const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com"
};

console.log('User:', user);

// RECORD TYPE (all properties same type)
console.log('\n--- Record Type ---');

type ColorCode = Record<string, string>;
const colors: ColorCode = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
};

console.log('Colors:', colors);

// UTILITY TYPES
console.log('\n--- Utility Types ---');

// PARTIAL - all properties optional
interface Product {
  id: number;
  name: string;
  price: number;
}

type PartialProduct = Partial<Product>;
const update: PartialProduct = { price: 99.99 };  // Other properties optional

// REQUIRED - all properties mandatory
type RequiredProduct = Required<Product>;
// Can't create object without all properties

// READONLY - all properties readonly
type ReadonlyProduct = Readonly<Product>;
// const prod: ReadonlyProduct = { id: 1, name: "Laptop", price: 1000 };
// prod.price = 500;  // ERROR

// PICK - select specific properties
type ProductPreview = Pick<Product, "id" | "name">;
const preview: ProductPreview = { id: 1, name: "Laptop" };

// OMIT - exclude properties
type ProductWithoutPrice = Omit<Product, "price">;
const noprice: ProductWithoutPrice = { id: 1, name: "Laptop" };

// KEYOF TYPE
console.log('\n--- Keyof ---');

const getProperty = <T, K extends keyof T,>(obj: T, key: K): T[K] => {
  return obj[key];
};

const name = getProperty(user, "name");  // Typed as string
// getProperty(user, "invalid");  // ERROR

// INDEX SIGNATURES
console.log('\n--- Index Signatures ---');

interface StringMap {
  [key: string]: string;
}

const settings: StringMap = {
  theme: "dark",
  language: "en",
  timezone: "UTC"
};

console.log('Settings:', settings);

// MAPPED TYPES
console.log('\n--- Mapped Types ---');

type Getters<T> = {
  [K in keyof T as `get${string & K}`]: () => T[K];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// Equivalent to:
// {
//   getName: () => string;
//   getAge: () => number;
// }

// CONDITIONAL TYPES WITH OBJECTS
console.log('\n--- Conditional Object Types ---');

type Flatten<T> = T extends Array<infer U> ? U : T;
type GetFieldType<T, K extends keyof T> = T[K];

const userAge: GetFieldType<User, "id"> = 25;  // number

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Objects ---');
console.log('JS: Objects can have any properties, no type checking');
console.log('TS: Objects must match interface structure');
console.log('JS: Properties can change types dynamically');
console.log('TS: Properties have fixed types');
console.log('JS: No way to enforce readonly');
console.log('TS: readonly keyword prevents modifications');
console.log('JS: Must manually validate object shape');
console.log('TS: Compiler validates object structure');
console.log('JS: Accessing non-existent properties returns undefined');
console.log('TS: Accessing non-existent properties is a compile error');
