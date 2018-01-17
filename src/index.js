import _ from 'lodash';
import './style.sass';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  /* element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
   */

  // error handling with throw/try/catch
  // array manipulation with push/map/reduce/filter
  // string manipulation methods like replace/slice/split

  // ES6 specifics:
  /* Promises, modules, classes, template literals, generators and destructuring */

  // Normal functions vs. arrow functions

  // HTTP APIs - use XMLHttpRequest or fetch


  /*** DEFAULT PARAMETERS ***/
  //In ES6, we can put the default values right in the signature of the functions: 
  var link = function (height = 50, color = 'red', url = 'http://azat.co') {}
  console.log(link);

  /*** TEMPLATE LITERALS ***/
  let firstName = 'Pia';
  let lastName = 'Lyck Festersen';
  console.log(`My name is ${firstName} ${lastName}.`);

  /*** MULTI-LINE STRINGS ***/
  // Utilize the backticks as in the template literals
  let longPoem = `
  The truth I do not stretch or shove
  When I state that the dog is full of love.
  I've also found, by actual test,
  A wet dog is the lovingest. 
  `;
  console.log(longPoem);

  /*** SPREAD ATTRIBUTES ***/
  //Spread attributes converts a list of elements to an array and vice versa.
  let arr = [10, 20, 60];
  // Math.max returns the maximum element and does not support an array as parameter,
  // so by using the spread attribute, we convert it to a list of elements instead
  console.log(Math.max(...arr)); // displays 60

  return element;
}

document.body.appendChild(component());