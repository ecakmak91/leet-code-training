const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
  dp[0] = 0; // To make 0, we need 0 coins.
  for (let coin of coins) { // Check each coin
    for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
      dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.
};

let coins = [1,2,5];
let amount = 11;

coinChange(coins,amount)


// I didn't solve 
// solution is https://leetcode.com/problems/coin-change/solutions/1132171/javascript-solution-with-explanation/?languageTags=javascript