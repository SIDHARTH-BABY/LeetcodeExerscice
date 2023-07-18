// setTimeout(() => {
//   console.log("amnnnn");
// }, 1000);

// //onclick ll button colour change avvum
// const btn = document.getElementById("second");
// btn.addEventListener("click", () => {
//   btn.style.color = "red";
// });

// //onclick ll another name will change
// const thirdBtn = document.getElementById("third");
// const first = document.getElementById("first");
// thirdBtn.addEventListener("click", () => {
//   first.innerHTML = "sidhu";
// });

// const box = document.getElementById("box")

// thirdBtn.addEventListener("click",()=>{
//   box.style.backgroundColor="red"
// })
let set = document.getElementById("hello");
document.getElementById("myButton").onclick = function () {
  let name = document.getElementById("sidhu");
  let val = [2, 3, 4, 4, 1];
  function removeElement(val, name) {
    for (let i = 0; i < val.length; i++) {
      if (val[i] === num) {
        val.splice(i, 1);
        i--;
      }
    }
    return val;
  }
  thirdBtn.addEventListener("click", () => {
    set.innerHTML = result;
  });
 
};
