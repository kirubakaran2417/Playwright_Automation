// ===== DAY 1: INTRODUCTION - INTERFACES & TYPES =====
// TypeScript's secret weapon: Interfaces and Type Aliases

// 🔴 JAVASCRIPT: No concept of interfaces
// You just pass objects around, hope they have the right properties
// const logUser = (user) => {
//   console.log(user.name);  // Could be undefined if user doesn't have name
// };

// 🔵 TYPESCRIPT: Define expected structure with Interfaces
interface UserInterface {
  name: string;
  age: number;
  email: string;
  isActive?: boolean;  // Optional property (?)
}

const logUser = (user: UserInterface) => {
  console.log(`User: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
};

const user1i: UserInterface = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isActive: true
};

logUser(user1i);

// ✨ BENEFITS:
// - If you try to create User without required properties, TypeScript will error
// - IDE knows what properties User should have
// - Clear contract for what data you expect

// TYPE ALIASES (similar to interfaces)
console.log('\n--- Type Aliases ---');

type ProductType = {
  id: number;
  name: string;
  price: number;
};

const product1: ProductType = {
  id: 1,
  name: "Laptop",
  price: 999.99
};

console.log('Product:', product1);

// DIFFERENCE: Interface vs Type Alias
console.log('\n--- Interface vs Type Alias ---');
// Interface: Used for object shapes, can be extended
// Type Alias: More flexible, can represent anything

// Interface
interface Animal {
  name: string;
  sound(): void;
}

// Implementing interface
class DogClass implements Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  sound() {
    console.log(`${this.name} barks`);
  }
}

const dogI = new DogClass("Buddy");
dogI.sound();

// READONLY properties
console.log('\n--- Readonly Properties ---');

interface ReadonlyUserInterface {
  readonly id: number;      // Cannot be changed after creation
  readonly name: string;
  email: string;             // Can be changed
}

// const fixedUser: ReadonlyUserInterface = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com"
// };
// fixedUser.id = 2;  // ERROR: Cannot assign to readonly property
// fixedUser.email = "newemail@example.com";  // OK

console.log('Readonly protects data integrity');

// EXTENDING INTERFACES
console.log('\n--- Extending Interfaces ---');

interface PersonInterface {
  name: string;
  age: number;
}

interface EmployeeInterface extends PersonInterface {
  employeeId: number;
  department: string;
}

const employee1: EmployeeInterface = {
  name: "Jane Smith",
  age: 28,
  employeeId: 12345,
  department: "Engineering"
};

console.log('Employee:', employee1);

// UNION TYPES with Interfaces
console.log('\n--- Union Types ---');

type ResponseType = UserInterface | ProductType;

const handleResponseDataFunc = (data: ResponseType) => {
  // TypeScript knows data could be UserInterface or ProductType
  if ('email' in data) {
    console.log('This is a User');
  } else {
    console.log('This is a Product');
  }
};

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Interfaces ---');
console.log('JavaScript: No interfaces, runtime errors if wrong data');
console.log('TypeScript: Interfaces enforce structure, compile-time errors');
console.log('JavaScript: Must manually check object properties');
console.log('TypeScript: IDE autocomplete for interface properties');
console.log('JavaScript: Refactoring is risky, hard to find all usages');
console.log('TypeScript: Change interface = compiler tells you what breaks');
