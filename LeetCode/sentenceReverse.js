function reverse(val) {
  let newVal = val.split(" ");
  console.log(newVal);
  let result =[]
  for (let i = 0; i < newVal.length; i++) {
    result[i] = newVal[i].split("").reverse().join('');
  }
  console.log(result.join(' '));
}

const val = "hai dude man hello";
reverse(val);

// we use trim() only for remove white spaces eg: "  hello  dear  j",

//Everytime you get a sting , just remember how to use below features ******************IMP

//split('') & split(' ')
//join()  & join(' ')
//reverse()
//trim() to remove blank spaces

