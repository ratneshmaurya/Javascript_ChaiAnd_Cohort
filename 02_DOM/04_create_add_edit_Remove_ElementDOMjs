
// Creating element---> .createElement(tag name)
// Adding element --> .appendChild(name) , prepend(name)
// Edit element ---> .replaceWith(new elemnt)
// Remove element ---> .remove()

//remember innerHTML replace everything(even nested tags) with the content we provide to replace
// while textContent and innerText only changes the direct text of the tag

// ***************** Creating element in DOM --->

    const divElement = document.createElement('div') //creates a div element, but still in memory not in rendered in actual DOM
    console.log(div);

    //have some default attribute(className, id, style) we can set directly, else we have to use setAttribute for others
    divElement.className = "main"
    divElement.id = Math.round(Math.random() * 10 + 1)
    divElement.setAttribute("title", "generated title")

    //can do some manipulations -(innerHTML, textCOntent, styles, classlist etc)
    divElement.style.backgroundColor = "green"
    divElement.style.padding = "12px"

    divElement.innerText = "Chai aur code"
    // const addText = document.createTextNode("Chai aur code") ---> another way of creating a innerText value for it
    // div.appendChild(addText)



// ***************** Adding element in DOM ---->

    // 1-) appendChild(): Inserts a new element as the last child of the target element.
    const targetElement = document.querySelector('.target');
    targetElement.appendChild(divElement);

    document.body.appendChild(divElement); // here adds at last of body tag

    // 2-) prepend(): Inserts a new element as the first child of the target element.
    const targetElement2 = document.querySelector('.target');
    targetElement2.prepend(divElement);
    
    // 3-).....other function like insertBefore(),insertAdjacentElement() etc.




// ******************** Edit and remove element ----------->

    // consider the below HTML having one list item for below JS code --->
    //     <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Chai aur code | DOM</title>
    // </head>
    // <body style="background-color: #212121; color: #fff;">
    //     <ul class="language">
    //         <li>Javascript</li>
    //     </ul>
    // </body>
    // </html>


    //creating a general function to add a element(by using innerHTML)
    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("python")
    addLanguage("typescript")

    //creating a general function to add a element(by using appendChild and createTextNode)
    // as innerHTML is a costly operation thus not preferred in production
    function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')
 
    //Now we have list of 4 items as -> Javascript, python, typescript, golang

    //Editing 2nd list item
    const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    //secondLang.innerHTML = "Mojo"; ---> can also do this, but we are doing by creating new element and replacing
    const newli = document.createElement('li')
    newli.textContent = "Mojo"
    secondLang.replaceWith(newli)

    //Editing first list item
    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>TypeScript</li>'

    //Removing last list item
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()




    // ***** NOTE ------>
    // innerHTML can be a relatively more expensive operation compared to using appendChild along with createTextNode for adding text 
    // content, especially when dealing with large or complex HTML structures.
    // Here's why:--

    // innerHTML Replaces Existing Content: When you set the innerHTML property of an element, the browser must parse the entire HTML 
    // string provided and then replace the existing content of the element with the new HTML content. This involves additional processing 
    // overhead, especially for larger HTML strings or complex structures.

    // Potential Security Risks: innerHTML can introduce security risks such as cross-site scripting (XSS) vulnerabilities if the HTML 
    // content being inserted is not properly sanitized. By using appendChild and createTextNode, you avoid these risks because you're only 
    // dealing with text content, not HTML markup.