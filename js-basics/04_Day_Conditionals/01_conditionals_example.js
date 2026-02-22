// ===== DAY 4: CONDITIONALS =====
// Learning: If/else statements, switch, and ternary operators

// 1. If statement
console.log('--- If Statement ---');
let age = 20;
if (age >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are a minor');
}

// 2. If-else if-else
console.log('\n--- If-Else If-Else ---');
let score = 75;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

// 3. Switch statement
console.log('\n--- Switch Statement ---');
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  default:
    dayName = 'Weekend';
}
console.log('Day:', dayName);

// 4. Ternary operator
console.log('\n--- Ternary Operator ---');
let canVote = age >= 18 ? 'Yes, can vote' : 'No, cannot vote';
console.log('Can vote:', canVote);

// 5. Nested conditions
console.log('\n--- Nested Conditions ---');
let hasLicense = true;
let hasInsurance = true;
if (hasLicense) {
  if (hasInsurance) {
    console.log('You can drive safely');
  } else {
    console.log('You have a license but no insurance');
  }
} else {
  console.log('You need a license to drive');
}
