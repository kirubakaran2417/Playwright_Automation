// ===== DAY 18: PROMISES WITH TYPES =====
// TypeScript ensures Promise values are correctly typed

console.log('--- Typed Promises ---');

// Basic Promise<T>
const delayedValue: Promise<string> = new Promise((resolve) => {
  setTimeout(() => resolve('Hello from Promise!'), 100);
});

delayedValue.then((value) => {
  console.log(value); // value is typed as string
  // console.log(value.toUpperCase()); // ✓ Type-safe!
});

// TYPED PROMISE FUNCTIONS
console.log('\n--- Typed Functions Returning Promises ---');

interface User {
  id: number;
  name: string;
}

// Function returns Promise<User>
const fetchUser = (id: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve({ id, name: `User ${id}` });
    } else {
      reject(new Error('Invalid user id'));
    }
  });
};

fetchUser(1)
  .then((user) => {
    // user is typed as User
    console.log('Fetched:', user.name);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

// PROMISE CHAINING WITH TYPES
console.log('\n--- Promise Chaining ---');

const fetchUserWithPosts = (userId: number): Promise<User & { posts: string[] }> => {
  return fetchUser(userId).then((user) => ({
    ...user,
    posts: ['Post 1', 'Post 2']
  }));
};

fetchUserWithPosts(1).then((result) => {
  // result has both User properties and posts
  console.log('Posts count:', result.posts.length);
});

// PROMISE.ALL WITH TYPED ARRAY
console.log('\n--- Promise.all ---');

const fetchData = (): Promise<[User, string[], boolean]> => {
  return Promise.all([
    fetchUser(1),
    Promise.resolve(['item1', 'item2']),
    Promise.resolve(true)
  ]);
};

fetchData().then(([user, items, isValid]) => {
  console.log('User:', user.name);
  console.log('Items:', items);
  console.log('Valid:', isValid);
});

// PROMISE.RACE
console.log('\n--- Promise.race ---');

const quickPromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve('Quick!'), 50);
});

const slowPromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve('Slow!'), 500);
});

Promise.race([quickPromise, slowPromise]).then((result) => {
  console.log('First result:', result);
});

// ASYNC/AWAIT WITH TYPES
console.log('\n--- Async/Await ---');

// Return type is explicitly Promise<User>
const asyncFetchUser = async (id: number): Promise<User> => {
  const user = await fetchUser(id);
  return user;
};

// Using async function
const processUser = async () => {
  try {
    const user = await asyncFetchUser(1);
    console.log('Async user:', user.name);
  } catch (error) {
    console.error('Async error:', error);
  }
};

// processUser();

// ERROR HANDLING WITH TYPES
console.log('\n--- Typed Error Handling ---');

class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
  }
}

const fetchWithErrorHandling = async (id: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve({ id, name: `User ${id}` });
    } else {
      reject(new APIError('User not found', 404));
    }
  });
};

const handleFetch = async () => {
  try {
    const user = await fetchWithErrorHandling(1);
    console.log('Success:', user.name);
  } catch (error) {
    if (error instanceof APIError) {
      console.error(`API Error ${error.statusCode}:`, error.message);
    }
  }
};

// GENERIC PROMISE UTILITIES
console.log('\n--- Promise Utilities ---');

// Retry logic with type preservation
const retry = async <T,>(
  fn: () => Promise<T>,
  attempts: number = 3
): Promise<T> => {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === attempts - 1) throw error;
    }
  }
  throw new Error('Max retries exceeded');
};

// Timeout wrapper
const withTimeout = async <T,>(
  promise: Promise<T>,
  ms: number
): Promise<T> => {
  const timeout = new Promise<T>((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
  return Promise.race([promise, timeout]);
};

// ALL SETTLED (TypeScript 4.1+)
console.log('\n--- Promise.allSettled ---');

const results = await Promise.allSettled([
  fetchUser(1),
  fetchUser(2),
  fetchUser(-1) // This will reject
]);

// results is typed as array of PromiseSettledResult<User>
results.forEach((result) => {
  if (result.status === 'fulfilled') {
    console.log('Success:', result.value.name);
  } else {
    console.log('Failed:', result.reason.message);
  }
});

// ✨ ADVANTAGES:
console.log('\n--- TS Promise Advantages ---');
console.log('✨ Generic Promise<T> ensures type safety');
console.log('✨ Function return types prevent mistakes');
console.log('✨ Catch blocks with instanceof for error types');
console.log('✨ Async/await return types are explicit');
console.log('✨ Promise chaining preserves types');
console.log('✨ Utilities work with any Promise type');

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Promises ---');
console.log('🔴 JS: .then(value => ...) - value is any');
console.log('🔵 TS: .then((value: string) => ...) - value is typed');
console.log('');
console.log('🔴 JS: No way to know what Promise resolves to');
console.log('🔵 TS: Promise<T> declares T explicitly');
console.log('');
console.log('🔴 JS: Error type is unknown in catch');
console.log('🔵 TS: instanceof checks narrow error types');
console.log('');
console.log('🔴 JS: Chaining returns any');
console.log('🔵 TS: Chaining preserves/updates types');
console.log('');
console.log('🔴 JS: Promise.all results are unknown');
console.log('🔵 TS: Promise.all<[T1, T2]> types each value');
