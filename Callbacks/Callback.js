function school(callback) {
  console.log("haii");
  setTimeout(() => {
    callback(5);
  }, 2000);
}
function Two(callback) {
  callback(5);
}

school((value) => {
  Two((value1) => {
    console.log(value1 + value);
  });
});
