
// Dates are object types in js (asked in interviews)

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//defining dates on a specific value (not so important)
let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString());

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