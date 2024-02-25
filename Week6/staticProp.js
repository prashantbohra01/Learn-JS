class User{
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){             // when we dont want to give access to a particular method we use static.
        return `123`
    }
}

const Prashant = new User("Prashant")
console.log(Prashant.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());  // due to static is used in createID() we cannot able to use it in inherited classes.