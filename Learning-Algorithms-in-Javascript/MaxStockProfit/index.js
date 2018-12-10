// O(n)
function maxStockProfit(arr) {
  let buy = arr[0];
  let sell = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] && arr[i] < buy) {
      buy = arr[i];
    } else if (arr[i] > arr[i - 1]) {
      sell = arr[i];
    }
  }

  maxProfit = sell - buy;

  return maxProfit < 0 ? -1 : maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
console.log(maxStockProfit([10, 7, 5, 8, 11, 9, 1]));
console.log(maxStockProfit([45, 24, 35, 31, 40, 38, 11]));
