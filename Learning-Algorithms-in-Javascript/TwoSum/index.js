// O(n^2)
function twoSum(array, total) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === total) {
        result.push([array[i], array[j]]);
      }
    }
  }

  return result;
}

// O(n)
function twoSumBetter(array, total) {
  const pairs = [];
  const hashTable = [];

  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    let counterPart = total - currentNumber;

    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([currentNumber, counterPart]);
    }

    hashTable.push(currentNumber);
  }

  return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log(twoSumBetter([1, 6, 4, 5, 3, 3], 7));
