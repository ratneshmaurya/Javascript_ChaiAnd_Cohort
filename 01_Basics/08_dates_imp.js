
// Dates are object types in js (asked in interviews)

let myDate = new Date()
console.log(myDate.toString()); //Thu Jun 06 2024 13:43:28 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Thu Jun 06 2024
console.log(myDate.toLocaleString()); //6/6/2024, 1:43:28 PM
console.log(typeof myDate); //object


//defining dates on a specific value (not so important)
let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString()); //1/14/2023, 12:00:00 AM

//************** FOR INTERVIEWS ------------------- */
let myTimeStamp = Date.now() //gives in milliseconds from 1970
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //converting millisec to seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1); //as months given by functions are start from 0 in JS thus adding 1
console.log(newDate.getDay());


//to adjust the paramter and its values, we can do t by using toLocaleString() function
newDate.toLocaleString('default', {
    weekday: "long",
    // ----------
})