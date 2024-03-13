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
console.log(typeof result)
console.log(result); 