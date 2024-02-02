/* ----- DATATYPES SUMMARY ----- */
// Data is categorized in TWO different types based on how they're stored and accessed 

// #1 PRIMITIVE             (Call by value) 
// #2 NON-PRIMITIVE         (Call by reference) 

/* --- PRIMITIVE DATA TYPES --- */
// Total 7 types: String, Number, Boolean, Null, Undefined, BigInt, & Symbol

const user = "username"             // String
const age = 23                      // Number
const score = 98.5                  // Number
const isLoggedIn = false            // Boolean
const outsideTemp = null            // Null
let userGender = undefined;         // Undefined
let userEmail;                      // Undefined
const bigNumber = 3545646546234n    // BigInt
const userOneId = Symbol('123')     // Symbol
const userTwoId = Symbol('123')     // Symbol
// NOTE: Symbol can have same values but are never same.
console.log(userOneId === userTwoId);   // false

/* --- NON-PRIMITIVE DATA TYPES --- */
// Total 3 types: Array, Objects, & Functions
const indiaSuperheroes = ["shaktiman", "naagraj", "doga"]           // Array

const userObject = {name: "surya", age: 23}                         // Object

const createFunc = function() {console.log("function created");}    // Function
createFunc() // call the function

// You can check type here (just change the variable name with the one you want to check for)
console.log(typeof createFunc);         // type: function


// *JAVASCRIPT is a dynamically typed language as the types are defined at the runtime, and can be changed during execution.

// NOTE: if you want to master JS, master 1.Object and 2.Web Events

// Know more at: https://262.ecma-international.org/5.1/#sec-11.4.3