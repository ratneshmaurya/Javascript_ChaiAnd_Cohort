
// ***************** Getter and Setter name must be exactly like name of instance variables. Thus accessing easily using object name
// **************** Remember if creating either of one(getter or setter) then must have to create other one also(setter or getter) else error oocur


// Remember we can directly access the values if we don't define the getter and setter. by just (objectName.VariableName)
// Getter and setter functions are used when you want to encapsulate the access to a property and potentially perform some computation 
// or formatting before returning the value. They provide a way to control how properties are accessed and ensure consistency and validation.
// *************** But if using getter and setter then must remember the rules-> define both, handle stack calls.

// The functions inside the classes are defined normally without any colon----> 
// display(){----} normally used in Classes  
// display:function{----} used to define functions in Objects, but in modern Objects(nowdays), we can simply write functions also in Objects same as above in class
// display(){----} also accepted nowdays in modern JS for defining functions in objects(without colon)


// Below code  will do STACK OVERFLOW, why????
// Becoz in getter, when this.email it again calls email function, becoz this.email means call the email property, thus stuck in loop
// same for the case of setters.

// class User {
//     constructor(email, password){
//       this.email = email;
//       this.password = password;
//     }
  
//     get email(){
//       return this.email.toUpperCase();
//     }
//     set email(value){
//       this.email = value;
//     }
//   }
//   const ratnesh = new User("h@ratnesh.ai", "abc");
//   console.log(ratnesh.email); // Causes stack overflow


// That's why to avoid stack overflow, we use _(underscore with the name of properties inside getter or setter to avoid recursion)
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase(); // used underscore to avoid recursion call stack overflow
    }
    set email(value){
        this._email = value; // used underscore to avoid recursion call stack overflow
    }

    get password(){
        return `${this._password}ratnesh`; // used underscore to avoid recursion call stack overflow
    }
    set password(value){
        this._password = value; // used underscore to avoid recursion call stack overflow
    }
}
const ratnesh = new User("h@ratnesh.ai", "abc")
console.log(ratnesh.email); // we are actually accessing the getter function here, see carefullly

// Remember we can directly access the values if we don't define the getter and setter. by just (objectName.VariableName)
// Getter and setter functions are used when you want to encapsulate the access to a property and potentially perform some computation 
// or formatting before returning the value. They provide a way to control how properties are accessed and ensure consistency and validation.





// ************** Initially when class concept was not there, we use Object.defineProperty() for functional objects

// function User(email, password){
//     this._email = email;
//     this._password = password

//     //now making getter and setter for variables------>
//     // we have to pass "this",<property name>,{functions getter and setter for each property}
//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }
// const chai = new User("chai@chai.com", "chai")
// console.log(chai.email);









// ................................................