function program(str) {
  let prefix = "";

  for (let i = 0; i < str[0].length; i++) {
    let characters = str[0][i];
    for (let j = 0; j < str.length; j++) {
      if (str[j][i] != characters) return prefix;
    }
    prefix = prefix + characters;
  }
  return prefix;
}

let values = ["Hello", "Helk", "Hemo"];
console.log(program(values));
