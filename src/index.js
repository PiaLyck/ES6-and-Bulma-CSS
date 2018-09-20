import _ from 'lodash';
import './style.sass';

function $(x) {
  return document.getElementById(x);
}

function component() {
  var element = document.createElement('div');

  // error handling with throw and try/catch
  // array manipulation with push/map/reduce/filter
  // string manipulation methods like replace/slice/split

  // ES6 specifics:
  /* Promises, modules, classes, template literals, generators and destructuring */

  // Normal functions vs. arrow functions

  // HTTP APIs - use XMLHttpRequest or fetch

  // Lexical this
  var bob = {
    _name: "Bob",
    _friends: ['Anne', 'Tim'],
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
    }
  }

  bob.printFriends();

  //let is the new var. const is single-assignment
  function f() {
    {
      let x;
      {
        // okay, block scoped name
        const x = "sneaky";
        // error, const
        x = "foo";
      }
      // error, already declared in block
      let x = "inner";
    }
  }

  /*** Object oriented programming (OOP) ***/

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
  let arr = [10, 20, 60, 11, 45];
  // Math.max returns the maximum element and does not support an array as parameter,
  // so by using the spread attribute, we convert it to a list of elements instead
  console.log(Math.max(...arr)); // displays 60

  return element;
}

document.body.appendChild(component());