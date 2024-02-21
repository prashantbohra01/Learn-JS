// array

const myArr = [0, 1, 2, 3, 4, 5] // object = array
// Arrays enables storing a collection of multiple items under a single variable name, and
// has members for performing common array operation.
// it is resizable.
// zero based indexing.

const myHeros = ["Spider-Man", "Iron-Man", "Hulk"]
console.log(myHeros);
console.log(myHeros[2]);
console.log(myHeros.length);

// Array methods

myArr.push(6) // in last adds up a given value in array.
console.log(myArr);

myArr.pop()  // remove last value from array.
console.log(myArr);

// unshift and shift are same as push pop but in these methods the value is added in first and removed from first.


// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C", myArr);



