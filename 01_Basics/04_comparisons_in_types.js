
// whenevr their are comparison and equality check btwn different types then we have to be attentive

// string with -,*,/,> converts into number (where > used during comparisons like "2">1)
console.log("2" > 1);
console.log("02" > 1);

// in production, we avoid these cases that makes ambiguity
// equality check and comparison work differently with null
// comparison(>,<,>=,<=) treat null as 0
// while equality(==) treat null as something ambiguious, fatal logic
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//with undefined all false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===, also checks data type, while == converts the value
console.log("2"==2);  //true
console.log("2" === 2);  //false