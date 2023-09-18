// undefined



let firstName ;
console.log(typeof firstName);

// let and var keywords are optional
// It is necessary to assign something in const declaration


// null

let myVariable =null;
console.log(myVariable, typeof myVariable);  // object = reference data type [BUG]


// BigInt

let myNumber = BigInt(2334312435354626262526262462626262); // use BigInt(number) or use n after number (123n)
console.log(myNumber, typeof myNumber);

// you cant mix BigInt and other data types



// boolean & comparison operators

// boolean
// true & false

let num1 = "8";
let num2 = 9;
console.log(num1<=num2);  // true


// == vs ===

console.log(num1==num2);
console.log(num1===num2);

// != vs !==

console.log(num1!=num2);
console.log(num1!==num2);

