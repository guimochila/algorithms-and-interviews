/* 
  Write a recursive function called reverse which accepts a string and returns a new
  string in reverse.
*/

function reverse(str) {
  if (str === '') {
    return str;
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
