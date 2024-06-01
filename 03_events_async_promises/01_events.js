
// Have many types of events- click, scroll, onkeypress etc

// We avoid writing events directly in elements tags as attribute fucntions, becoz that is not scalable in normal way
// but we write directly in React.js(or frameworks) becoz React handles it effeciently --> eg- <p onClick=(function name)/>

// Ok then, why not writing like this ??---> becoz by this, onclick() function gives less features, thus we use eventListeners
document.getElementById('owl').onclick = function(){ //will also work, no issue
  alert("owl clicked")
}


// ********* IMPORTANT for Event Listener Activation----->>
// If suppose click event is fired on whole parent(div containing 4-5 other tags like <p> or <img>), and we click the child (i.e <p>)
// in the browser, then event.target will give only the child tag (as it gives only which tag is specifically touched)
// but remember if somehow the side lines of parent container is touched then event will work for that parent(i.e on all its child, not on a specific child)



//************* Event object(e) has so many things, functions, prototypes etc, useful for projects and interviews---> some below are
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY --> for mouse positions when clicked
// altkey, ctrlkey, shiftkey, keyCode ---> to check which key pressed, useful for project like "Typing speed, Spell checker"

// TRELLO CLONE uses the Drag and Drop events(unique project hoga)

const bodyElement=document.querySelector("body");
bodyElement.addEventListener('click', function(e){ 
    console.log(e); //returns the whole type of event that is being performed
    console.log(e.target); //returns the element which gets targeted on clicking (means which element is cicked)
})




// ************ Event Bubbling(move up like bubble) vs Event Capturing------------>
// You can prevent both event bubbling and event capturing by using event.stopPropagation()
// Third parameter of eventListener() decide whether to do Event bubbling or Event capturing
// if 3rd parameter is "false"(be default false value is there), then "Event-Bubbling" happens(i.e trigger the events from bottom to top)
// if 3rd parameter is "true", then "Event-Capturing" happens(i.e trigger the events from top to bottom)

// Explaining case of bubbling phase-->> The event then bubbles up to the parent element, and then to the grandparent element, 
// and so on, until it reaches the root element (typically the document object). i.e if suppose any other element that comes in path
// (means parent, grandparent, etc) during bubbling phase and having the same event listenner, then it also runs that without our action, 
// thus to stop event bubbling we have event.stopPropagation();

document.getElementById('outerDiv').addEventListener('click', function(event) {
  console.log('Outer Div capturing');
  event.stopPropagation(); // Stops event from reaching inner div during capturing
}, true); // true means event-capturing will happen

document.getElementById('innerDiv').addEventListener('click', function(event) {
  console.log('Inner Div bubbling');
  event.stopPropagation(); // Stops event from reaching outer div during bubbling
}, false); //false means event-bubbling will happen






//**** Form Submission: When a form is submitted, the submit event bubbles up from the <form> element.
// Form Submission: The form's default submit action is performed, which typically involves sending a request to the server and 
// navigating to a new page. so to avoid this default behaviour we use event.preventDefault();

document.querySelector('form').addEventListener('submit', function(event) {
  console.log('Form submitted');
  event.preventDefault(); // Prevents the form from submitting
  event.stopPropagation(); //prevent bubbling effect
});





// ******** Prevention of default behaviours associated with certain HTML elements when an event occurs--->

// 1-) Form Submission: When a form is submitted, the default behavior is to send the form data to the server and reload the page. 
// This behavior can be prevented using event.preventDefault().

// 2-) Anchor Links (<a> tags): By default, clicking on an anchor link (<a>) navigates to the URL specified in the href attribute. 
// This can be prevented using event.preventDefault(). (now navigation not occur)

// 3-) Checkbox and Radio Button: When a checkbox or radio button is clicked, it toggles its checked state. 
// You can prevent this default behavior using event.preventDefault().

// 4-) Context Menu (right-click)
// By default, right-clicking on a web page opens the context menu. This behavior can be prevented.
//   <div id="myDiv">Right-click me</div>
//   document.getElementById('myDiv').addEventListener('contextmenu', function(e) {
//     e.preventDefault();
//     console.log('Context menu prevented');
//   });

// 5-) etc.....






