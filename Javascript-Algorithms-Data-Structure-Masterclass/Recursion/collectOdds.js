/* 
  Recursion Helper Method
*/

function collectOdds(arr) {
  let result = [];

  function helper(helperInput) {
    if (!helperInput.length) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 
  Pure Recursion
*/

function collectOddsValues(arr) {
  let newArr = [];

  if (!arr.length) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddsValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddsValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
