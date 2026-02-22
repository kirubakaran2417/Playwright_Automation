// ===== DAY 2: DATA TYPES - STRING METHODS =====
// Learning: Working with strings and string methods

let text = '30 Days Of JavaScript';

console.log('--- String Properties & Methods ---');
console.log('Original string:', text);
console.log('Length:', text.length);
console.log('Character at index 0:', text[0]);
console.log('Character at index 0 (charAt):', text.charAt(0));

// Uppercase and lowercase
console.log('\n--- Case Conversion ---');
console.log('toUpperCase():', text.toUpperCase());
console.log('toLowerCase():', text.toLowerCase());

// Includes, startsWith, endsWith
console.log('\n--- String Search ---');
console.log('includes("JavaScript"):', text.includes('JavaScript'));
console.log('startsWith("30"):', text.startsWith('30'));
console.log('endsWith("JavaScript"):', text.endsWith('JavaScript'));

// Index operations
console.log('\n--- Finding Index ---');
console.log('indexOf("a"):', text.indexOf('a'));
console.log('lastIndexOf("a"):', text.lastIndexOf('a'));

// Substring operations
console.log('\n--- Substring Operations ---');
console.log('substring(0, 2):', text.substring(0, 2));
console.log('substr(0, 2):', text.substr(0, 2));
console.log('slice(3, 7):', text.slice(3, 7));

// Split, replace, trim
console.log('\n--- String Manipulation ---');
console.log('split(" "):', text.split(' '));
console.log('replace("30", "35"):', text.replace('30', '35'));
console.log('repeat(2):', text.repeat(2));

// Trim whitespace
let withSpaces = '  Hello  ';
console.log('Original with spaces: "' + withSpaces + '"');
console.log('trim(): "' + withSpaces.trim() + '"');
