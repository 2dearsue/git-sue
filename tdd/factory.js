const calculateNumbers = (a, b) => {
  if (typeof a !=='number' || typeof b !== 'number') {
    return 'The operation is not possible.';
  }

  if (b < 0) {
    // if b is a negative number then return the product of two nums
    return a * b;
  }
  // Return the sum of two numbers
  return a + b;
}

const factorial = num => {
  // first test with the result!!
  // return 120;
  if (typeof num !== `number`){
    return `Clearly not a number`;
  } else if (num < 0) {
    return `impossible to calculate a negative factorial`;
  } else if (num === 0) {
    return 1;
  }

  let result = 1;

  for (var i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
}

const fizzBuzz = num => {
  if (typeof num !== 'number' || num <= 0 || num > 100) {
    return 'You get nothing here!';
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}

module.exports = {calculateNumbers: calculateNumbers, factorial: factorial, fizzBuzz: fizzBuzz};
