// Objects

// --Singleton 
  //Object.create

// --Object literals

const mySym = Symbol("key1") // symbol

const JsUser = {
    name: "Prashant",
    age: 22,
    [mySym]: "mykey1",   // how we can use symbol in objects.
    location: "Delhi",
    email: "prashant@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "Prashant@yahoo.com" // to overwrite values in Objects.
Object.freeze(JsUser) // used for resisting overwriting.




