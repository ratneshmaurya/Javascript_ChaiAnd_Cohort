

// super(username); // this by defualt is like this---->  <Parent class name>.call(this,username). i.e passing the "this" context 
// into User, i.e use of .call()method i=that we read earlier.


class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// To inherit, must use extends keyword
// Remember yha class(constructor function) inheritance ho rha, not prototype inheritance.(be defuali internally ye bhi ho rha hai)
class Teacher extends User{
    constructor(username, email, password){
        super(username); // this by defualt is like this---->  User.call(this,username). i.e passing the "this" context into User
        // why useing?? becoz we have to pass current context so that, Teacher ka "this" pass ho User me on calling.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe();
User.addCourse(); //will give error, becoz User is not inheriting the property of Teacher

console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true.