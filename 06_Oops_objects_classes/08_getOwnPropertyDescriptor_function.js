
// Why can't we change the value of Math.PI in Math object??
// Becoz the writable property for it is set ot false, and we can't also change it.(Inbuilt created like this)
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);




// The Object.getOwnPropertyDescriptor() method in JavaScript is used to return the descriptor for a property of a given object. 
// The property descriptor is an object that provides metadata about the property, such as its value, and whether it is writable, 
// enumerable, and configurable.

// Syntax--->> Object.getOwnPropertyDescriptor(obj, prop)
// obj: The object from which to get the property descriptor.
// prop: The name (string) or Symbol of the property whose descriptor is to be retrieved.


// For other objects we can also make that it's vaue doesnot changed in future by using Object.getOwnPropertyDescriptor() method
const chai = {
    name: 'ratan',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // Output: { value: ratan, writable: true, enumerable: true, configurable: true }

// To change the metadata of property we use .defineProperty(obj,prop,{metadat in key:value form})
Object.defineProperty(chai, 'name', {
    writable: false, // now we can't change the 'name' property of chai object
    enumerable: false, // now on using any loop, we can't access the 'name' property
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // Output: { value: ratan, writable: false, enumerable: true, configurable: true }

// now lets try whether we can access the name property of chai object
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { // so that we don't work on the function inside the chai object
        
        console.log(`${key} : ${value}`); // here we can't access the name property becoz its PropertyDescriptor's enumerable set to false.
    }
}










// ..........................