/* 
  Write a function called "same", which accepts two arrays.
  The function should return true if every value in the array has it's
  corresponding value squared in the second array. The frequency must be the same.

  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // indexOf -> looping

    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same([1, 2, 3], [1, 9]));

// O(n)
function sameFaster(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}
console.log(sameFaster([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(sameFaster([1, 2, 3], [1, 9]));
console.log(sameFaster([1, 2, 3], [1, 9, 3]));

/* 
  Anagram
  Given two strings, write a function to determine if the seconds string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

  Note: You may assume the string contains only lowercase alphabets.
*/

function createCharMap(str) {
  let charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Map = createCharMap(str1);
  const str2Map = createCharMap(str2);

  for (let key in str1Map) {
    if (str1Map[key] !== str2Map[key]) return false;
  }
  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true

function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charMap = {};

  for (let char of str1) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!charMap[letter]) {
      return false;
    } else {
      charMap[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram2('', '')); // true
console.log(validAnagram2('aaz', 'zza')); // false
console.log(validAnagram2('anagram', 'nagaram')); // true
