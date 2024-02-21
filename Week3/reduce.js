// reduce() method in JS is used to reduce the array to a single value and executes a 
// provided function for each value of the array and return value of the function is stored in an accumulator.

const myNums = [1,2,3]

// Example 1
const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);

// Example 2
const myTtl = myNums.reduce( (acc, currval) => acc+currval , 0)  // reduce using arrow function.
console.log(myTtl);

// Example 3

const shoppingCart = [ 
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
