// this

const user = {
    username: "Prashant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website.`);
    }
}

// user.welcomeMessage()

user.username = "Kunal"
// user.welcomeMessage()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

function chai(){
    let username = "Prashant"
    console.log(this.username);
}
// chai()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const tea = function(){
//     let username = "Prashant"
//     console.log(this.username);
// }
// tea()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++ ARROW +++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const tea = () => {
    let username = "Prashant"
    console.log(this.username);

}
// tea()


// arrow function syntax:- () => {}

// adding two numbers using arrow function

const addTwo = (num1, num2) =>  (  num1 + num2 ) // implicit return without using return keyword.

console.log(addTwo(3,4));

const addTwoo = (num3, num4) => {
    return num3 + num4                 // explicit return
}
console.log(addTwoo(4, 6));

