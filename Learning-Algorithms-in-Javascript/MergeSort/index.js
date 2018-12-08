function mergeSort(array) {
  if (array.length < 2) return array;

  const centerIndex = Math.floor(array.length / 2);
  const array1 = array.slice(0, centerIndex);
  const array2 = array.slice(centerIndex);

  return merge(mergeSort(array1), mergeSort(array2));
}

function merge(array1, array2) {
  const results = [];

  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      results.push(array1.shift());
    } else {
      results.push(array2.shift());
    }
  }
  return [...results, ...array1, ...array2];
}

console.log(mergeSort([3, 2, 4, 1]));
