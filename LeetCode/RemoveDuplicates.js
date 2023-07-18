// let array = [1, 2, 3, 2, 1, 14, 4, 5, 5, 6, 7, 4, 3, 34, 4, 5, 6, 6, 1];

// function removeDuplicate() {
//   return array.filter((val, index) => array.indexOf(val) === index);
// }

// console.log(removeDuplicate());



//ivide simple method unddd

function removeDuplicate(val){
  for(let i=0;i<val.length;i++){
      for(let j=i+1;j<val.length;j++){
          if(val[i] === val[j]){
              console.log('ggg');

              console.log(val.splice(j,1));
          }
      }
  }
  return val
}

const array = [1,2,2,3,3,4,5,4,6,4,1]
console.log(removeDuplicate(array));
