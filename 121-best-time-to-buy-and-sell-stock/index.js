let maxProfit = function(prices) {
  let maxProfit = 0;
  let minValue = prices[0];
  for (let i = 1; i < prices.length; i++) {
      if ((prices[i] - minValue) > maxProfit) {
          maxProfit = prices[i] - minValue;
      }
      if ((prices[i] - minValue) < minValue) {
        minValue = (prices[i] - minValue);
      }
  }
  return maxProfit;
};

let prices = [7,1,5,3,6,4]

maxProfit(prices)