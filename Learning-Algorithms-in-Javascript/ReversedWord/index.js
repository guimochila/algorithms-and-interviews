function reverseWord(str) {
  let reversed = [];
  let wordsArray = str.split(' ');

  for (let word of wordsArray) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversed.push(reversedWord);
  }
  return reversed.join(' ');
}

console.log(reverseWord('this is a string of words'));
