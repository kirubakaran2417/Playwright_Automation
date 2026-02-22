// ===== DAY 6: LOOPS =====
// Learning: For, while, do-while loops and loop control

// 1. For loop
console.log('--- For Loop (0 to 4) ---');
for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i);
}

// 2. For loop with array
console.log('\n--- For Loop with Array ---');
let fruits = ['Apple', 'Banana', 'Orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, ':', fruits[i]);
}

// 3. While loop
console.log('\n--- While Loop ---');
let count = 0;
while (count < 3) {
  console.log('Count:', count);
  count++;
}

// 4. Do-while loop
console.log('\n--- Do-While Loop ---');
let num = 0;
do {
  console.log('Number:', num);
  num++;
} while (num < 3);

// 5. Break statement
console.log('\n--- Break Statement ---');
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log('Breaking at:', i);
    break;
  }
  console.log(i);
}

// 6. Continue statement
console.log('\n--- Continue Statement ---');
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log('Skipping:', i);
    continue;
  }
  console.log(i);
}

// 7. Nested loops (multiplication table)
console.log('\n--- Nested Loops (Multiplication Table) ---');
for (let i = 1; i <= 3; i++) {
  let row = '';
  for (let j = 1; j <= 3; j++) {
    row += (i * j) + ' ';
  }
  console.log(row);
}

// 8. For...of loop
console.log('\n--- For...Of Loop ---');
for (let fruit of fruits) {
  console.log(fruit);
}

// 9. For...in loop (gets index)
console.log('\n--- For...In Loop ---');
for (let index in fruits) {
  console.log(index, ':', fruits[index]);
}
