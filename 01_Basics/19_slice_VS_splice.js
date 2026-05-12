// slice() vs splice() in JavaScript

// These two are VERY commonly confused.

// --------------------------- SLICE--------------------------------------- 
// copies/extracts
// Does NOT change original array
// Returns a new array

// slice = “cut piece”
// Like slicing bread 🍞

// Syntax:
// array.slice(start, end)
// start included
// end excluded

// Example:
let arr = [10, 20, 30, 40, 50];
let result = arr.slice(1, 4);
console.log(result); // [20, 30, 40]
console.log(arr);    // original unchanged



// --------------------------- SPLICE --------------------------------------
// 2. splice() → changes original array
// Used to:
// insert
// delete
// replace
// Modifies original array

// Syntax:
// array.splice(start, deleteCount, item1, item2)

// Example for deleting ----  Delete elements
let arr = [10, 20, 30, 40];
arr.splice(1, 2);
console.log(arr);
// Output: [10, 40]
// Deleted:
// starting from index 1
// deleted 2 items



// Example for inserting ----  Insert elements
let arr = [10, 20, 30];
arr.splice(1, 0, "hello");
console.log(arr);
// Output: [10, "hello", 20, 30]
// Inserted "hello" at index 1 without deleting any element



// Example for replacing ----  Replace elements
let arr = [10, 20, 30];
arr.splice(1, 1, "ratnesh");
console.log(arr);

// Output: [10, "ratnesh", 30]
// Deleted one element starting from index 1 and inserted "ratnesh" at index 1


// -----------------------Extra items Means in splice function------------------
// In splice(), after item1, item2, item3... are the values you want to insert.
// Syntax:
// array.splice(start, deleteCount, item1, item2, item3...)

// So item2,3,4... simply means: second item to insert, third item to insert and so on...
// Example: FOR INSERTING MULTIPLE ITEMS
let arr = [10, 20, 30];
arr.splice(1, 0, "A", "B");
console.log(arr);
// Output: [10, "A", "B", 20, 30]


//  Example: FOR DELETING AND REPLACING MULTIPLE ITEMS
let arr = [1, 2, 3, 4];
arr.splice(1, 1, "x", "y");
console.log(arr);
// Output:[1, "x", "y", 3, 4]

// Deleted one item (2)
// Inserted two items (x, y)