
function calculateCartPrice(...num1){  // rest or spread operator ... in functions
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Prashant",
    price: 199
}

const user2 = {
    username: "Kunal",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject(user2)

const myNewArray = [200, 400, 600]

function returnSeconValue(getArray){
    return getArray[1]
}

console.log(returnSeconValue(myNewArray));