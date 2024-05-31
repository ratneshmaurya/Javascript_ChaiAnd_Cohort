

// Topic--> .children, .firstElementChild, .lastElementChild, .parentElement, .nextElementSibling, .childNodes
// consider the below HTML code for the JS--->

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>DOM | Chai aur code</title>
// </head>
// <body style="background-color: #212121; color: #fff;">
//     <div class="parent">
//         <!-- this is a comment -->
//         <div class="day">Monday</div>
//         <div class="day">Tuesday</div>
//         <div class="day">Wednesday</div>
//         <div class="day">Thursday</div>
//     </div>
// </body>


// *********** Functions from parent to child access
    const parent = document.querySelector('.parent');
    console.log(parent);
    console.log(parent.children); // gives HTML collection of direct childrens of parent
    console.log(parent.children[1].innerHTML); // gives innerHTMl of 1st direct child of parent

    for (let i = 0; i < parent.children.length; i++){ //we can loop through the HTML collection using general FOR Loop.
        console.log(parent.children[i].innerHTML);
    }
    
    parent.children[1].style.color = "orange" ; 
    console.log(parent.firstElementChild);
    console.log(parent.lastElementChild);
    
// ************ Functions from child to parent access
    const dayOne = document.querySelector('.day'); //accessing the 1st child, becoz that have class='day', and querySelector() only return 1st matching
    console.log(dayOne);
    console.log(dayOne.parentElement); //accessing the parent of it
    console.log(dayOne.nextElementSibling); //accessing the just next child of the parent(i.e its sibling)
    

// ************* It gives Nodelist of all things of complex tree structure
// this counts line break, comment, tags
    console.log("NODES: ", parent.childNodes); //gives-11 (first line break of parent, then comment, then line break, then 1st child, line break, 2nd child, line break.....)