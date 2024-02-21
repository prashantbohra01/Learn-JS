
let a = 300  // Global scope

if (true) {
   let a = 10    // Block scope
   const b = 20
   console.log("Inner: ", a);
}

console.log(a);

// nested scopes

function one(){
    const username = "Prashant"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
  //  console.log(website);

    two()
}

one()

// ++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++


function addone(num){
    return num + 1
}

console.log(addone(5));

const addTwo = function(num){
    return num + 2                     // Hoisting
}

console.log(addTwo(5));
