function stock(price) {
  let left = 0;
  let right = 1;
  let profit = 0;

  let maxProfit = 0;
  while (right < price.length) {
    if (price[left] < price[right]) {
      profit = price[right] - price[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}

let price = [5, 6, 7, 2, 1,10];
console.log(stock(price));
