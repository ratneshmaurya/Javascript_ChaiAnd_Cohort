
// strings in JS are object and are primitive type

const myname = "ratnesh"
const repoCount = 50
// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${myname} and my repo count is ${repoCount}`);


//strings are immutable, thus their characters can't be changed simply-
let word="hey"
word[2]='a';  ///-----> no effect here
console.log(word);

//but we can re-assign the shole string easily, it creates the new string and assign to it in memory
let word2 ="hey"
word2="hello";
console.log(word2);


// ----------operations in string-------------------------

const gameName = new String('hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

console.log(gameName.split('-'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)  //if given negative then it starts from end
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))


