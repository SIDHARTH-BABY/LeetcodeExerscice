function oddPrimEven(nums) {
  const even = [];
  let odd = [];
  let prime = [];
  const isEvenOdd = (val) => {
    if (val % 2 === 0) {
      return even.push(val);
    } else {
      return odd.push(val);
    }
  };

  const isPrime = (val) => {
    for (let j = 2; j < val; j++) {
      if (val % j === 0) {
        console.log(val, "val");
        return;
      }
    }
    if (val < 2) {
      return;
    }
    return prime.push(val);
  };
  const mainFunc = (nums, method) => {
    for (let i = 0; i < nums.length; i++) {
      method(nums[i]);
    }
  };
  mainFunc(nums, isEvenOdd);
  mainFunc(nums, isPrime);
  //
  let oddNew = odd.toString();
  let evenNew = even.toString();
  console.log(oddNew, "odd", evenNew, "even");
  console.log(prime, "primeNUm");
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
oddPrimEven(nums);
