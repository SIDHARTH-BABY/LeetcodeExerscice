function findRestaurant(list1, list2) {
  let leastSum = list1.length + list2.length;

  let sum;
  let result = [];
  let equal = false;
  let object ={}
  for (let i = 0; i < list1.length; i++) {
    sum = 0;
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        sum = i + j;
        // object = list1[i]
        object[list1[i]] = sum
        
      }
    }
  }
 console.log(object);
}

list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];

list2 = ["KFC", "Shogun", "Burger King"];

console.log(findRestaurant(list1, list2));
