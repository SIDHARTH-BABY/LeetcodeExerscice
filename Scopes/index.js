// function school(x) {
//   x(5);
// }
// function techerSchool(y) {
//   y(2);
// }

// school((val)=>{
// techerSchool((val2)=>{
// console.log(val+val2);
// })
// });

/////////////////////////////////////////////////////////////

// function school(){

//     function hello(){
//         console.log('sidhu');
//     }
//     return hello
// }

// const name = school()
// console.log(name);

/////////////////////////////////////////////////////////////

// function school() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log('sidhu');
// }

// school()

////////////////////////////////////////////////////////////
// function outest() {
//     console.log('ll');
//   function outer(b) {
//     let a = 10;
//     function inner() {
//       console.log(a, b);
//     }
//     return inner;
//   }
//   return outer
// }

// const callOuter = outest()

// const newOuter = callOuter('jj')

// newOuter()


//////////////////////////////////////////////////////////

//different way
// const outest = () => {
//   console.log("ll");
//   function outer(b) {
//     let a = 10;
//     function inner() {
//       console.log(a, b);
//     }
//     return inner;
//   }
//   return outer;
// };

// const callOuter = outest();

// const newOuter = callOuter("jj");

// newOuter();



///////////////////////////////////////////////////////////////////


function counter(){
    let count =0
    this.increamentCouter=()=>{
        count++
        console.log(count);
    } 
    this.decrementCouter=()=>{
        count--
        console.log(count);
    } 

}
let newCounter = new counter()

newCounter.increamentCouter()

