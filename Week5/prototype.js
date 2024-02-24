let myName = "Prashant     "

console.log(`Length: ${myName.length}`);

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

 myName.trueLength()

 "Bohra".trueLength()



let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.prashant = function(){
    console.log(`Prashant is present in all object`);
}

Array.prototype.heyPrashant = function(){
    console.log(`Prashant says hello`);
}
// heroPower.prashant()
// myHeros.prashant()
// myHeros.heyPrashant()
// heroPower.heyPrashant() this is an array type so it will not work with an object


