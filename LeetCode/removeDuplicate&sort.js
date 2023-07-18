//without using any js array methods , sorted and removed duplicates =========Important
function man(val) {
  for (let i = 0; i < val.length; i++) {
    for (let j = i + 1; j < val.length; j++) {
      if (val[i] > val[j]) {
        let temp = val[i];
        val[i] = val[j];
        val[j] = temp;
      }
      if (val[i] === val[j]) {
        for (let k = i; k < val.length; k++) {
          val[k] = val[k + 1];
        }
        val.length--;
       i--
      }
    }
  }
  console.log(val);
}

let arr = [44, 2, 4,4, 3, 2, 2, 4, 5, 2, 1, 66];

man(arr);
