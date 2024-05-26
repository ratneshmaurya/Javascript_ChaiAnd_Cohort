
//Topics covered- Use of symbol in objects(also see datatype.js file), function to varibale and calling function, 
//Object.keys(Object_name)), Object.values(Object_name), Object destructuring, API types

//Object are 2 types- Singleton and Literal
// singleton
// Object.create(), let a= new Object() ----> creates objects by constructor method, and we said that object as singleton object

// Object literals - by using {}
//by default JS intepreter reads keys in String format, hence we must access them like JsUser["name"] or JsUser.name
//to access Symbol, we only use [], so simply remember to write and access symbol in Objects we use [] brackets

const mySym= Symbol("key") //creating a symbol, and imp is to how we write this symbol in Object
const JsUser = {
    name: "Ratnesh",
    "full name": "Ratnesh Maurya", // important, becoz we can't access string keys using .dot operator, hence obj["key"] method is very imp**
    [mySym]: "mykey1", //must write symbol in [], becoz on writing like only mySym:"myKey", we will lost the data type, it refer like String not Symbol anymore
    age: 23,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]) // important, becoz we can't access string keys using .dot operator, hence obj["key"] method is very imp**
console.log(JsUser[mySym]) //to access Symbol, we only use [], so simply remember to write and access symbol in Objects we use [] brackets

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser) // now doing any further changes in this Object won't affect original object
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser); // will give same previous output

//----------we can also pass the functions into variables in JS,( becoz functionare type-1 citizens in JS, i.e we can use them also as var etc.)
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this refer to the current object here, i.e JsUser
}

console.log(JsUser.greeting); // function(anonymous), becoz we are accessing only the reference
console.log(JsUser.greeting()); //here we are executing the function, thus we get proper output -> "Hello JS user"
//***** but we got another output as "undefined", becoz 1st output is due to executiion of greeting() function, second is due 
// to as JsUser.greeting() does not return naything, thus giving undefined (output of console.log())


//-------------we can also add the property like this to an object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // return array of keys
console.log(Object.values(tinderUser)); //return array of values
console.log(Object.entries(tinderUser)); //return array of array (containig each [key,value] in single array)
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check for any keys/property

//------------we can do nesting in objects also easily at any deep level
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


// ----------------combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 } -> not a good way, shows nested output
// const obj3 = Object.assign({}, obj1, obj2, obj4) -> also a way to join all objects and store in {} and then return in obj3
const obj3 = {...obj1, ...obj2} //best way in production level
console.log(obj3);


//--------------- accessing objects from Database like structure ( we receive in array of objects)
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
console.log(users[1].email)
console.log(Object.keys(users[0])) //gives [ 'id', 'email' ]
console.log(Object.values(users[0])) //gives [ 1, 'h@gmail.com' ]


// ----------------- Object destructuring in JS
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor --> way to access the courseInstructor value
const {courseInstructor} = course // destructuring directly so that now we can access just by courseInstructor name, not writing above line
console.log(courseInstructor);

const {courseInstructor: instructor} = course // destructuring as well as renaming it to a small name, so to access it easily
console.log(instructor);



//------------------ API concept in JS
//API are stored in just {}, or also having array of objects[{},{},...]
//The keys in API are also in form of strings remember

//type-1 API
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//type-2 API
[
    {},
    {},
    {}
]

//---------can use online JSON formatter tool to understand the structure of any API data