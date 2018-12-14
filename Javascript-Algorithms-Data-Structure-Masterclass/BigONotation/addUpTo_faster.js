const { performance } = require('perf_hooks');

/* 3 Operations only
  O(1) - Constant Time
*/
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
