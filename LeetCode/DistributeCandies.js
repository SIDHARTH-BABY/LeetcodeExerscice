function distributeCandies(vals) {
  let amount = vals.length / 2;

//   console.log(amount);
  let newVals = [];
newVals.push(vals[0])

  for (let i =1; i < vals.length; i++) {
    let notUnique = 0;
    for (let j = 0; j < newVals.length; j++) {
      if (vals[i] === newVals[j]) {
     notUnique+=1
      }
    }
    if(notUnique === 0){
        newVals.push(vals[i])
    }
  }
  console.log(newVals, "newVals")
  if(amount === newVals.length){
    return amount
  }else if( amount < newVals.length){
    return amount
  }else {
    return newVals.length
  }
}

let candyType =  [6,6,6,6]
console.log(distributeCandies(candyType));

// lettcode qst 575. Distribute Candies
