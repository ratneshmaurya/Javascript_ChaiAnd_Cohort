
// Consider this HTML code for below JS scripts

<div className="center">
    <div id="banner">
        <span> Your Local Time</span>
    </div>
    <div id="clock">

    </div>
</div>


// ******* now the JS logic scripts are below-->

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') --> also done by this method

// now we have to make a digital clock and show time that updates on every second
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString(); // gives time in indian format ->> 14:23:45 pm
}, 1000);

