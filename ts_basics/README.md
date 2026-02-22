# TypeScript Basics - 20 Days Learning Path

A comprehensive guide to learning TypeScript through practical examples and comparisons with JavaScript. Each day builds upon previous concepts to create a complete understanding of TypeScript's type system and advanced features.

## 📚 Curriculum Overview

### Days 1-20: Core Concepts

| Day | Topic | Focus | Key Concepts |
|-----|-------|-------|--------------|
| 1 | Introduction | Type Annotations & Interfaces | `string`, `number`, interfaces, type inference |
| 2 | Data Types | Primitive Types & Generics | tuples, enums, generics `<T>` |
| 3 | Booleans & Operators | Type Guards | `typeof`, `instanceof`, discriminated unions |
| 4 | Conditionals | Function Types | parameters, return types, overloading |
| 5 | Arrays | Type-Safe Collections | `Array<T>`, readonly arrays, tuples with labels |
| 6 | Loops | Iteration Types | for loop typing, iterators, generators |
| 7 | Functions | Classes & OOP | `class`, `extends`, access modifiers |
| 8 | Objects | Object Types | interfaces, utility types, mapped types |
| 9 | Higher Order Functions | Functional Patterns | callbacks, composition, type preservation |
| 10 | Sets & Maps | Collections | `Set<T>`, `Map<K,V>`, union/intersection types |
| 11 | Destructuring & Spread | Pattern Matching | typed destructuring, rest parameters |
| 12 | Regular Expressions | Type-Safe Regex | RegExp type, RegExpMatchArray, null safety |
| 13 | Console Object | Debugging & Logging | custom loggers, assertion functions |
| 14 | Error Handling | Error Types | custom errors, Result/Option types |
| 15 | Classes (Advanced) | Advanced OOP | generic classes, decorators, static members |
| 16 | JSON | Type-Safe Serialization | JSON.stringify/parse with types, validation |
| 17 | Web Storage | DOM Storage | typed localStorage/sessionStorage, generics |
| 18 | Promises | Asynchronous Patterns | `Promise<T>`, async/await, error handling |
| 19 | Closures | Functional Scope | typed closures, memoization, event emitters |
| 20 | Clean Code | Best Practices | design patterns, immutability, SOLID principles |

## 🎯 Learning Structure

Each day folder contains:
- **Example File**: `01_*.ts` with comprehensive, runnable code examples
- **Comparison Sections**: 🔴 JavaScript vs 🔵 TypeScript showing side-by-side differences
- **Key Advantages**: ✨ Why TypeScript is better for each concept
- **Key Differences**: ⚠️ Summary of JS vs TS contrasts

## 🔴 JavaScript vs 🔵 TypeScript

### What Each Day Teaches You:

#### **Day 1: Introduction**
- **Basic Types**: Learn how TypeScript adds type annotations to variables
- **Interfaces**: Define object shapes that JavaScript can't enforce
- **Type Inference**: Let the compiler figure out types automatically

```typescript
// 🔵 TS: Type annotations prevent errors
const name: string = "Alice";
const age: number = 25;

// 🔴 JS: No type checking
const name = "Alice"; // Could reassign to a number!
```

#### **Day 2: Data Types**
- **Tuples**: Fixed-length arrays with specific types at each position
- **Enums**: Named constants with compile-time safety
- **Generics**: Write functions that work with any type

```typescript
// 🔵 TS: Tuple enforces structure
type User = [string, number]; // name, age
const user: User = ["Alice", 25];

// 🔴 JS: Just an array, structure unknown
const user = ["Alice", 25];
```

#### **Day 3: Booleans & Operators**
- **Type Guards**: Narrow types conditionally
- **Instanceof**: Check runtime types safely
- **Discriminated Unions**: Create safe union types

```typescript
// 🔵 TS: Type narrowing with guards
if (typeof user === "object" && "name" in user) {
  console.log(user.name); // Compiler knows it's safe
}

// 🔴 JS: No guarantee of structure
if (user && user.name) {
  console.log(user.name); // Still could fail
}
```

#### **Day 4: Conditionals**
- **Function Types**: Define parameter and return types
- **Overloading**: Multiple function signatures for type safety
- **Optional Parameters**: Make parameters optional with `?`

```typescript
// 🔵 TS: Full type signature
function greet(name: string, age?: number): string {
  return `Hello ${name}`;
}

// 🔴 JS: No type information
function greet(name, age) {
  return `Hello ${name}`;
}
```

