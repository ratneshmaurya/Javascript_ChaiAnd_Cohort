
// WINDOW ---> DOCUMENT ---> HTML ----> HEAD+BODY, HEAD have ... , BODY have... ans so on

// Topics- HTMLcollection vs Nodelist, TagName and className and QuerySelectorAll have collections return type

// The Document Object Model (DOM) is a programming interface that represents a web page's structure 
// and content as a tree of objects. It allows JavaScript to access, manipulate, and interact with HTML elements 
// and their properties, styles, and content


// ************ Where does the document object come from?

// In Browsers: The document object is part of the Web API provided by the browser. It is implemented by the browser's engine 
// and accessible through the window object.
// In Node.js: The document object is not available by default because Node.js is a server-side runtime and does not have a 
// built-in DOM. To work with the DOM in Node.js, you would typically use a library like jsdom(e.g--> for server-side rendering, testing, 
// or scraping purposes)

// The document object and methods like document.getElementById() are inherently part of the browser environment. When you write 
// JavaScript code that interacts with the DOM using document methods, you are typically running that code in a browser context. 
// This is why these methods work without any additional libraries when you are working within a browser.
// In a typical web development scenario, JavaScript code that manipulates the DOM is executed within a web browser.




// ************ All DOM element accessing functions(Id,TagName, querySelector, className) in JavaScript return the target element(s) 
// along with their entire nested content. When you select an element, you get the whole subtree of that element, including any nested 
// tags and content within it.


// use querySelector() and querySelectorAll() --> best than others, nodelist hoti isme just remember

// ******************* Accessing DOM Elements:

document.getElementById('id') // Retrieves the element(along its nested tags) with the specified id.

document.getElementsByTagName('tagName') //Returns an array(**HTML collection) of all elements(along its nested tags) with the given tag name. 
// eg- ("p" for paragraph, "h1" for heading etc)

document.querySelector('selector') // Uses CSS selectors to find the FIRST matching element(along its nested tags). ("h1.specialClass", h1 with class="specialClass")

document.querySelectorAll('selector') // Similar to querySelector, but returns a (**NODELIST) containing all matching elements(along its nested tags)  
// based on the provided CSS selector.
// ***** CSS selector means the tags, classname, ids, or selectors that we write exactly in css file to access the tags

document.getElementByClassName('class') // retreives all elements(along its nested tags) as (**HTML Collection) having this class name



// ************ Remember that HTMLCollection and NodeList are not true arrays--->

// Nodelist have for-each loop inbuilt prototype, thus we can propogate through element easily. We can access also by [0],[1] etc i.e index numbers

// HTML Collection doesnot have any iteration in prototype, thus we need to convert that into array first by --> Array.from(Collection value variable)
// i.e we can traverse them(which we get from TagName(), ClassName() and querySelectorAll()) using above methods


// **** Remember our general FOR Loop works for any type of collection, hence we can use For loop on HTML Collection or Nodelist also
const parent=document.getElementsByClassName('class1');
for(let a=0; a<parent.length;a++){ //as we have .length property for collection and Nodelist also
    // ------
}

// ** To see the inbuilt properties and prototype of anything in JS, check on browser console
// just run any command that gives result to that thing which you want to check
document.getElementsByClassName('class1'); //run this and enter to check for HTML collection functionalities


// use querySelector() --> best than others