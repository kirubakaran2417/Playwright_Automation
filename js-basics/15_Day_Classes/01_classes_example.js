// ===== DAY 15: CLASSES =====
// Learning: ES6 Classes, constructors, inheritance

// 1. Basic class definition
console.log('--- Basic Class ---');
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getInfo() {
    return `${this.getFullName()}, ${this.age} years old`;
  }
}

let person1 = new Person('John', 'Doe', 30);
console.log(person1.getFullName());
console.log(person1.getInfo());

// 2. Multiple instances
console.log('\n--- Multiple Instances ---');
let person2 = new Person('Jane', 'Smith', 28);
console.log(person1.getInfo());
console.log(person2.getInfo());

// 3. Class with getters and setters
console.log('\n--- Getters and Setters ---');
class Student {
  constructor(name, grade) {
    this._name = name;
    this._grade = grade;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get grade() {
    return this._grade;
  }

  set grade(value) {
    if (value >= 0 && value <= 100) {
      this._grade = value;
    } else {
      console.log('Grade must be between 0 and 100');
    }
  }
}

let student = new Student('Alice', 85);
console.log('Name:', student.name);
console.log('Grade:', student.grade);
student.grade = 95;
console.log('Updated Grade:', student.grade);

// 4. Static methods and properties
console.log('\n--- Static Methods ---');
class Calculator {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static PI = 3.14159;
}

console.log('5 + 3 =', Calculator.add(5, 3));
console.log('5 * 3 =', Calculator.multiply(5, 3));
console.log('PI =', Calculator.PI);

// 5. Inheritance
console.log('\n--- Inheritance ---');
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }

  getInfo() {
    return `${this.name} is a ${this.breed}`;
  }
}

let dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.getInfo());
dog.speak();

// 6. Method overriding
console.log('\n--- Method Overriding ---');
let animal = new Animal('Generic Animal');
animal.speak();
dog.speak();

// 7. Super keyword
console.log('\n--- Super Keyword ---');
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  describe() {
    return `This is a ${this.type}`;
  }
}

class Car extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }

  describe() {
    return `${super.describe()} made by ${this.brand}`;
  }
}

let car = new Car('Car', 'Toyota');
console.log(car.describe());

// 8. Private fields
console.log('\n--- Private Fields ---');
class BankAccount {
  #balance = 0;  // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount(1000);
console.log('Balance:', account.getBalance());
account.deposit(500);
console.log('After deposit:', account.getBalance());
// console.log(account.#balance);  // Error: Private field
