function sockMerchant(ar) {
  // Write your code here
  let pair = [];
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        pair.push(ar[j]);
        ar.splice(j, 1);
        console.log(ar, ar[j]);
        break;
      }
    }
  }
  console.log(pair, "pair");
  return pair.length;
}

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(ar));
