const h = "sidhuarth";

let newVal = h.split("")
let newElement = newVal.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});


console.log(newElement);