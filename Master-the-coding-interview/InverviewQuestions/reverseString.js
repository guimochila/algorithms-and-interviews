/* 
  Create a function that reverses a string.
*/

function reverse(str) {
  // Check input
  if (!str || str.length < 2 || typeof str !== 'string') return str;

  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;

  // Or
  // return str
  //    .split('')
  //    .reverse()
  //    .join('');
}

console.log(reverse('Hello'));
// console.log(reverse(1));
