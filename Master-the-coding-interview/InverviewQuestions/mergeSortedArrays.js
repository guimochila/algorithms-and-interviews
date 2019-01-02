/* 
  Given two sorted arrays, write a function to merge the arrays.
*/

const mergeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a > b);
};

function mergeSortedArrays2(arr1, arr2) {
  const mergedArray = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      mergedArray.push(arr1.shift());
    } else {
      mergedArray.push(arr2.shift());
    }
  }

  return [...mergedArray, ...arr1, ...arr2];
}

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
