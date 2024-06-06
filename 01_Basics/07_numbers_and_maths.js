const score = 400
const balance = new Number(100) //here(Object declaration) now it is confirmed that this is must be a number

console.log(balance.toString().length); //now can run every function of string into it
console.log(balance.toFixed(2));  // best for during projects, when want precision level deciaml points

//************** IMPORTANT FOR INTERVIEW-----------------------
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // now it says from left side se, we must have 4 digits (incuding decimal if there is)
// eg- for 123.67 it gives- 123.7 (rounded of the 4th digit if possible)
// eg- for 1245.345 it will give 1245 (rounded of the 4th digit if possible)
// eg- for 1245.745 it will give 1246 (rounded of the 4th digit if possible)
// eg- for 1123.89 with precision(3) it will give 1.12e+3 (as it have to display only 3 digits to output, but we have a larger number than 
// 3 digits hence giving in expo form)

const hundreds = 1000000 //(10 lakhs)
console.log(hundreds.toLocaleString()); //gives output in US format using comma 1,000,000
console.log(hundreds.toLocaleString('en-IN')); //gives output in indian format with commas- 10,00,000
// toLocaleString() also used in dates api, to give date in string format in indian style <date><time>


// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


// RANDOM function ka khel (best for projects)
console.log(Math.random()); //gives between 0-1
console.log((Math.random()*10) + 1); // gives between 1 to 10.9999
console.log(Math.floor(Math.random()*10) + 1);  //gives between 1 to 9

// creteria ?
//Math.random()*(kitna range chahiye minimum number se dur tk jaaye taaki) + (minimum number from where we need the numbers)
//Math.floor(Math.random()*20) +30 ----> gives minimum 30, and ranges from 30 to 50 becoz range is 20

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)