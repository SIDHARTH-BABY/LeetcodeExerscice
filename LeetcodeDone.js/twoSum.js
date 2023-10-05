function twoSum(arr, tar) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const missingNum = tar - arr[i];
    //imp logic
//logic , ivide 5 val varumbo , tar - 5 = 3 annu, so 3 obj ll undo nnu check cheyum , 
// undengill athinte value, athayath index num return cheyum

    if (obj[missingNum]) {
        console.log(obj[missingNum],'jj');
      return [obj[missingNum], i];
    }

    obj[arr[i]] = i;
    console.log(obj);
  }
}

const arr = [2,3, 4,5, 5, 1, 1, 3];
const tar = 8;
console.log(twoSum(arr, tar));
