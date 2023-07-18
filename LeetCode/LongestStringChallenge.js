function StringChallenge(val) {
  // code goes here
  // let arr = val.match(/[a-z]+/gi);
  let arr = val.split(" ")
  console.log(arr);
  let values = arr.sort((a, b) => {
    return b.length - a.length;
  });
  sen = values[0];
  return sen;
}
console.log(StringChallenge("funA&rrrrr!!     time kkohsdeeee"));





