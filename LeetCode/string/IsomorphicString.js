//objcect key value set cheyumm, so again same key vannal , adhinte value etra annenu check cheyth ,
// 2 object same value anno check cheyyum, allengill ath false.
function equalsString(s, t) {
  let sHashMap = {};
  let tHashMap = {};
  let curr = 0;

  while (curr <= s.length - 1) {

    if (sHashMap[s[curr]] != tHashMap[t[curr]]) {
      return false;
    }

    sHashMap[s[curr]] = curr + 1;
    tHashMap[t[curr]] = curr + 1;

    curr++;
  }
  return true;
}

const s = "fooof";
const t = "baaaa";
console.log(equalsString(s, t));
