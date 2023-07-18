// var name = window.prompt("hello")

function parantesis(val) {
  let obj = { "{": "}", "[": "]", "(": ")", "<": ">" };
  let characters = [];
  for (let i = 0; i < val.length; i++) {
    if (obj[val[i]]) {
      characters.push(obj[val[i]]);
    } else if (characters.length > 0 && val[i] === characters[characters.length - 1]) {
      characters.pop();
    } else {
      return false;
    }
  }
  if (characters.length === 0) {
    return true;
  }
}

console.log(parantesis("}"));
