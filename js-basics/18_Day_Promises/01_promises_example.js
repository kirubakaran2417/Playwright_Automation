// ===== DAY 18: PROMISES =====
// Learning: Promise states, chaining, error handling

// 1. Creating a promise
console.log('--- Creating a Promise ---');
let promise1 = new Promise((resolve, reject) => {
  console.log('Promise is executing');
  resolve('Success!');
});

console.log(promise1);

// 2. Promise then() method
console.log('\n--- Promise then() ---');
let simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task completed');
  }, 1000);
});

simplePromise.then(result => {
  console.log('Result:', result);
});

// 3. Promise with rejection
console.log('\n--- Promise with Rejection ---');
let rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Something went wrong!');
  }, 1000);
});

rejectedPromise.then(
  result => {
    console.log('Success:', result);
  },
  error => {
    console.log('Error:', error);
  }
);

// 4. Promise catch() method
console.log('\n--- Promise catch() ---');
let promiseWithCatch = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error occurred');
  }, 1000);
});

promiseWithCatch
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.log('Caught error:', error);
  });

// 5. Promise finally() method
console.log('\n--- Promise finally() ---');
let promiseWithFinally = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done');
  }, 1000);
});

promiseWithFinally
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('Finally block executed');
  });

// 6. Promise chaining
console.log('\n--- Promise Chaining ---');
let chainPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 500);
});

chainPromise
  .then(result => {
    console.log('Step 1 - Result:', result);
    return result * 2;
  })
  .then(result => {
    console.log('Step 2 - Result:', result);
    return result + 10;
  })
  .then(result => {
    console.log('Step 3 - Final result:', result);
  })
  .catch(error => {
    console.log('Error in chain:', error);
  });

// 7. Promise.all() - wait for all promises
console.log('\n--- Promise.all() ---');
let promise_a = new Promise(resolve => setTimeout(() => resolve('A'), 100));
let promise_b = new Promise(resolve => setTimeout(() => resolve('B'), 200));
let promise_c = new Promise(resolve => setTimeout(() => resolve('C'), 150));

Promise.all([promise_a, promise_b, promise_c])
  .then(results => {
    console.log('All promises resolved:', results);
  })
  .catch(error => {
    console.log('One promise failed:', error);
  });

// 8. Promise.race() - first promise to settle
console.log('\n--- Promise.race() ---');
let race_1 = new Promise(resolve => setTimeout(() => resolve('First'), 200));
let race_2 = new Promise(resolve => setTimeout(() => resolve('Second'), 100));

Promise.race([race_1, race_2])
  .then(result => {
    console.log('First to finish:', result);
  });

// 9. Promise.allSettled() - all promises settle
console.log('\n--- Promise.allSettled() ---');
let settled_1 = new Promise(resolve => setTimeout(() => resolve('Success'), 100));
let settled_2 = new Promise((resolve, reject) => 
  setTimeout(() => reject('Failed'), 200)
);
let settled_3 = new Promise(resolve => setTimeout(() => resolve('Also success'), 150));

Promise.allSettled([settled_1, settled_2, settled_3])
  .then(results => {
    console.log('All settled:');
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`  ${index}: ${result.value}`);
      } else {
        console.log(`  ${index}: ${result.reason}`);
      }
    });
  });

// 10. Promise.any() - first successful promise
console.log('\n--- Promise.any() ---');
let any_1 = new Promise((resolve, reject) => 
  setTimeout(() => reject('Failed 1'), 100)
);
let any_2 = new Promise(resolve => 
  setTimeout(() => resolve('Success'), 200)
);
let any_3 = new Promise((resolve, reject) => 
  setTimeout(() => reject('Failed 3'), 150)
);

Promise.any([any_1, any_2, any_3])
  .then(result => {
    console.log('First success:', result);
  })
  .catch(error => {
    console.log('All failed:', error);
  });

// 11. Real-world promise example (simulated fetch)
console.log('\n--- Real-world Example ---');
function fetchData(delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject('Failed to fetch data');
      } else {
        resolve({ id: 1, name: 'John', email: 'john@example.com' });
      }
    }, delay);
  });
}

fetchData(500)
  .then(data => {
    console.log('User data:', data);
    return fetchData(300);  // Another fetch
  })
  .then(data => {
    console.log('Additional data:', data);
  })
  .catch(error => {
    console.log('Fetch error:', error);
  });
