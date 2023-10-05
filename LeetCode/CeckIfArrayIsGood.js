// 2784. Check if Array is Good

const isGood = (a) => {
  a.sort((x, y) => x - y);
  console.log(a);
  let n = a.length,
    v = 1;
    console.log(n,'nn');
  if (a[n - 1] != a[n - 2]) return false;
  for (let i = 0; i < n - 1; i++) {
    if (a[i] != v) {
      console.log(a[i], v, "a[i], and v");
      //here v should be always equals to a[i]
      return false;
    }
    console.log(v,a[i],'nokka');
    v++
  }
  

  return true;
};

const nums = [1, 3, 3, 2];
console.log(isGood(nums));

//important qstn , go through each line and try to understand
// qst is eg: base[3] = [1, 2, 3, 3].the largest num will act as base[n], n can be twice and n-1 shoudl be there and normal intgers
