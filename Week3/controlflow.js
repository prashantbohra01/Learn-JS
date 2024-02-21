// if

/* if (condition){

}

if (true){

}
if (false){   //it will not execute

}
*/

const isUSerLoggedIn = true
if (isUSerLoggedIn){
    console.log("Hey, you are now Logged in.");
}

// comparison operators 
// < (less than), > (Greater than), <= (less than equal to), >= (greater than eq to), 
// == (is equal to), != (not equal), === (it will check datatype too), !== .


const temperature = 51
if (temperature < 50){
    console.log("less than 50");
} else {
console.log("temperature is greater than 50");
}


const score = 200
if (score > 100){
    let power = "fly"
    console.log(`User power: ${power}`);
}


const balance = 1000
if (balance < 500){
    console.log("less than");                    // Nested IF-Else
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less thna 900");
} else {
    console.log("less than 1200");
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {            // use of "&&" "and" statements
    console.log("Allow to buy Courses");
}

if (loggedInFromGoogle || loggedInFromEmail){   // "||" "or" it is used to check multiple condition
    console.log("User logged in.");
}

