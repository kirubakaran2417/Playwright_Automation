// ===== DAY 11: DESTRUCTURING WITH TYPES =====
// TypeScript enhances destructuring with type safety

console.log('--- Typed Destructuring ---');

// ARRAY DESTRUCTURING
const colors: string[] = ["red", "green", "blue"];
const [primary, secondary] = colors;  // Types are inferred
console.log('Primary:', primary, 'Secondary:', secondary);

// TYPED DESTRUCTURING
interface Position {
  x: number;
  y: number;
  z?: number;
}

const { x, y, z = 0 }: Position = { x: 10, y: 20 };
console.log('Position:', x, y, z);

// RENAMING
const { x: xPos, y: yPos } = { x: 100, y: 200 };
console.log('Renamed:', xPos, yPos);

// REST in DESTRUCTURING
const [first, ...rest]: number[] = [1, 2, 3, 4, 5];
console.log('First:', first, 'Rest:', rest);

// NESTED DESTRUCTURING
interface User {
  name: string;
  address: {
    street: string;
    city: string;
  };
}

const { name, address: { city } }: User = {
  name: "Alice",
  address: { street: "123 Main St", city: "NYC" }
};
console.log('Name:', name, 'City:', city);

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Destructuring ---');
console.log('JS: Types are inferred from runtime values');
console.log('TS: Types are explicit and checked at compile-time');
console.log('JS: No way to ensure object has required properties');
console.log('TS: Interface enforces required properties');
console.log('JS: Easy to get undefined from missing properties');
console.log('TS: Types prevent undefined in destructuring');
