function LongWord(value) {
  // let newValue = value.match(/[a-z]+/gi);
  // ingne venneelum cheyammm
  let array = value.trim().split(" ")   
  return array[array.length-1].length
  // for (let i = newValue.length - 1; i >= 0; i--) {
  //   return newValue[i].length;
  // }
}
s = "Hello Worldw  ";
console.log(LongWord(s));
