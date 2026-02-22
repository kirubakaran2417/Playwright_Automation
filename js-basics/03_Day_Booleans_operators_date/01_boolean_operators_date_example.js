// ===== DAY 3: BOOLEANS, OPERATORS, AND DATE =====
// Learning: Boolean operations and JavaScript Date object

// 1. Boolean operations
console.log('--- Boolean Operations ---');
let x = 5;
let y = 10;

console.log('x > y:', x > y);           // false
console.log('x < y:', x < y);           // true
console.log('x == y:', x == y);         // false
console.log('x === "5":', x === "5");   // false (strict comparison)

// 2. Logical operators
console.log('\n--- Logical Operators ---');
console.log('true && true:', true && true);     // true
console.log('true && false:', true && false);   // false
console.log('true || false:', true || false);   // true
console.log('!true:', !true);                   // false

// 3. Date object
console.log('\n--- Date Object ---');
let now = new Date();
console.log('Current Date and Time:', now);
console.log('Full String:', now.toString());
console.log('Date String:', now.toDateString());
console.log('Time String:', now.toTimeString());

// 4. Date methods
console.log('\n--- Date Methods ---');
console.log('getFullYear():', now.getFullYear());
console.log('getMonth():', now.getMonth());      // 0-11 (0 = January)
console.log('getDate():', now.getDate());        // Day of month
console.log('getDay():', now.getDay());          // Day of week (0 = Sunday)
console.log('getHours():', now.getHours());
console.log('getMinutes():', now.getMinutes());
console.log('getSeconds():', now.getSeconds());

// 5. Creating specific dates
console.log('\n--- Creating Specific Dates ---');
let birthDate = new Date('1990-01-15');
console.log('Birth Date:', birthDate);

let specificDate = new Date(2023, 11, 25);  // Year, Month (0-11), Day
console.log('Specific Date:', specificDate);

// 6. Time calculations
console.log('\n--- Time Calculations ---');
let past = new Date('2020-01-01');
let timeDifference = now - past;  // milliseconds
let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log('Days since 2020-01-01:', daysDifference);
