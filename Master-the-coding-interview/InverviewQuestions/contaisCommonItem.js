/* 
  Given 2 arrays, create a function that let's a user know (true/false) whether these two
  arrays contain any common items.

  Example 1:
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'i']
  returns false

  Example 2:
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'x']
  returns true
*/

function createHashTable(arr) {
  const hashTable = {};
  for (let item of arr) {
    if (!hashTable[item]) {
      hashTable[item] = true;
    }
  }

  return hashTable;
}

function containsCommonItem(arr1, arr2) {
  const hashTable = createHashTable(arr1);

  for (let item of arr2) {
    if (hashTable[item]) return true;
  }

  return false;
}

// Built-in methods
function containsCommonItem2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
console.log(containsCommonItem(array1, array2)); // true
console.log(containsCommonItem2(array1, array2)); // true

const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'i'];
console.log(containsCommonItem(array3, array4)); // false;
console.log(containsCommonItem2(array3, array4)); // false;
