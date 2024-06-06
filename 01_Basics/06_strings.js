
// strings in JS are object and are primitive type
// JS arrays have length, then prototype (prototype contains functions)

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

// substring(start,end)--> gives from start to end-1 index
const newString = gameName.substring(0, 4) // depreciated function, now slice() used 
console.log(newString);

// slice(start,end)--> gives from start to end-1 index
console.log(gameName.slice(2,4))// gives string from 2nd index to 3rd index
console.log(gameName.slice(-8, 4)) // gives"" (empty string, if given negative then it starts from end
// startIndex is -1. In JavaScript, a negative startIndex means counting from the end of the string. -1 refers to the last character ('h').
// endIndex is 4, so the extraction stops before the fifth character ('e').
// When the startIndex is greater than or equal to the endIndex after normalization (adjusting negative indices), slice returns an empty string. 
// Since the normalized startIndex (6, referring to 'h') is greater than endIndex (4), the output is: ""


// ********* Then how to fecth reverse string??
// To fetch a substring in reverse order in JavaScript, you can't use the slice method directly because it doesn't support extracting 
// characters in reverse order. However, you can achieve this by combining slice or substring with string manipulation methods like 
// split, reverse, and join.
let s = "ratnesh";
let extracted = s.slice(1, 4); // "atn"
let reversed = extracted.split('').reverse().join(''); // "nta"
console.log(reversed); // Output: "nta"
// split('') splits the string into an array of characters.
// reverse() reverses the array.
// join('') joins the array back into a string.


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))


