/* 
  Write a function called sumZero which accepts a sorted array
  of integers. The function should find the first pair where the
  sum is 0. Return an array that includes both values that sum to
  zero or undefined if a pair doesnot exist.

  sumZero([-3, -2, -1, 0 , 1, 2, 3]) // [-3, 3]
  sumZero([-2, 0, 1, 3]) // undefined
  sumZero([1, 2, 3]) // undefined
*/

// Time complexity = O(nˆ2)
// Space complexity = 0(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

// 0(n)
function sumZero2(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let total = arr[i] + arr[j];
    if (total === 0) {
      return [arr[i], arr[j]];
    } else if (total > 0) {
      j--;
    } else {
      i++;
    }
  }
}
// console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero2([1, 2, 3]));

/* 
  Implement a function called countUniqueValues, which accepts a sorted
  array, and counts the unique values in the array. There can be negative
  numbers in the array, but it will always be sorted.

  countUniqueValues([1,1,1,1,1,2]) // 2
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
  countUniqueValues([]) // 0
  countUniqueValues([-2, -1, -1, 0, 1]) // 4
*/

function countUniqueValues(arr) {
  let left = 0;
  let right = 1;
  let total = 0;

  while (left < arr.length) {
    if (arr[left] !== arr[right]) {
      total++;
    }
    left++;
    right++;
  }

  return total;
}

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
