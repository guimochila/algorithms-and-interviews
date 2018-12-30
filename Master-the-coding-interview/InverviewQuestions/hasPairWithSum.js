/* 
  From Google interview
*/

const arr1 = [1, 2, 3, 9]; // false;
const arr2 = [1, 2, 4, 4]; // true;

function hasPairWithSum(arr, sum) {
  const comp = new Set();

  for (let item of arr) {
    if (comp.has(item)) return true;

    comp.add(sum - item);
  }
  return false;
}

console.log(hasPairWithSum(arr1, 8));
console.log(hasPairWithSum(arr2, 8));
