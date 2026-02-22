// ===== DAY 12: REGULAR EXPRESSIONS WITH TYPES =====
// TypeScript adds type safety around regex operations

console.log('--- Typed RegEx ---');

// Basic RegEx
const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email: string): boolean => {
  return emailPattern.test(email);
};

console.log('Valid email:', validateEmail("test@example.com"));
console.log('Invalid email:', validateEmail("invalid@"));

// TYPE for match results
const text: string = "Hello 123 World 456";
const pattern: RegExp = /\d+/g;

const matches: RegExpMatchArray | null = text.match(pattern);
if (matches) {
  console.log('Matches:', matches);
}

// CAPTURE groups with types
const parseDate = (dateStr: string): [string, string, string] | null => {
  const pattern = /(\d{4})-(\d{2})-(\d{2})/;
  const result = dateStr.match(pattern);
  
  if (!result) return null;
  
  const [, year, month, day] = result;
  return [year, month, day];
};

const parsed = parseDate("2023-12-25");
console.log('Parsed date:', parsed);

// ⚠️ KEY DIFFERENCES:
console.log('\n--- TS vs JS: Regex ---');
console.log('JS: Regex results are loosely typed');
console.log('TS: Types ensure correct handling of results');
console.log('JS: Easy to forget null checks');
console.log('TS: Compiler enforces null safety');
