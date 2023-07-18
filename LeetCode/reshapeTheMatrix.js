function reshapeMatrix(nums, r, c) {
  let rows = nums.length;
  let columns = nums[0].length;

  // ivide if =>thannitulla rows and coulms multipy cheythumbol , aa value nums lle rows and coulums multiply cheyumbo differnet  annegill,
  // namuk tharunna nums , athpole return cheyyam 
  if (rows * columns != r * c) {
    return nums;
  }

  let newNums = [];
  let answer = [];

  //important step below, this idea can used in several problems

  for (let row of nums) {
    console.log(row, "row");
    for (let column of row) {
      console.log(column, "colume");
      newNums.push(column);
    }
  }

  for (let i = 0; i < newNums.length; i += c) {
    answer.push(newNums.slice(i, i + c));
  }
  return answer;
}
 mat = [[1,2],[3,4]], r = 2, c = 4

console.log(reshapeMatrix(mat, r, c));
//leetcode 566, easy array



//another solutoin, which more efficient 

// """""""""""""""""""""""""""""""'''''''
// var matrixReshape = function (nums, r, c) {
//     var arr = nums.flat();
//     if (r * c != arr.length) return nums;
  
//     var res = [];
//     while (arr.length) res.push(arr.splice(0, c));
//     return res;
//   };