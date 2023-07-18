// const obj = {
//   fName: "sidharth",
//   lName: "Baby",
// };

// const PrintFullname = function hello(homeTown) {
//   console.log(this.fName + " " + this.lName, "Hometown :", homeTown);
// };

// PrintFullname.call(obj, "kanhangad");


const object ={
  fname :'siduh',
  lName : 'baby'
}


function printFullNmae (town){
  console.log(this.fname +" "+ this.lName +" " +town);
}

let byname = printFullNmae.bind(object,"khdd")

byname()