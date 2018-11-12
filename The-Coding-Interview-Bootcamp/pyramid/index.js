// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const midPoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midPoint - row <= col && midPoint + row >= col) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

// Solution 2 - Recursion Solution
function pyramid1(n, row = 0, level = '') {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid1(n, row + 1);
  }

  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid1(n, row, level + add);
}

// Solution 3
function pyramid2(n) {
  let steps = 1;
  let rows = 2 * n - 1;

  while (steps <= rows) {
    let side = (rows - steps) / 2;
    console.log(' '.repeat(side) + '#'.repeat(steps) + ' '.repeat(side));
    steps += 2;
  }
}

module.exports = pyramid2;
