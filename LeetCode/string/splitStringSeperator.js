function splitWordsBySeparator(str, separator) {
  let result = [];

  for (let words of str) {
    if (words.includes(separator)) {    
      result.push(...words.split(separator).filter((p)=>{p})) 
    } else {
      result.push(words);
    }
  }
  return result
}

const string = [".one.two.three", "four.five", "six"];
const separator = ".";
console.log(splitWordsBySeparator(string, separator));
