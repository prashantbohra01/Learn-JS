class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)                  // Super Keyword in class Inheritance
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")  // new keyword is req
chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

