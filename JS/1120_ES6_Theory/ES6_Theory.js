// ECMA Script 6

let factorialNumber = function (a = 10) {

  let fact = 1;

  for (i = 1; i <= a; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorialNumber(5));
console.log(factorialNumber());

//////////////////////////////////////////////////////////new
// Default values on function parameters
var name = `jake`;

// Function expression. Immediately invoked functions
let factorial = function(nameToChange) {
  name = nameToChange;
}

//////////////////////////////////////////////////////////new
// Function declarations
function whatever (whatever) { // it is hoisted...
  return whatever;
}

//////////////////////////////////////////////////////////new
// Arrow functions
let myFunction = (a) => {
  console.log(a);
}
myFunction(10);

//////////////////////////////////////////////////////////new
// let squareRoot = (a = 9) => {
//   Math.sqrt(a);
// }
//
// squareRoot();
// squareRoot(10);

let squareNumber = (a = 9) => Math.sqrt(a);
// in oneline it is automatically "return!!!!"

console.log(squareNumber());
console.log(squareNumber(16));

//////////////////////////////////////////////////////////new exercise
let multiple = (a,b) => {
  let answer;
  // if (a%b===0) {
  //   return true;
  //   } else {
  //   return false;
  // }
  a % b === 0 ? answer = true : answer = false;
  return answer;
};

console.log(multiple(5, 3));
console.log(multiple(15, 5));
console.log(multiple(30, 3));
console.log(multiple(13, 3));

//////////////////////////////////////////////////////////new exercise
// console log the type of event everytime the button is clicked

let btn = document.querySelector(`button`);

btn.addEventListener(`click`, (ev) => {
  console.log(ev.type);
})
