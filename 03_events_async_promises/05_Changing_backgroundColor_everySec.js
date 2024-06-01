

//Proejct to generate a random background color everySec on pressing the start button

// HTML---->
{/* <button id="start">start</button>
<button id="stop">stop</button> */}



// this function will give the random HashCode value
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId; // so that clearInterval function can access the setInterval refernce for stopping it

  const startChangingColor = function () {

    if (!intervalId) { //just a safe check to run setInterval when the value is NULL, i.e fresh ho or after stopping 
      intervalId = setInterval(changeBgColor, 1000); //call changeBgColor function every sec to update the color
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor(); //calling random() to generate fresh hashcode value everytime
    }
  };


  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // to release the memory
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  




