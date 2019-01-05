(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const operation = (a, b) => {
  if (typeof a !== `number` || typeof b !== `number`) {
    return 'Sorry the operation is not possible!'
  } else if (a < 0) {
    return Math.abs(a) * b;
  }

  return a + b;
}

// fizzBuzz:
const fizzBuzz = num => {
  if (typeof num !== `number`) {
    return `The argument provided is not a number.`;

  } else if(num <= 0) {
    return `The number is either negative or 0. You shall not pass.`;

  } else if (num % 5 == 0 && num % 3 == 0) {
    return `FizzBuzz`;

  } else if (num % 3 == 0) {
    return `Fizz`;

  } else if (num % 5 == 0) {
    return `Buzz`;

  } else {
    return num;
  }
};

// factorial:

const factorialNum = (num) => {
let result = 1;

  if (typeof num !== `number`) {
    return `It is not a number`;

  } else if(num < 0) {
    return `Can't calculate factorial of a negative number`;

  } else if(num == 0) {
    return `The number is 0 the factorial 1`;

  } else {
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  }
};

module.exports = {operation: operation, fizzBuzz: fizzBuzz, factorialNum: factorialNum};

console.log(operation(2, 7));
console.log(fizzBuzz(5));
console.log(factorialNum(10));

console.log(`whatever`);

/// TDD = Test Driven Developement;

},{}]},{},[1]);
