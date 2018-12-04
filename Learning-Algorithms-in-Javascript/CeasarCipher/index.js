function ceasarCipher(string, number) {
  number = number % 26;
  let lowerString = string.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvxwyz'.split('');
  let result = '';

  for (let i = 0; i < lowerString.length; i++) {
    let currentLetter = lowerString[i];
    if (currentLetter === ' ') {
      result += currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + number;

    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;

    if (string[i] === string[i].toUpperCase()) {
      result += alphabet[newIndex].toUpperCase();
    } else {
      result += alphabet[newIndex];
    }
  }

  return result;
}

// Positive Numbers only
function ceasarCipher2(string, number) {
  let output = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char.match(/[a-z]/i)) {
      let charCode = string.charCodeAt(i);
      // Lower case letter
      if (charCode >= 65 && charCode <= 90) {
        char = String.fromCharCode(((charCode - 65 + number) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        char = String.fromCharCode(((charCode - 97 + number) % 26) + 97);
      }
    }
    output += char;
  }

  return output;
}

console.log(ceasarCipher('Zoo keeper', 2));
console.log(ceasarCipher('Big car', -16));
