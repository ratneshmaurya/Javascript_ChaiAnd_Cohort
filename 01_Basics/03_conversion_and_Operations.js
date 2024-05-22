
//as most of the forms in projects stores or return values in String, hence we need conversions concepts for them while retreiving

let score = "hitesh"
let valueInNumber = Number(score)
// if score contains these then Number() gives that -
// "33" => 33
// "33abc" => NaN
// null =>0
// undefined => Nan
// true => 1; false => 0


let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// if isLoggedIn contains these then Boolean() gives that -
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// -----------------------------------------------------------------------
//--------------------------Operations-------------------------------------

//--------string with addition operator--------
// string with -,*,/,> converts into number (where > used during comparisons like "2">1)
// string with + follow the left hand solving strategy
// always left side se evaluate hona start hoga, it number then keep number, if string then string convert hota
console.log("1" + 2);  // 12
console.log(1 + "2");  //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2");  //32

// strings with negative sign converts into number
// string with -,*,/,> converts into number (where > used during comparisons like "2">1)
// string with + follow the left hand solving strategy
console.log("10"-"5");  //gives 5
console.log("10"-"5"-3); //gives 2
console.log(10-"5"-3); //gives 2
console.log("5"*3); //gives 15



console.log(+true);
console.log(+"");