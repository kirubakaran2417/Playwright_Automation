// ===== DAY 16: JSON =====
// Learning: JSON parsing, stringification, working with JSON data

// 1. JSON.stringify() - Convert object to JSON
console.log('--- JSON.stringify() ---');
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john@example.com'
};

let jsonString = JSON.stringify(person);
console.log('Object:', person);
console.log('JSON string:', jsonString);

// 2. Pretty printing JSON
console.log('\n--- Pretty JSON ---');
let prettyJson = JSON.stringify(person, null, 2);
console.log('Formatted JSON:\n', prettyJson);

// 3. JSON with array
console.log('\n--- JSON Array ---');
let students = [
  { name: 'Alice', age: 20, grade: 'A' },
  { name: 'Bob', age: 21, grade: 'B' },
  { name: 'Charlie', age: 19, grade: 'A' }
];

let studentsJson = JSON.stringify(students, null, 2);
console.log('Students JSON:\n', studentsJson);

// 4. JSON.parse() - Convert JSON string to object
console.log('\n--- JSON.parse() ---');
let jsonData = '{"name":"Alice","age":25,"city":"New York"}';
let parsedObject = JSON.parse(jsonData);
console.log('JSON string:', jsonData);
console.log('Parsed object:', parsedObject);
console.log('Name:', parsedObject.name);
console.log('Age:', parsedObject.age);

// 5. Parsing JSON array
console.log('\n--- Parsing JSON Array ---');
let jsonArray = '[{"id":1,"name":"Item1"},{"id":2,"name":"Item2"}]';
let parsedArray = JSON.parse(jsonArray);
console.log('Parsed array:', parsedArray);
console.log('First item:', parsedArray[0].name);

// 6. Error handling in parsing
console.log('\n--- Error Handling ---');
let invalidJson = '{"name":"John", age: 30}';  // Invalid: age not quoted
try {
  let parsed = JSON.parse(invalidJson);
} catch (error) {
  console.log('Parse error:', error.message);
}

// 7. Using replacer function
console.log('\n--- Using Replacer ---');
let data = {
  name: 'John',
  age: 30,
  password: 'secret123'  // Exclude this
};

let filteredJson = JSON.stringify(data, (key, value) => {
  if (key === 'password') {
    return undefined;  // Exclude password
  }
  return value;
}, 2);
console.log('Filtered JSON:\n', filteredJson);

// 8. Using reviver function
console.log('\n--- Using Reviver ---');
let dateJson = '{"name":"John","birthDate":"1990-01-15"}';
let parsedWithDate = JSON.parse(dateJson, (key, value) => {
  if (key === 'birthDate') {
    return new Date(value);
  }
  return value;
});
console.log('Parsed with date:', parsedWithDate);
console.log('Birth date type:', parsedWithDate.birthDate.constructor.name);

// 9. Complex nested structure
console.log('\n--- Nested Structure ---');
let company = {
  name: 'Tech Corp',
  employees: [
    { id: 1, name: 'Alice', department: 'Engineering' },
    { id: 2, name: 'Bob', department: 'Sales' }
  ],
  founded: 2020
};

let companyJson = JSON.stringify(company, null, 2);
console.log('Company JSON:\n', companyJson);

let parsedCompany = JSON.parse(companyJson);
console.log('First employee:', parsedCompany.employees[0].name);

// 10. Check if valid JSON
console.log('\n--- Validate JSON ---');
function isValidJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

console.log('Is valid: {"name":"John"}', isValidJson('{"name":"John"}'));
console.log('Is valid: {name:"John"}', isValidJson('{name:"John"}'));
