export const addition = (a, b) => {
  if (typeof a !== `number` || typeof b !== `number`) {
    return 'Sorry the operation is not possible!'
  } else if (a < 0) {
    return Math.abs(a) * b;
  }

  return a + b;
}



export const fizzBuzz = num => {
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
