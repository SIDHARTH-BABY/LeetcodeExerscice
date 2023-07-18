function findDifference(num1, num2) {
  let newVal = [];
  for (let i = 0; i < num1.length; i++) {
    let flag = 0;
    for (let j = 0; j < num2.length; j++) {
      if (num1[i] === num2[j]) {
        console.log('obeee');
        console.log(num1,num2,'outt');
        flag++;
        break;
      }
    }
    if (flag === 0) {
      newVal.push(num1);
    }
  }
  return newVal;
}

const num1 = [1,2,3]
const num2 = [2,4,6]


console.log(findDifference(num1,num2));