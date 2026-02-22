// ===== DAY 16: JSON WITH TYPES =====
// TypeScript makes JSON serialization/deserialization type-safe

console.log('--- Typed JSON Operations ---');

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

// JSON.stringify with type
const jsonString: string = JSON.stringify(user);
console.log('JSON:', jsonString);

// JSON.parse with type assertion
const parsed = JSON.parse(jsonString) as User;
console.log('Parsed:', parsed.name);

// SAFE parsing with type guard
console.log('\n--- Type-Safe Parsing ---');

const parseJSON = <T,>(json: string, validate: (obj: unknown) => obj is T): T | null => {
  try {
    const obj = JSON.parse(json);
    if (validate(obj)) {
      return obj;
    }
    return null;
  } catch {
    return null;
  }
};

const isUser = (obj: unknown): obj is User => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    "name" in obj &&
    "email" in obj
  );
};

const result = parseJSON(jsonString, isUser);
if (result) {
  console.log('Valid user:', result.name);
}

// REPLACER AND REVIVER WITH TYPES
console.log('\n--- Replacer & Reviver ---');

interface Post {
  id: number;
  title: string;
  createdAt: Date;
}

const post: Post = {
  id: 1,
  title: "TypeScript Tips",
  createdAt: new Date()
};

// Custom stringify
const postJson = JSON.stringify(post, (key, value) => {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
});

// Custom parse
const revived = JSON.parse(postJson, (key, value) => {
  if (key === "createdAt" && typeof value === "string") {
    return new Date(value);
  }
  return value;
}) as Post;

console.log('Revived date:', revived.createdAt instanceof Date);

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: JSON ---');
console.log('JS: JSON.parse returns any, no type checking');
console.log('TS: Can use type assertions or custom validators');
console.log('JS: No validation, wrong data can slip through');
console.log('TS: Type guards prevent invalid data');
console.log('JS: Date strings remain strings after parsing');
console.log('TS: Reviver functions can reconstruct Date objects');
console.log('JS: API responses are untyped');
console.log('TS: Interface definitions provide type safety');