#### **Day 5: Arrays**
- **Array<T>**: Homogeneous typed arrays
- **Readonly Arrays**: Prevent mutations
- **Array Methods**: Type-safe map/filter/reduce

```typescript
// 🔵 TS: Array operations preserve types
const nums: number[] = [1, 2, 3];
const doubled = nums.map(n => n * 2); // Still number[]

// 🔴 JS: Could map to anything
const doubled = nums.map(n => n * 2); // Type is unknown
```

#### **Day 6: Loops**
- **Loop Types**: Each loop pattern has types
- **Iterators**: Implement iteration protocol
- **Generators**: Type-safe generator functions

```typescript
// 🔵 TS: Loop variable is typed
for (const item of items) {
  // item is known type, full autocomplete
}

// 🔴 JS: item is any
for (const item of items) {
  // No IntelliSense
}
```

#### **Day 7: Functions**
- **Classes**: Type-safe object-oriented programming
- **Inheritance**: Extend classes with proper typing
- **Access Modifiers**: public/private/protected

```typescript
// 🔵 TS: Private fields can't be accessed
class User {
  private email: string;
}

// 🔴 JS: No privacy enforcement
class User {
  constructor(email) {
    this.email = email; // Anyone can access
  }
}
```

#### **Day 8: Objects**
- **Interfaces**: Define object contracts
- **Utility Types**: Partial<T>, Required<T>, Readonly<T>
- **Mapped Types**: Create types from other types

```typescript
// 🔵 TS: Utility types transform types
type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;

// 🔴 JS: No type transformations possible
```

#### **Day 9: Higher Order Functions**
- **Callback Types**: Function parameters are typed
- **Composition**: Combine functions safely
- **Type Preservation**: Chain operations with correct types

```typescript
// 🔵 TS: Callback types are checked
const map = <T, R>(arr: T[], fn: (x: T) => R): R[] => {
  return arr.map(fn);
};

// 🔴 JS: Function signature unknown
const map = (arr, fn) => arr.map(fn);
```

#### **Day 10: Sets & Maps**
- **Set<T>**: Unique values of a specific type
- **Map<K,V>**: Key-value pairs with type safety
- **Union/Intersection**: Combine types logically

```typescript
// 🔵 TS: Collections maintain types
const users = new Set<User>();
const userMap = new Map<number, User>();

// 🔴 JS: Collections are "any"
const users = new Set(); // Could be anything
```

#### **Day 11: Destructuring**
- **Typed Destructuring**: Extract values with types
- **Renaming**: Extract with new names
- **Nested Destructuring**: Extract from nested structures

```typescript
// 🔵 TS: Destructured values are typed
const { name, age }: User = user;
// name is string, age is number

// 🔴 JS: No type information
const { name, age } = user; // Types unknown
```

#### **Day 12: Regular Expressions**
- **RegExp Type**: Regular expressions as typed values
- **Match Results**: Type-safe match operation
- **Null Safety**: Handle no-match cases

```typescript
// 🔵 TS: Match result is typed
const match: RegExpMatchArray | null = str.match(/pattern/);
if (match) {
  console.log(match[0]); // Safe access
}

// 🔴 JS: Could be null without warning
const match = str.match(/pattern/);
console.log(match[0]); // Could crash!
```

#### **Day 13: Console & Debugging**
- **Custom Loggers**: Build typed logging systems
- **Assertion Functions**: Narrow types in conditionals
- **Debug Interfaces**: Structure debug output

```typescript
// 🔵 TS: Custom logger enforces structure
class Logger<T> {
  log(data: T): void { }
}

// 🔴 JS: Any logging pattern allowed
```

#### **Day 14: Error Handling**
- **Custom Errors**: Extend Error class with types
- **Result<T,E>**: Either success or error
- **Option<T>**: Either value or nothing

```typescript
// 🔵 TS: Type-safe error handling
type Result<T> = { ok: true; value: T } | { ok: false; error: Error };

// 🔴 JS: Exceptions or undefined
// No way to know what could go wrong
```

#### **Day 15: Classes (Advanced)**
- **Generic Classes**: Reusable typed classes
- **Readonly Constructor**: Shorthand parameter assignment
- **Decorators**: Add metadata to classes

```typescript
// 🔵 TS: Generic repository works with any type
class Repository<T> {
  find(id: number): T { }
}

// 🔴 JS: Would need multiple classes or any typing
```

#### **Day 16: JSON**
- **Typed JSON**: Handle JSON with type safety
- **Type Assertions**: Cast JSON to types
- **Validation**: Ensure parsed data matches expected type

