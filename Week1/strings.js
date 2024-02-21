const name ="prashant"
const repoCount = 10

// console.log(name + repoCount);

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('Prashanttt')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf("t"));

const newSting = gameName.substring(0,3)
console.log(newSting);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);