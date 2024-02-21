// primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference or Non Primitiv data type
// 3 types: Array, Objects, Functions

// Javascript is a dynamically typed language.

const id = Symbol('123') // symbole data type will give a unique id
const anotherId = Symbol('123')

console.log(id===anotherId);  // False

// reference

const heros = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
    name: "Prashant",
    age: 22,
}

const myFunction = function(){
    console.log("Hello");
}
