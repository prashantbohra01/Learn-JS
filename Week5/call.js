function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)            // 1st parameter while using call can be this also.


    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);