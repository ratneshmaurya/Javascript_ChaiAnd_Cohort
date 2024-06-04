
{/* <body>
    <button>Button Clicked</button>
</body> */}


// Bind---> now not used in React library, earlier in React library it was used heavily, not it handles automatically
// but in pure JS, we have to use for this kind of case below.

// Bind() is used for passing "parent function" ka "this" along with it "this".----> see below
// mostly used during eventListeners

class React {
    constructor(){
        this.library = "React"
        this.server = "https://localhost:300"

        //requirement
        document.querySelector('button')
            .addEventListener('click', this.handleClick.bind(this)) //here passing .bind(this) along with handleclick method
            // as handleClick() is called due to button, thus on logging "this" in handleclick, it will give button refernece

    }
    handleClick(){ //remeber this is a prototype function for React class. see "class_behind_the_scene.js" file
        console.log("button clicked");
        console.log(this); // if .bind(this) was not written above, then it will access only the button, not the above server and library
        // by using .bind(this), we are passing React function ka "this" along with the button ka "this", so we can now access React() ke props also.
        console.log(this.server);
    }
}

const app = new React();
app.handleClick();



