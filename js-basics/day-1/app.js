function add(a, b) {
  return a + b;
}

let result = add(5, "20");
console.log("Result:"+result); // Result: 520 (string concatenation due to type coercion)