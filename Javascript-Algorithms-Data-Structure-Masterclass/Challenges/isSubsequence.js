/* 
  Write a function called isSubsequence which takes in two strings and checks whether
  the characters in the first string form a subsequence of the characters in the second
  string. In other words, the function should check whether the characters in the first
  string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(string1, string2) {
  let left = 0;
  let right = 0;

  while (right < string2.length) {
    if (string1[left] === string2[right]) {
      left++;
    }
    if (left === string1.length) {
      return true;
    }
    right++;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
