

// stack contains primitive data types and its values (like- int, float, double, strings)
// while heap contains non-primitive(reference) type values (like- object, array, function)

// when we pass primitive values(into variable, or in function call) it makes copy, does not make reference
let a=13;
b=a; // here a values copies into b, not a's reference


//but when we pass non-primitive values(into variable, or in function call) it makes reference
//thus changing any prameter by anyone, changes for both
let obj1={name:"ratnesh", age:10}
let obj2=obj1;
obj2.name="shivam";    //--------->this changes values for both obj1 and obj2
console.log(obj1.name) 



let obj3={name:"ratnesh", age:10}
console.log(obj3.name) 
//console.log(obj3[name])  //-----> gives error, depriciated, as it needs either .name or ["name"]
console.log(obj3["name"])
