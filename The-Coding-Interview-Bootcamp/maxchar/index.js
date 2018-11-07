// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = 0;
  let char = '';

  const charMap = str.split('').reduce((total, item) => {
    total[item] = total[item] + 1 || 1;
    return total;
  }, {});

  for (let key in charMap) {
    if (charMap[key] > maxChar) {
      maxChar = charMap[key];
      char = key;
    }
  }

  return char;
}

module.exports = maxChar;
