/* 
  Write a recursive function called someRecursive which accepts an arary and a callback.
  The function returns true if a single value in the array returns true when passed to
  the callback. Otherwise it returns false.
*/

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb) {
  if (!arr.length) return false;
  if (cb(arr[arr.length - 1])) return true;

  return someRecursive(arr.slice(0, -1), cb);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); //true
console.log(someRecursive([4, 6, 8, 9], isOdd)); //true
console.log(someRecursive([4, 6, 8], isOdd)); //false
console.log(someRecursive([4, 6, 8], val => val > 10)); //false
