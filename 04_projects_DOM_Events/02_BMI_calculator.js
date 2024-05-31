

// Here is the html code for below JS scripts

<body>
  <h1>BMI Calculator</h1>
  <div class="container">
    <form>
      <p>
        <label for="height">Height in CM: </label>
        <input type="text" id="height" />
      </p>
      <p>
        <label for="weight">Weight in KG: </label>
        <input type="text" id="weight" />
      </p>
      <button>Calculate</button>
    </form>
    <div id="results"></div>
    <div id="weight-guide">
      <h3>BMI Weight Guide</h3>
      <p>Under Weight = Less than 18.6</p>
      <p>Normal Range 18.6 and 24.9</p>
      <p>Overweight = Greater than 24.9</p>
    </div>
  </div>
</body>


// now the JS logic scripts are below-->

const form = document.querySelector('form');

// this usecase will give you empty, becoz we know script runs on page loads, and this execute on page loads, thus at ime we have empty values
// we need to fetch values only after the form submission, thus we will fetch the value only in the form handling
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); // as forms values are in string, thus must convert to integer
  const weight = parseInt(document.querySelector('#weight').value); // as forms values are in string, thus must convert to integer
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});



// ****** To fetch values from input tags using DOM selectors, you should use the .value property of the input elements,
//  not innerHTML. The innerHTML property is used to get or set the HTML content inside an element, but input elements do not 
// have inner HTML content; instead, they have values.
<input type="text" id="name" name="name" value="John Doe"/>
const nameValue = document.getElementById('name').value;

