function isPalindrome(string) {
  const stringArr = string.toLowerCase().split('');
  const validChars = 'abcdefghiklmnopqrstuvwxyz'.split('');

  const letterArr = [];
  stringArr.forEach(char => {
    if (validChars.indexOf(char) > -1) letterArr.push(char);
  });

  return letterArr.join('') === letterArr.reverse().join('');
}

console.log(isPalindrome('race car'));
