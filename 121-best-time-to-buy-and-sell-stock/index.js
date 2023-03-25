let maxProfit = function(prices) {
  let result = 0;
  let minVal = prices[0];
  for (let i = 1; i < prices.length; i++) {
      if ((prices[i] - minVal) > result) {
        result = prices[i] - minVal;
      }
      if (prices[i] < minVal) {
        minVal = prices[i];
      }
  }
  return result;
};

let prices = [7,1,5,3,6,4]

maxProfit(prices)