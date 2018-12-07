// Memoize function
function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

// O(n)
function fibMemo(index, cache = []) {
  if (cache[index]) {
    return cache[index];
  } else {
    if (index < 2) {
      return index;
    } else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }

  return cache[index];
}

// O(2^n)
function fibonacci(position) {
  if (position < 2) {
    return position;
  }

  return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(12));
console.log(fibMemo(12));
const fibMemoize = memoize(fibonacci);
console.log(fibMemoize(12));
