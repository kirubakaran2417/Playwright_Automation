//operators

// Arithmetic Operators-> +, -, *, /, %, ++, --
let a = 10;
let b = 3;
console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.3333
console.log("Modulus:", a % b); // 1
console.log("Increment:", ++a); // 11
console.log("Decrement:", --b); // 2    

// Comparison Operators-> ==, ===, !=, !==, >, <, >=, <=
let x = 5;
let y = '5';
console.log("Equal (==):", x == y); // true
//loose equality checks only value
console.log("Strict Equal (===):", x === y); // false 
//strict equality checks both value and type
console.log("Not Equal (!=):", x != y); // false
console.log("Strict Not Equal (!==):", x !== y); // true
console.log("Greater Than (>):", x > 3);
console.log("Less Than (<):", x < 10);
console.log("Greater Than or Equal (>=):", x >= 5);
console.log("Less Than or Equal (<=):", x <= 4);

//Type Coercion
console.log("Type Coercion with + :", '5' + 10);// '510' (string)
console.log("Type Coercion with - :", '5' - 2); // 3 (number)
