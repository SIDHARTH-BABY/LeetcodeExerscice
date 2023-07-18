function keyBoardRow(words) {
  const alpha = {
    q: 0,
    w: 0,
    e: 0,
    r: 0,
    t: 0,
    y: 0,
    u: 0,
    i: 0,
    o: 0,
    p: 0,
    a: 1,
    s: 1,
    d: 1,
    f: 1,
    g: 1,
    h: 1,
    j: 1,
    k: 1,
    l: 1,
    z: 2,
    x: 2,
    c: 2,
    v: 2,
    b: 2,
    n: 2,
    m: 2,
  };

  let answer = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1) {
      answer.push(words[i]);
    } else {
      let newAlpha = alpha[words[i][0].toLowerCase()];

      for (let j = 1; j < words[i].length; j++) {
        if (alpha[words[i][j].toLowerCase()] != newAlpha) {
          break;
        }
        if (j === words[i].length - 1) {
          answer.push(words[i]);
        }
      }
    }
  }

  return answer;
}

const words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(keyBoardRow(words));
