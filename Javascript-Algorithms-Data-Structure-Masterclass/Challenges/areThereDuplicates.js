/* 
  Implement a function called, areThereDuplicates which accepts a variable
  number of arguments, and checks whether there are any duplicates among the
  arguments passed in. You can solve this using the frequency counter pattern
  or the multiple pointers pattern.
*/

function areThereDuplicates(...items) {
  let collection = {};

  for (let key in items) {
    collection[items[key]] = ++collection[items[key]] || 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }

  return false;
}

function areThereDuplicates2(...items) {
  return new Set(items).size !== items.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true
