// ES6
// Imporatnt, must see the behind the scenes



class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// ************** Important----> Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
// remember not writing these functions inside the above User() function, becoz then the context will be changed for these function
// hence these must be added in the prototype, so that the context remains same.
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());








// ...................