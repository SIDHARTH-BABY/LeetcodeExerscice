function removeVowels(values) {
  for (let i = 0; i < values.length; i++) {
    if (
      values[i] === "a" ||
      values[i] === "e" ||
      values[i] === "i" ||
      values[i] === "o" ||
      values[i] === "u"
    ) {
      values.splice(i, 1);

      i--;
    }
  }
  return values;
}
let values = ["i", "l", "i", "l", "r", "u", "t", "y", "o"];
// let values = "hioplmaei";

// const our = values.split("");

console.log(removeVowels(values));
