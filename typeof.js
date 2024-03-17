"use strict"

let str= new Function(); //function
let constructor=new String();
// console.log( typeof constructor);
// console.log(typeof str);

// console.log(typeof document.all);

let print="cat"[1]  //use to print a character in an index
// console.log(print);

// const a = "a";
// const b = "a";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

const strPrim2 = String(1); 
const strPrim3 = String(true);
console.log(typeof strPrim2)
console.log(typeof strPrim3)


// =====================concept of stack and Heap=======================
// All primitive datatype are stored in stack and all non-primitive datatype are stored in heap 

let age = 55;

let ageTwo=age;
// console.log(ageTwo)
ageTwo=33;

// console.log(age);
// console.log(ageTwo); // Here changing the value of ageTwo don't affect "age", because 