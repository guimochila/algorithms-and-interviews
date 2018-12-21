/* 
  Write a function called findLongestSubstring which accepts a string and returns the length
  of the longest substring with all distinct characters.
*/

function findLongestSubstring(str) {
  let charMap = {};
  let start = 0;
  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charMap[char]) {
      start = Math.max(start, charMap[char]);
    }

    longest = Math.max(longest, i - start + 1);
    charMap[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
