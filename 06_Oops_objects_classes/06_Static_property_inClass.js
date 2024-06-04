

// static accessiblity in parent or child classes.

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ //creating a statis function, now it doesnot belong to any object instance not to any inheritance 
        return `123`
    }
}

const hitesh = new User("Ratnesh")
console.log(hitesh.createId()) // gives error, not a property for any instance anymore.
console.log(User.createId()); // gives 123, becoz it is the property of class now.


// checking whether it is accessible by the child classes or not.
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); //gievs error








// .....................