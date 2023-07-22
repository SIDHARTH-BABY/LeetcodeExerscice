function findRestaurant(list1, list2) {
  let leastSum = list1.length + list2.length;

  let sum;
  let result = [];
  let equal = false;
  for (let i = 0; i < list1.length; i++) {
    sum = 0;
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        sum = i + j;
        if (sum < leastSum) {
          leastSum = sum;
          // result.pop()
          result = [list1[i]];
          console.log(result, "first");
          // result.push(list1[i]);
        } else if (sum === leastSum) {
          equal = true;
          result.push(list1[i]);
        }
      }
    }
  }
  return result;
}

list1 = ["Tapioca Express", "Shogun", "Tapioca Express", "Burger King", "KFC"];

list2 = ["KFC", "Shogun", "Burger King", "Tapioca Express"];

console.log(findRestaurant(list1, list2));



//another solution 
// 2ndum same annu, but runtime speed down ll ullathin annu, because ithill 2 ndd seperate loop annu ullath, mukalill ullath nested loop annu
// but problem velya vethyasam onnum illa , 2ndum nokkanam


// qstn start


// const findRestaurant = function (list1, list2) {
// 	// For the first array, make a hashmap of all indexes of each interest
// 	const interests = {}
// 	for (let i = 0; i < list1.length; i++) {
// 		const interest = list1[i];
// 		interests[interest] = i
// 	}

// 	let commonInterestArr = []
// 	let minSum = Infinity
// 	for (let i = 0; i < list2.length; i++) {
// 		const interest = list2[i];

// 		// when there is a common interest, add the current index to the index in the hashmap
// 		if (interests[interest] !== undefined) {
// 			const currentSum = interests[interest] + i
// 			// if it is lower than the current minimum index, set the array of common interests to an array of the current element and the minimum sum to the current sum
// 			if (currentSum < minSum) {
// 				commonInterestArr = [interest]
// 				minSum = currentSum
// 			}
// 			// If they are equal, push the current element to the array of common interests
// 			else if (currentSum === minSum) {
// 				commonInterestArr.push(interest)
// 			}
// 		}
// 	}
// 	// return the array of common interests
// 	return commonInterestArr
// };