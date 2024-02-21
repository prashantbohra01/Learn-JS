// singleton objects

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Prashant"
tinderUser.isLoggedIn = false
console.log(tinderUser);

// nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prashant",
            lastname: "Bohra"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// --COMBINING OBJECTS :-

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser)); // to get all the keys of an object=