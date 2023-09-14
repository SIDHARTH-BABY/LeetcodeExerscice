// (function () {
//     var a = b = 5;
//   })();

//   console.log(b);

////////////////////////////////////////////////////

// for (let i = 0; i < 5; i++) {
//   console.log(i, "sidhu");
//   setInterval(() => {
//     console.log("hello");
//     console.log(i);
//   }, 1000 * i);
// } 
// for (let i = 0; i < 5; i++) {
//   console.log(i, "sidhu");
//   setTimeout(() => {
//     console.log("hello");
//     console.log(i);
//   }, 1000 * i);
// } 



function doSomethingAsync(callback) {
  setTimeout(function() {
    console.log("Task completed!");
    callback();
  }, 1000);
}

function afterTask() {
  console.log("Callback function called.");
}

doSomethingAsync(afterTask);