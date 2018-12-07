function binarySearch(numArr, key) {
  let middleIndex = Math.floor(numArr.length / 2);
  let middleElement = numArr[middleIndex];

  if (middleElement === key) {
    return true;
  } else if (middleElement < key && numArr.length > 1) {
    return binarySearch(numArr.splice(middleIndex, numArr.length), key);
  } else if (middleElement > key && numArr.length > 1) {
    return binarySearch(numArr.splice(0, middleIndex), key);
  }

  return false;
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 52));
