
// Consider this HTML code for below JS scripts
<div>
    <h1 className="heading"> Background changer</h1>
    <button className="button" id="grey"></button>
    <button className="button" id="blue"></button>
    <button className="button" id="white"></button>
    <button className="button" id="yellow"></button>
</div>
 


// now the JS logic scripts are below-->

const buttons = document.querySelectorAll('.button');
const bodyElement = document.querySelector('body');

buttons.forEach(function (button) {

  console.log(button);
  button.addEventListener('click', function (e) {

    console.log(e);
    console.log(e.target); //returns the targeted element

    if (e.target.id === 'grey') { // if clicking grey colored button then do this
        bodyElement.style.backgroundColor = e.target.id; // as we have given the colors name to id for every button elements, thus using its value
        // can also do like--> document.body.style.backgroundColor=e.target.id;
    }
    if (e.target.id === 'white') {
        bodyElement.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
        bodyElement.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
        bodyElement.style.backgroundColor = e.target.id;
    }
    
  });
});

