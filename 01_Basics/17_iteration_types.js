
// Topics --> For-each (fetch values for arrays mainly), For-of(Operates on the values of the iterable object, use destructuring for complex data), 
//For-in (Operates on keys/index only)
//************** "For- Each" loop, best and most used for arrays (But doesnot return anything, not useful if want to return something)
// For-each loop needs a callback in its parameter

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )

// using function refernece in for-each
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// for each also access index and whole array also
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

//helpful for databases
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )



// ************* "For Of" loop -> access values inside directly while looping
//not iterable for simple objects
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) { console.log(num); }

// For strings
const greetings = "Hello world!"
for (const greet of greetings) { console.log(`Each char is ${greet}`) }


// Maps--> stores elements as inserted order
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map); // shows in array format all [key,values] pair

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


//************ Error not iterable for Object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}


// ************* "For in" loop -> access only keys while looping (0,1,2,3 for arrays ... keys for objects... not iterable for maps)
const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject2) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// for (const key in map) {
//     console.log(key);
// }