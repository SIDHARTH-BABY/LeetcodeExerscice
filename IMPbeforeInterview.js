// (function () {
//     var a = b = 5;
//   })();

//   console.log(b);

////////////////////////////////////////////////////

for (let i = 0; i < 2; i++) {
  setInterval(() => {
    console.log("hello");
    console.log(i);
  }, 1000 * i);
}
