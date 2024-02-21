const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


//____________________Maths______________________

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.min(4,3,2,5));
console.log(Math.max(4,3,2,5));

console.log(Math.random()*5 + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);