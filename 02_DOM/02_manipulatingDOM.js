
// Topics- DOM, Innertext vs innerHTML vs TextContent, 

// ********************** Manipulating DOM Elements:
// Once you have access to an element, you can use its properties and methods to change its: Content, Style, Attribute, Classlist

// 1-) Content: Use innerHTML or textContent or innerText to set or get the element's text content.
// ***innerHTML gives the entire HTML content, including nested tags, attributes, and whitespace, within the selected element.
// ***textContent Returns only the combined text content of the element and its nested descendants, but ignores HTML tags and attributes.
//(textContent does not parse HTML. Any HTML tags are treated as literal text)
// ***innerText retrieves or sets the text content of an element and its nested descendants which are displayed, but it also takes into account the CSS styling
//(not saying all types of attribute, only style attribute), such as display: none and line breaks.(i.e it fetches and render exactly as shown in browser)
const heading = document.getElementById("myHeading");
heading.innerHTML = "New Heading with <strong>emphasis</strong>";// Using innerHTML (overwrites existing content and event listeners)

// 2-) Style: Use style property to change element styles (e.g., element.style.color = "red").
const paragraph = document.getElementById("myParagraph");
paragraph.style.color = "red";
paragraph.style.fontSize = "20px";


// 3-) Adding or Removing Attributes:
// setAttribute(attributeName, attributeValue): Sets the value of a specified attribute on the element.
// getAttribute(attributeName): Gets the value of a specified attribute on the element.
// removeAttribute(attributeName): Removes a specified attribute from the element.
const image = document.getElementById("myImage");
image.setAttribute("title", "This is a cool image"); // Add a title:This is a cool image as attribute in image tag (**OVERRIDE the same attribute if any)
const title = image.getAttribute("title"); // Get the value of the title attribute
console.log(title); // Output: "This is a cool image"

document.getElementById("title").getAttribute("class") // returns the value of class attribute of the elements having id=title
document.getElementById("title").setAttribute("class", "test") // sets a class="test" attribute in this element,

image.removeAttribute("alt"); // Remove the alt attribute


// 4-) ClassList property: Provides methods to manipulate an element's class list.
// add(className): Adds a class to the element.
// remove(className): Removes a class from the element.
// toggle(className): Toggles the presence of a class (adds if not present, removes if present).
const box = document.getElementById("myBox");
box.classList.add("highlighted"); // Adds the "highlighted" class
box.classList.toggle("important"); // Toggles the "important" class (add if not present, remove if present)


// ********** Benefits of Using DOM:
// Content Updates: Update content without refreshing the entire page using JavaScript and the DOM.
// Asynchronous Operations: Fetch data from servers and dynamically add it to the DOM.