const h = [2, 3, 3, 3, 4, 5, 9];

let newElement = {};

h.forEach((currValue) => {
  newElement[currValue] = (newElement[currValue] || 0) + 1;
});

console.log(newElement);

