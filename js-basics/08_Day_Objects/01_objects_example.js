// ===== DAY 8: OBJECTS =====
// Learning: Object creation, properties, methods

// 1. Creating objects (literal notation)
console.log('--- Object Creation ---');
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  country: 'USA',
  city: 'New York'
};
console.log(person);

// 2. Accessing object properties
console.log('\n--- Accessing Properties ---');
console.log('First Name:', person.firstName);
console.log('Last Name:', person['lastName']);
console.log('Age:', person.age);

// 3. Adding and modifying properties
console.log('\n--- Modifying Properties ---');
person.age = 31;
person.occupation = 'Engineer';  // New property
console.log('Updated age:', person.age);
console.log('New occupation:', person.occupation);
console.log(person);

// 4. Object methods (functions inside objects)
console.log('\n--- Object Methods ---');
let student = {
  firstName: 'Jane',
  lastName: 'Smith',
  grades: [90, 85, 95],
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  getAverage: function() {
    let sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  }
};
console.log('Full Name:', student.getFullName());
console.log('Average Grade:', student.getAverage());

// 5. Object constructor function
console.log('\n--- Constructor Function ---');
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.describe = function() {
    return `${this.year} ${this.brand} ${this.model}`;
  };
}
let car1 = new Car('Toyota', 'Camry', 2023);
let car2 = new Car('Honda', 'Civic', 2022);
console.log(car1.describe());
console.log(car2.describe());

// 6. Object.keys, Object.values, Object.entries
console.log('\n--- Object Methods ---');
console.log('Keys:', Object.keys(person));
console.log('Values:', Object.values(person));
console.log('Entries:', Object.entries(person));

// 7. Delete property
console.log('\n--- Delete Property ---');
delete person.occupation;
console.log('After delete:', Object.keys(person));

// 8. Check if property exists
console.log('\n--- Check Property Existence ---');
console.log('Has firstName:', 'firstName' in person);
console.log('Has occupation:', 'occupation' in person);
