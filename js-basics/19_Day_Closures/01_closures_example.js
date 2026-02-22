// ===== DAY 19: CLOSURES =====
// Learning: Closures, lexical scoping, practical patterns

// 1. Basic closure
console.log('--- Basic Closure ---');
function outer() {
  let count = 0;  // Variable in outer scope
  
  function inner() {
    count++;
    console.log('Count:', count);
  }
  
  return inner;
}

let counter = outer();
counter();  // Count: 1
counter();  // Count: 2
counter();  // Count: 3

// 2. Closure with parameters
console.log('\n--- Closure with Parameters ---');
function multiply(x) {
  return function(y) {
    return x * y;
  };
}

let multiplyBy5 = multiply(5);
console.log('5 * 3 =', multiplyBy5(3));
console.log('5 * 7 =', multiplyBy5(7));

let multiplyBy10 = multiply(10);
console.log('10 * 2 =', multiplyBy10(2));

// 3. Counter with closure
console.log('\n--- Counter with Closure ---');
function makeCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

let myCounter = makeCounter();
console.log('Increment:', myCounter.increment());
console.log('Increment:', myCounter.increment());
console.log('Decrement:', myCounter.decrement());
console.log('Current:', myCounter.getCount());

// 4. Data privacy with closure
console.log('\n--- Data Privacy ---');
function createBankAccount(initialBalance) {
  let balance = initialBalance;  // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      return `Deposited $${amount}. New balance: $${balance}`;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return `Withdrew $${amount}. New balance: $${balance}`;
      } else {
        return 'Insufficient funds';
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

let account = createBankAccount(1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log('Balance:', account.getBalance());

// 5. Function factory
console.log('\n--- Function Factory ---');
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

let sayHello = createGreeter('Hello');
let sayHi = createGreeter('Hi');
let sayHey = createGreeter('Hey');

console.log(sayHello('Alice'));
console.log(sayHi('Bob'));
console.log(sayHey('Charlie'));

// 6. Closure in loops
console.log('\n--- Closure in Loops ---');
// Common mistake
let functions = [];
for (var i = 0; i < 3; i++) {
  functions.push(function() {
    return i;  // All will return the same value
  });
}
console.log('Loop mistake:');
console.log(functions[0]());  // 3
console.log(functions[1]());  // 3
console.log(functions[2]());  // 3

// Solution with closure
let correctFunctions = [];
for (var j = 0; j < 3; j++) {
  correctFunctions.push((function(k) {
    return function() {
      return k;
    };
  })(j));
}
console.log('With closure:');
console.log(correctFunctions[0]());  // 0
console.log(correctFunctions[1]());  // 1
console.log(correctFunctions[2]());  // 2

// 7. Memoization with closure
console.log('\n--- Memoization ---');
function createMemoizer() {
  let cache = {};
  
  return function fibonacci(n) {
    if (n in cache) {
      console.log(`Using cached value for ${n}`);
      return cache[n];
    }
    
    console.log(`Computing fibonacci(${n})`);
    let result;
    if (n <= 1) {
      result = n;
    } else {
      result = fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    cache[n] = result;
    return result;
  };
}

let fib = createMemoizer();
console.log('fib(5):', fib(5));
console.log('fib(5):', fib(5));  // From cache

// 8. Practical example: Module pattern
console.log('\n--- Module Pattern ---');
let Calculator = (function() {
  // Private variables
  let history = [];
  
  // Private functions
  function saveToHistory(operation, result) {
    history.push({ operation, result, time: new Date() });
  }
  
  // Public methods
  return {
    add: function(a, b) {
      let result = a + b;
      saveToHistory(`${a} + ${b}`, result);
      return result;
    },
    subtract: function(a, b) {
      let result = a - b;
      saveToHistory(`${a} - ${b}`, result);
      return result;
    },
    getHistory: function() {
      return history;
    }
  };
})();

console.log('Add:', Calculator.add(5, 3));
console.log('Subtract:', Calculator.subtract(10, 4));
console.log('History:', Calculator.getHistory());
