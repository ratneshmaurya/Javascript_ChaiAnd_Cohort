
// WINDOW ---> DOCUMENT ---> HTML ----> HEAD+BODY, HEAD have ... , BODY have... ans so on

// Topics- HTMLcollection vs Nodelist, TagName and className and QuerySelectorAll have collections return type

// The Document Object Model (DOM) is a programming interface that represents a web page's structure 
// and content as a tree of objects. It allows JavaScript to access, manipulate, and interact with HTML elements 
// and their properties, styles, and content


// ******************* Accessing DOM Elements:

document.getElementById('id') // Retrieves the element with the specified id. (returns whole element and its child tags)

document.getElementsByTagName('tagName') //Returns an array(**HTML collection) of all elements with the given tag name. 
// eg- ("p" for paragraph, "h1" for heading etc)

document.querySelector('selector') // Uses CSS selectors to find the FIRST matching element. ("h1.specialClass", h1 with class="specialClass")

document.querySelectorAll('selector') // Similar to querySelector, but returns a (**NODELIST) containing all matching elements based on the provided CSS selector.
// ***** CSS selector means the tags, classname, ids, or selectors that we write exactly in css file to access the tags

document.getElementByClassName('class') // retreives all elements as (**HTML Collection) having this class name



// ************ Remember that HTMLCollection and NodeList are not true arrays--->

// Nodelist have for-each loop inbuilt prototype, thus we can propogate through element easily. We can access also by [0],[1] etc i.e index numbers

// HTML Collection doesnot have any iteration in prototype, thus we need to convert that into array first by --> Array.from(Collection value variable)
// i.e we can traverse them(which we get from TagName(), ClassName() and querySelectorAll()) using above methods