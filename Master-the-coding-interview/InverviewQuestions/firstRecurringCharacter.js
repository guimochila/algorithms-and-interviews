/* 
  Google Question
  Given an array = [2,5,1,2,3,5,1,2,4];
  It should return 2
*/

const firstRecurringChar = arr => {
  const map = {};

  for (let item of arr) {
    if (!map[item]) map[item] = true;
    else return item;
  }

  return;
};

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringChar([2, 3, 4, 5])); // undefined
