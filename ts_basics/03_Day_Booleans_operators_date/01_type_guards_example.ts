// ===== DAY 3: TYPE GUARDS & CONDITIONAL TYPES =====
// Advanced type checking techniques in TypeScript

console.log('--- Type Guards ---');

// TYPE OF Guard
const processValue = (value: string | number): void => {
  if (typeof value === "string") {
    console.log("String length:", value.length);
  } else {
    console.log("Number value:", value * 2);
  }
};

processValue("hello");
processValue(42);

// INSTANCEOF Guard
class DogClass {
  bark() { console.log("Woof!"); }
}

class CatClass {
  meow() { console.log("Meow!"); }
}

const makeSound = (animal: DogClass | CatClass): void => {
  if (animal instanceof DogClass) {
    animal.bark();
  } else {
    animal.meow();
  }
};

makeSound(new DogClass());
makeSound(new CatClass());

// IN operator (check if property exists)
interface Car {
  drive(): void;
}

interface Boat {
  sail(): void;
}

const operate = (vehicle: Car | Boat): void => {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
};

// CUSTOM Type Guard
const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

// DISCRIMINATED UNIONS
console.log('\n--- Discriminated Unions ---');

type SuccessResult = { status: "success"; data: string };
type ErrorResult = { status: "error"; message: string };
type ResultType = SuccessResult | ErrorResult;

const handleResult2 = (result: ResultType): void => {
  if (result.status === "success") {
    console.log("Data:", result.data);
  } else {
    console.log("Error:", result.message);
  }
};

// CONDITIONAL TYPES
console.log('\n--- Conditional Types ---');

type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">;   // true
type B = IsString<number>;    // false

// PRACTICAL: Extract array element type
type FlattenType<T> = T extends Array<infer U> ? U : T;

type Str = FlattenType<string[]>;      // string
type Num = FlattenType<number>;        // number

// NEVER type in unions
type RemoveNull<T> = T extends null ? never : T;

type NoNull = RemoveNull<string | null>;  // string

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Type Guards ---');
console.log('JS: Runtime checks with typeof/instanceof only');
console.log('TS: Compile-time type narrowing + runtime checks');
console.log('JS: No way to discriminate between union members safely');
console.log('TS: Discriminated unions make pattern matching type-safe');
console.log('JS: No conditional type logic');
console.log('TS: Conditional types enable complex type transformations');
