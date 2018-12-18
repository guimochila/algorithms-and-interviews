/* 
  Write a fucntion called sameFrequency. Given two positive integers,
  find out if the two numbers have the same frequency of digits.
  Solution must be O(n);
*/

function sameFrequency(num1, num2) {
  let charMap = {};
  let numString1 = num1.toString();
  let numString2 = num2.toString();

  if (numString1.length !== numString2.length) return false;

  for (let i = 0; i < numString1.length; i++) {
    charMap[numString1[i]] = ++charMap[numString1[i]] || 1;
  }

  for (let i = 0; i < numString2.length; i++) {
    if (!charMap[numString2[i]]) return false;
    --charMap[numString2[i]];
  }

  return true;
}

console.log(sameFrequency(182, 281));
