/* 
  Write a recursive function called capitalizeFirst. Given an array of strings,
  capitalize the first letter of each string in the array.
*/

// function capitalizeFirst(arr) {
//   let capitalized = [];

//   if (arr.length === 0) {
//     return arr;
//   }

//   capitalized.push(arr[0].toUpperCase());
//   return capitalized.concat(capitalizeFirst(arr.slice(1)));
// }

function capitalizeFirst(arr) {
  if (!arr.length) return [];
  return [
    arr[0][0].toUpperCase() + arr[0].slice(1),
    ...capitalizeFirst(arr.slice(1)),
  ];
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
