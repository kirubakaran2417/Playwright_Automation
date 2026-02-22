// ===== DAY 9: HIGHER ORDER FUNCTIONS & CALLBACKS =====
// TypeScript ensures type safety in functional programming

console.log('--- Callback Functions with Types ---');

// Type alias for callback
type NumberCallback = (num: number) => void;
type Filter<T> = (item: T) => boolean;
type Mapper<T, U> = (item: T) => U;

// Higher order function
const forEach = <T,>(array: T[], callback: (item: T) => void): void => {
  array.forEach(callback);
};

forEach([1, 2, 3], (num) => console.log('Number:', num));

// ARRAY METHODS WITH TYPES
console.log('\n--- Array Methods ---');

const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map<number>((n) => n * 2);
console.log('Doubled:', doubled);

// filter
const evens = numbers.filter<number>((n) => n % 2 === 0);
console.log('Evens:', evens);

// reduce
const sum = numbers.reduce<number>((acc, n) => acc + n, 0);
console.log('Sum:', sum);

// find
const first = numbers.find<number>((n) => n > 2);
console.log('First > 2:', first);

// FUNCTION COMPOSITION
console.log('\n--- Function Composition ---');

const compose = <A, B, C,>(
  f: (a: A) => B,
  g: (b: B) => C
): ((a: A) => C) => {
  return (a) => g(f(a));
};

const addOne = (n: number): number => n + 1;
const double = (n: number): number => n * 2;
const addOneThenDouble = compose(addOne, double);

console.log('5 + 1 then * 2:', addOneThenDouble(5));

// PIPE / FLOW
console.log('\n--- Pipe ---');

const pipe = <T,>(...fns: Array<(arg: T) => T>) => (value: T): T =>
  fns.reduce((acc, fn) => fn(acc), value);

const addTwo = (n: number) => n + 2;
const triple = (n: number) => n * 3;

const transform = pipe(addTwo, triple, addOne);
console.log('(5 + 2) * 3 + 1:', transform(5));

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Higher Order Functions ---');
console.log('JS: Callbacks have no type information');
console.log('TS: Callback types are explicit and checked');
console.log('JS: Map/filter/reduce results are untyped');
console.log('TS: Results preserve and track types');
console.log('JS: Easy to pass wrong callback');
console.log('TS: Compiler ensures correct callbacks');
console.log('JS: Function composition is manual');
console.log('TS: Generic function composition is type-safe');
