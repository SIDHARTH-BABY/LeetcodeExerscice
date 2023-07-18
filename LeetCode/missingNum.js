function missNum(values) {
  //   let minVal = Math.min(...values);
  const lengthSum = (values.length * (values.length + 1)) / 2;

  let totalSum = values.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return lengthSum - totalSum;
}
values = [0, 1, 3]; //eppallum zero indavanam but evede vellum erzhutham like === value = [ 2,4,3,0] ===> iii case ll missing num 1 annu
console.log(missNum(values));
