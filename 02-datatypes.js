"use strict"; // treat all js code as newer version
/*
alert("hello js")
alert(3+3)

we are using nodejs , not browser
*/

let name = "pintu"
let age = 25
let isLoggedIn = true

//1.Primitive Types
//string => ""
//number => both integer and decimal
//bigint => larger than 2 to power 53
//boolean => true/false
//null => standalone value
//undefined => value not assigned
//symbol => unique 

//2.Non-Primitive/Reference Types
//object => key value pairs

console.log(typeof "pintu")
console.log(typeof 25)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof BigInt("1234567890123456789012345678901234567890"))
console.log(typeof Symbol("abc"))


