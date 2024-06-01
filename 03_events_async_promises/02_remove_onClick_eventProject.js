


{/* <body style="background-color: #414141; color: aliceblue;">
    <h2>Amazing image</h2>
    <div >
        <ul id="images">
            <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
            <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" ></li>
            <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
   </div>
</body> */}


// ********* IMPORTANT for Event Listener Activation----->> as below we are selecting parent and adding event on parent---->
// If suppose click event is fired on whole parent(div containing 4-5 other tags like <p> or <img>), and we click the child (i.e <p>)
// in the browser, then event.target will give only the child tag (as it gives only which tag is specifically touched)
// but remember if somehow the side lines of parent container is touched then event will work for that parent(i.e on all its child, not on a specific child)
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName); //to show what tagname is stored for a particular tag in event object
        if (e.target.tagName === 'IMG') { // why ?? becoz if somehow the side lines of parent container is touched then event will work 
            // for that parent(i.e on all its child, not on a specific child), so it removes all the child, but we want only specific child to removed
            // thus checking that if the 'IMG' is clicked then only remove it. (as event object store tagname for Iage as IMG)
            console.log(e.target.id);
            let removeIt = e.target.parentNode; // so that the <li> tag is removed along with image, becoz <li> is parent for <img>
            removeIt.remove()
        }
    
        
    })
    
    //removeIt.parentNode.removeChild(removeIt) --> also be used to remove the child, using removeChild() function


    // ***** We can also do this project easily by---> first add the id="toRemove" to each <li> to be accessible easily
    const liIteams=document.querySelectorAll("#toRemove"); //this gives all list items in it as a nodelist
        liIteams.forEach((Iteam)=>{
        Iteam.addEventListener('click',()=>{
            Iteam.remove();
        })
    })

    

    //************** Why this project was a little unique??
    // As we are selecting parent and adding event on parent(i.e on all its child, not on a specific child)
    // We are not doing any loop kind of things to traverse for every <li>node








