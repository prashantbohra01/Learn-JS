
// for-of loop ( Majorly used for arrays) 

const arr = [ 1, 2, 3, 4, 5]

for (const num of arr) {      // array
    console.log(num);
}

const greetings = "Hello World"     // string
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

// Map object holds key-value pairs and remembers the original insertion order of the keys.
// any value may be used as either a key or a value.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {    // Destructure array in for-of loop
     console.log(key, ':-', value);    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// For-in Loop   (Can be used for Objects too unlike For-of loop.)

const myObj = {
    js : 'JavaScript',
    cpp : 'C++',                // Object Example
    py : 'Python',
    ru : 'Ruby' 
}

for (const key in myObj) {
    console.log(`${key} is Extension for ${myObj[key]}.`);
}

const program = ["js", "rb", "py", "java", "cpp"]   // Array Example using For-in Loop.

for (const key in program) {
    console.log(program[key]);
}


// Higher order Array Loops.
// For-each loop

const coding = [ "js", "ruby", "java", "python", "c++"]

coding.forEach( function (item) {
    console.log(item);
} )


coding.forEach( (item) => {    // arrow function using for-each loop.
    console.log(item);
} )

