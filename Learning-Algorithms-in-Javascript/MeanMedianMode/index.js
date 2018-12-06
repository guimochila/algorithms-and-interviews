function getMean(array) {
  const result = array.reduce((a, b) => a + b, 0) / array.length;

  return result;
}

function getMedian(array) {
  array.sort((a, b) => a - b);
  let median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    let medianOne = array[array.length / 2 - 1];
    let medianTwo = array[array.length / 2];

    median = (medianOne + medianTwo) / 2;
  }

  return median;
}

function getMode(array) {
  const result = array.reduce((obj, key) => {
    if (!obj[key]) obj[key] = 1;
    else obj[key] += 1;

    return obj;
  }, {});

  let maxFreq = 0;
  let modes = [];

  for (let num in result) {
    if (result[num] > maxFreq) {
      modes = [num];
      maxFreq = result[num];
    } else if (result[num] === maxFreq) {
      modes.push(num);
    }
  }

  if (modes.length === Object.keys(result).length) {
    modes = [];
  }

  return modes;
}

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  };
}

console.log(meanMedianMode([6, 11, 7, 6, 7, 11]));
console.log(meanMedianMode([6, 11, 7, 6]));
console.log(meanMedianMode([6, 11, 7]));
