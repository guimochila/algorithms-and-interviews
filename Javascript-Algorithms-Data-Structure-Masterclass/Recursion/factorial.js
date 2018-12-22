function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
