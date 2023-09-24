function recurPermute(data) {
  const nums = data.split(',')
  console.log(nums,'nums');
  const result = [];
  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.join(' '))
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]]; //backtracking
    }
  };

  dfs(0, nums);
  return result.join('\n'); 
}

const data = "x,y,z";
console.log(recurPermute(data));

// The "bottom" console.log statements in your code are meant to log the values of nums[j], nums[i], i, and j after the recursive call to dfs(i + 1, nums) has returned.
// This is where backtracking happens, and it may seem like i and j are decreasing, but in reality, they are not.

// Here's a step-by-step explanation of what's happening:

// The code enters the for loop with j starting from i and going up to nums.length - 1.
// Inside the loop, you swap the elements at indices i and j, effectively permuting them.

// Then, you make a recursive call to dfs(i + 1, nums). This recursive call increments i,
// which means it moves to the next position in the array to generate the next permutation.

// After the recursive call returns (which happens after exploring all possibilities with the current i),
//  you swap the elements back to their original positions to backtrack.

// Finally, you log the values of nums[j], nums[i], i, and j at the "bottom" of the loop.

// So, it may appear that i and j are decreasing, but that's because you're backtracking
// to the previous state of the array to explore other possibilities. In reality, i is increasing as
// you move through the array, and j is also increasing as you iterate through the loop.
//  The "bottom" console.log is just showing the state of the variables after you've explored the possibilities
//   for the current i and j values, which is part of the backtracking process.
