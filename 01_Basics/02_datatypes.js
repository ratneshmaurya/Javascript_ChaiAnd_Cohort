//  Primitive- 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// Reference (Non primitive) - Arrays, Objects, Functions

// Return type of data types in JavaScript --------------------- (for interviews)
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function (object functions)
//        Object  =>  object

// ----------------------------------------------------------------------

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

//typeof can used with or withour braces i.e typeof(null) also correct or, typeof null also correct
console.log(typeof undefined); // undefined
console.log(typeof null); // object


// ******** SYMBOL Uses (Interview Specific)------->
//In JavaScript, Symbols themselves don't hold values in the traditional sense like numbers or strings. They are 
// unique identifiers and remain immutable throughout the program. However, you can associate data with Symbols indirectly using a few approaches:
// You can associate data with Symbols using object properties, Map.

//1.Object Properties:Create an object and use the Symbol as a property key. The value you assign to that property becomes associated with the Symbol.
// In this example, the Symbol mySymbol is used as a unique key to store an object containing user data.
const mySymbol = Symbol('user-data');
const user = {
  name: 'Alice',
  [mySymbol]: { age: 30, city: 'New York' }
};
console.log(user[mySymbol]); // { age: 30, city: 'New York' }

//2. Map Data Structure:Use a Map data structure, which allows storing key-value pairs where keys can be any data type, including Symbols.
const mySymbol2 = Symbol('user-preferences');
const preferences = new Map();
preferences.set(mySymbol2, { darkMode: true, language: 'en' });
console.log(preferences.get(mySymbol2)); // { darkMode: true, language: 'en' }
