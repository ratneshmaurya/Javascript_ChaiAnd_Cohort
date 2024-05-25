
// JS arrays are resizable, i.e we can easily add more and more elements
// JS arrays have length, then prototype, then again prototype inside this prototype (prototype contains functions)
// JS arrays do shallow copy(i.e reference remains same on assigning), while deep copy means another copy made
// JS arrays can take anything, even another array if you directly do array.push(array2)

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
myArr.push(6)
myArr.push(7)
myArr.pop()

//below are costly operations, becoz do whole element shifting
myArr.unshift(9) //push into start
myArr.shift() //pop from start

console.log(myArr.includes(9)); 
console.log(myArr.indexOf(3));

// join converts the element of arrays into string format and return string, so here below newArr is of string type, not array type
const newArr = myArr.join()
console.log(myArr);
console.log( newArr);


// *********** INTERVIEW SPECIFIC ------------------

//*** slice vs splice
//slice does not include the last index given, and also don't change the original array
//splice start from index and then moves to number of indexes further and also changes the original array( original array only contains the remaining element on which splice not worked)
console.log(myArr);
const myn1 = myArr.slice(1, 3) //start from 1st index and the move till 2nd index
console.log(myn1);
console.log(myArr); //no change in original array after slice

const myn2 = myArr.splice(1, 4) //start from 1st index, and moves 4 more index further
console.log(myn2); 
console.log(myArr); //will change the original array after splice


//**** JS arrays can take anything, even another array if you directly do array.push(array2)
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros) // it push the array into 3rd index, making 2-d array from 3rd index
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

//*** So to add another array into first array, we can do concat, or SPREAD operator (best and easiest)
const allHeros = marvel_heros.concat(dc_heros) //but we need to store in variable becoa concat doesnot changes original array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


// if want that all element of any dimension convert into single 1-D array, use flat(Infinity), it returns flat array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//now many times we do data-scraping data were in diff format like string, objects, list etc, but we need data in array format 
// steps- check whether array is not, 
// then convert into array using .from(), it gives character array for string, for object we have to specify whether want key or values array
console.log(Array.isArray("Hii")) //gives false, becoz it is string not array
console.log(Array.from("Hii")) //gives ['H','i','i']
console.log(Array.from({name: "Ratnesh"})) // interesting, gives [], becoz confused whether to make array from key or values??

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //.of() takes set of elements and return an array from it