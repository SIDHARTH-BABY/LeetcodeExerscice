// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function armstrongNum(nums) {
  let strValues = nums.toString();
  let values = strValues.split("");

  let newValues = [];
  for (let i = 0; i < values.length; i++) {
    let multiply = Math.pow(values[i], values.length);
    newValues.push(multiply);
  }

  let sum = 0;

  for (let j = 0; j < newValues.length; j++) {
    sum += newValues[j];
  }

  if (sum.toString() === strValues.toString()) {
   
    return console.log('its an armstrong num');
  } else {
    return console.log('its not an armstrong num');
  }
}
let values = 153;
armstrongNum(values);