```typescript
// 🔵 TS: Parse with validation
const user = JSON.parse(json) as User; // With type guard

// 🔴 JS: No validation
const user = JSON.parse(json); // Could be anything
```

#### **Day 17: Web Storage**
- **Typed Storage**: Generic storage manager
- **localStorage/sessionStorage**: Typed persistence
- **Serialization**: Type-safe JSON storage

```typescript
// 🔵 TS: Typed storage
const storage = new TypedStorage<User>(localStorage, 'user');
const user = storage.get(); // Type is User | null

// 🔴 JS: Manual JSON handling
const user = JSON.parse(localStorage.getItem('user'));
```

#### **Day 18: Promises**
- **Promise<T>**: Promises with typed values
- **Async/Await**: Type-safe async functions
- **Error Handling**: Type narrowing in catch

```typescript
// 🔵 TS: Async functions are typed
async function getUser(): Promise<User> {
  return await fetchUser(1);
}

// 🔴 JS: Return type unknown
async function getUser() {
  return await fetchUser(1); // Type is any
}
```

#### **Day 19: Closures**
- **Typed Closures**: Captured variables keep types
- **Memoization**: Cache results with types
- **Event Emitters**: Type-safe event handling

```typescript
// 🔵 TS: Closures preserve types
const storage = new TypedStorage<T>();
// T is captured and maintained throughout

// 🔴 JS: Types are lost in closure
```

#### **Day 20: Clean Code**
- **Best Practices**: SOLID principles with types
- **Immutability**: readonly for safety
- **Design Patterns**: Type-safe patterns

```typescript
// 🔵 TS: Type system enforces good design
// - Single responsibility through interfaces
// - Dependency injection type-safe
// - Immutability through readonly

// 🔴 JS: Good design is discipline
// - No compiler enforcement
// - Easy to break patterns
```

## 🚀 How to Use This Curriculum

### For JavaScript Developers Learning TypeScript:
1. Start with **Day 1-2** to understand the type system basics
2. Move through **Days 3-10** to learn type patterns and safety
3. Practice **Days 11-15** with advanced features
4. Apply **Days 16-20** to real-world scenarios

### For TypeScript Beginners:
1. Read each day's example file
2. Look at the 🔴 **JavaScript** vs 🔵 **TypeScript** sections
3. Understand the ✨ **Advantages** for each concept
4. Review ⚠️ **Key Differences** summary

### Running the Examples:
```bash
# Compile TypeScript file
npx tsc <filename.ts>

# Run compiled JavaScript
node <filename.js>

# Or use ts-node for direct execution
npx ts-node <filename.ts>
```

## 💡 Key TypeScript Advantages (Summary)

1. **Type Safety**: Catch errors at compile-time, not runtime
2. **IntelliSense**: Full autocomplete and documentation
3. **Refactoring**: Compiler guides safe refactoring
4. **Documentation**: Types document code intent
5. **OOP Support**: Classes, interfaces, access modifiers
6. **Generics**: Reusable type-safe code
7. **Advanced Types**: Union, intersection, conditional types
8. **Better Tooling**: IDE support, debugging, analysis
9. **Large Scale**: Perfect for big projects with teams
10. **Gradual Adoption**: Incrementally add types to JavaScript

## 📖 Recommended Reading Order

**Beginner Path:**
→ Day 1 → Day 2 → Day 3 → Day 4 → Day 5 → Day 6 → Day 7

**Intermediate Path:**
→ Day 8 → Day 9 → Day 10 → Day 11 → Day 12 → Day 13

**Advanced Path:**
→ Day 14 → Day 15 → Day 16 → Day 17 → Day 18 → Day 19 → Day 20

## 🎓 What You'll Learn

After completing all 20 days, you'll understand:

✅ TypeScript's complete type system
✅ How to write type-safe JavaScript
✅ When and why to use each TypeScript feature
✅ Design patterns that work well in TypeScript
✅ How TypeScript prevents bugs
✅ Performance implications of types
✅ How to gradually migrate JavaScript to TypeScript
✅ Best practices for large-scale applications
✅ Integration with JavaScript libraries
✅ Advanced TypeScript patterns

## 🔗 Related Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [30 Days of JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)
- [TypeScript Playground](https://www.typescriptlang.org/play)

## ✨ Remember

> "TypeScript is not about making your code more complex. It's about making your code more predictable."

Each day builds on the previous one. Take your time, understand each concept, and practice the examples. The investment in learning TypeScript will pay dividends in code quality and developer productivity.

Happy learning! 🚀
