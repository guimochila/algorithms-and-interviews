// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
function createCharMap(string) {
  const charMap = {};

  const stringSanitized = string.replace(/[^\w]/g, '').toLowerCase();

  for (let char of stringSanitized) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  const charMapA = createCharMap(stringA);
  const charMapB = createCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) {
      return false;
    }
  }

  return true;
}

// Solution 2
function sanitizeString(string) {
  return string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagrams1(stringA, stringB) {
  const sortedA = sanitizeString(stringA);
  const sortedB = sanitizeString(stringB);

  return sortedA === sortedB;
}

module.exports = anagrams1;
