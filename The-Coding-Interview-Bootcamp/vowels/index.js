// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
function vowels(str) {
  return str
    .split('')
    .map(char => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase()))
    .filter(bool => bool).length;
}

// Solution 2
function vowels1(str) {
  let count = 0;
  let checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

// Solution 3 - Regex
function vowels2(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels2;
