// ===== DAY 12: REGULAR EXPRESSIONS =====
// Learning: Regular expressions for pattern matching

// 1. Creating regex patterns
console.log('--- Creating RegEx ---');
let pattern1 = /hello/;           // Literal notation
let pattern2 = new RegExp('hello'); // Constructor
console.log('Pattern:', pattern1);

// 2. test() method - check if pattern exists
console.log('\n--- test() Method ---');
let text = 'Hello World';
console.log('/Hello/.test():', /Hello/.test(text));        // true
console.log('/hello/.test():', /hello/.test(text));        // false (case-sensitive)
console.log('/hello/i.test():', /hello/i.test(text));      // true (i = case-insensitive)

// 3. match() method - find matches
console.log('\n--- match() Method ---');
let message = 'I have 2 apples and 5 oranges';
console.log('match(/\\d+/g):', message.match(/\d+/g));     // Find all numbers

let email = 'test@example.com';
console.log('Email match:', email.match(/\w+@\w+\.\w+/));

// 4. replace() method
console.log('\n--- replace() Method ---');
let sentence = 'The cat sat on the cat';
console.log('Original:', sentence);
console.log('replace("cat", "dog"):', sentence.replace('cat', 'dog'));
console.log('replace(/cat/g, "dog"):', sentence.replace(/cat/g, 'dog'));  // Replace all

// 5. Common regex patterns
console.log('\n--- Common Patterns ---');

// Digits
console.log('\\d pattern:', '123abc'.match(/\d+/g));

// Word characters (a-z, A-Z, 0-9, _)
console.log('\\w pattern:', 'hello_123'.match(/\w+/g));

// Whitespace
console.log('\\s pattern:', 'hello world'.split(/\s+/));

// Anchors
console.log('^ (start):', /^Hello/.test('Hello World'));   // true
console.log('$ (end):', /World$/.test('Hello World'));      // true

// Character classes
console.log('[a-z]:', /[a-z]+/.test('abc123'));            // true
console.log('[0-9]:', /[0-9]+/.test('abc123'));            // true
console.log('[^a-z]:', /[^a-z]+/.test('123'));             // true

// 6. Quantifiers
console.log('\n--- Quantifiers ---');
let pattern = /a{3}/;           // Exactly 3
console.log('aaa matches:', pattern.test('aaa'));           // true

let pattern22 = /a{2,4}/;        // 2 to 4
console.log('aaa matches:', pattern2.test('aaa'));          // true

let pattern3 = /a+/;            // 1 or more
console.log('aaa matches:', pattern3.test('aaa'));          // true

let pattern4 = /a*/;            // 0 or more
console.log('bbb matches:', pattern4.test('bbb'));          // true (0 matches)

let pattern5 = /a?/;            // 0 or 1
console.log('aaa matches:', pattern5.test('aaa'));          // true

// 7. Grouping
console.log('\n--- Grouping ---');
let date = '2023-12-25';
let datePattern = /(\\d{4})-(\\d{2})-(\\d{2})/;
let matches = date.match(datePattern);
console.log('Date matches:', matches);

// 8. Validation examples
console.log('\n--- Validation Examples ---');

// Email
let emailRegex = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
console.log('valid@email.com:', emailRegex.test('valid@email.com'));
console.log('invalid@.com:', emailRegex.test('invalid@.com'));

// Phone (simple)
let phoneRegex = /^\\d{10}$/;
console.log('1234567890:', phoneRegex.test('1234567890'));
console.log('123-456-7890:', phoneRegex.test('123-456-7890'));

// URL (simple)
let urlRegex = /^https?:\/\/.+/;
console.log('https://example.com:', urlRegex.test('https://example.com'));
console.log('example.com:', urlRegex.test('example.com'));
