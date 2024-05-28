


// In switch case, if break is not there, then it runs till get break (also runs default case*********** Imp)


//************** Falsy values for conditions 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//************** Truthy values
// "0", 'false', " ", [], {}, function(){}


//************* How to check if array is empty or not??
const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty");
}


//************* How to check if object is empty or not??, as Object.keys() returns array containing keys, 
//thus checking the length of this array
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



//**************** Nullish Coalescing Operator (??): null undefined
// To check if null ya undefined aa rha kisi database se then we should return other value or run another function

let val1;
val1 = 5 ?? 10 // no null value thus return 5
val1 = null ?? 10 // null value thus run right side wala
val1 = undefined ?? 15  // undefined thus run rught wala 
val1 = null ?? 10 ?? 20  // null thus run right wala, if that also gives null run right wala