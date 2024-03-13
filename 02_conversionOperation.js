"use strict"

let age=33; //Number type


// let stringAge=String(age);
// let booleanAge=Boolean(age);

let name="abc"
// let result=Boolean(name);-->true
// let result=Number(name); 

let value=undefined;
//let result = Boolean(value);    //Boolean(null)-->false , Boolean(undefined)-->false, Boolean("")-->false
let result = Number(value);       //Number(null)-->0 , Number(undefined)-->NaN
// console.log(typeof result)
// console.log(result); 

// ==============================================================

// console.log("1"+(2+2+5)); //we should use paranthesis for high readability
// console.log(1+2+"3");

// console.log(((1+2)*4)/2);

let x=4;
let y=x++; //post-increment
console.log(x); //5
console.log(y); //4

let z=++x;
console.log(z); //6


