class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const prashant = new User("prashant@gmail.com", "12abc34")
console.log(prashant.password);