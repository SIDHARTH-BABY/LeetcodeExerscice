//how many distinct ways can you climb the stair

function stairCase(val) {
  const memo = [1, 1, 2];
  for (let i = 3; i <= val; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[val];
}
console.log(stairCase(10));


//Fibonacci sequence annu ivideee