import { addition, fizzBuzz } from "./implementation.js";
import { factorialNum } from "./factorial.js";

const passedMessage = `your test has passed`;
const failedMessage = 'your test has failed';

let checkAddition = (function() {
  const expectedResult = 10;
  const actualResult = addition(2, 8);

  if (expectedResult == actualResult) {
    console.log(`Your test passed!`);
  } else {
    console.log(`Your test has failed! - checkAddition`);
  }
})();

///additionGoneWrong--------------////
let additionGoneWrong = (() => {
  const expectedResult = `Sorry the operation is not possible!`;
  const actualResult = addition(false, `23`);

  if (expectedResult == actualResult) {
    console.log(`Your test passed!`);
  } else {
    console.log(`Your test has failed! - additionGoneWrong`);
  }
})();

////returnPositiveProduct------------/////
const returnPositiveProduct = (() => {
  const expectedResult = 70;
  const actualResult = addition(-7, 10);

  if (expectedResult == actualResult) {
    console.log(`Your test passed!`);
  } else {
    console.log(`Your test has failed! - returnPositiveProduct`);
  }
})();


/// -------- FIZZBUZZ --------////

// the testing:

let typeCheck = (() => {
  const actual = fizzBuzz(`The argument provided is not a number.`);
  const expected = `The argument provided is not a number.`;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();

let negNum = (() => {
  const actual = fizzBuzz(-5);
  const expected = `The number is either negative or 0. You shall not pass.`;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();

let checkFizzBuzz = (() => {
  const actual = fizzBuzz(15);
  const expected = `FizzBuzz`;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();

let checkBuzz = (() => {
  const actual = fizzBuzz(25);
  const expected = `Buzz`;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();

let checkFizz = (() => {
  const actual = fizzBuzz(9);
  const expected = `Fizz`;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();

let checkMultiple = (() => {
  const actual = fizzBuzz(7);
  const expected = 7;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();


// ------ Factorial Number-------- //

let checkFactorialNum = (() => {
  const actual = factorialNum(`booohh`);
  const expected = `It is not a number`;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();

let checkFactorialNeg = (() => {
  const actual = factorialNum(-2);
  const expected = `Can't calculate factorial of a negative number`;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();

let checkFactorialZero = (() => {
  const actual = factorialNum(0);
  const expected = `The number is 0 the factorial 1`;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();

let checkFactorialResult = (() => {
  const actual = factorialNum(6);
  const expected = 720;

  expected === actual ? console.log(passedMessage) : console.log(failedMessage);
})();
