

// In JavaScript, every object has a prototype, which is another object from which it inherits properties and methods. This 
// prototype object can have its own prototype, forming a chain known as the prototype chain.


// To add anything in prototype of any general object type, we write <type of object>.prototype.<property name>=value/function


// Now here on adding prototype to Object object, it will be accessible by everything in JS, becoz all are inheriting this Object
Object.prototype.Ratnesh = function(){
    console.log(`ratnesh is present in all objects`);
}
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
heroPower.hitesh(); //can access Ratnesh() function easily


// Adding prototype to a Array object, now any array in JS will have this property.
let myHeros = ["thor", "spiderman"]
Array.prototype.heyRatnesh = function(){
    console.log(`ratnesh says hello`);
}
myHeros.heyRatnesh();



// ********** Inheritance in JS (done earlier using __proto__ keyword, but nowdays done using Object.setPrototypeOf())

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   //now TASupport object or its refernce can access TeachingSupport Object easily
}

Teacher.__proto__ = User; // can also write inheritance ike this;

// Modern syntax for inheritance ( Object.setPrototypeOf(Object that take values, Object from which value come))
Object.setPrototypeOf(TeachingSupport, Teacher) // here TeachingSupport can access properties of Teacher



// How to add our man-made property to all string data tpe, so that on calling a function we get a trimmed string
// Adding in String object so that it will be accessible to every string type data
String.prototype.trueLength = function(){
    console.log(`${this}`); //return current context on which work is happening, i.e on which string
    console.log(`True length is: ${this.trim().length}`); // return trimmed length
}
let anotherUsername = "ChaiAurCode     "
anotherUsername.trueLength();  //gives ChaiAurCode____ and True length is:11
"ratnesh".trueLength(); //gives hitesh and True length is:7
"iceTea".trueLength(); //gives iceTea and True length is:6









// .........