// ===== DAY 10: ADVANCED TYPES & UTILITY TYPES =====
// TypeScript's type system goes beyond basic annotations

console.log('--- Set and Map with Generics ---');

// SET with type
const numberSet: Set<number> = new Set([1, 2, 3]);
const stringSet: Set<string> = new Set(["a", "b", "c"]);

// MAP with key-value types
const userMap: Map<number, string> = new Map();
userMap.set(1, "Alice");
userMap.set(2, "Bob");

console.log('Set:', numberSet);
console.log('Map:', userMap);

// UNION vs INTERSECTION
console.log('\n--- Union vs Intersection ---');

type Admin = { admin: boolean };
type User = { name: string };

type AdminUser = Admin & User;  // INTERSECTION: must have both
const adminUser: AdminUser = { admin: true, name: "Alice" };

type Response = string | number;  // UNION: either string or number
const res: Response = "success";

// NEVER for exhaustiveness checks
console.log('\n--- Never Type ---');

type Direction = "north" | "south" | "east" | "west";

const move = (dir: Direction): string => {
  switch (dir) {
    case "north": return "Going north";
    case "south": return "Going south";
    case "east": return "Going east";
    case "west": return "Going west";
    // If you forget a case, TypeScript will error if the variable could be never
  }
};

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Advanced Types ---');
console.log('JS: Set/Map are untyped');
console.log('TS: Set<T> and Map<K,V> ensure type safety');
console.log('JS: Union means type could be anything');
console.log('TS: Union restricts to specific types');
console.log('JS: No intersection concept');
console.log('TS: Intersection combines type requirements');
