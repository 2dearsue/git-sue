
function fizzBuzz (currentNum, endNum, smallDivisible, biggerDivisible) {

  var currentNum = 1;
  var endNum = 100;


  while (currentNum <= endNum) {

    if (currentNum % smallDivisible === 0 && currentNum % biggerDivisible === 0) {

      console.log(`FizzBuzz`);

      } else if (currentNum % smallDivisible === 0) {
        console.log(`Fizz`);
      } else if (currentNum % biggerDivisible === 0) {
        console.log('Buzz');
      } else {
        console.log(`${currentNum}`);
      }

    currentNum++;
  }

}

fizzBuzz(1, 100, 3, 5);


/// say Hello:

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello (`Jake`);
sayHello (`Nour`);
sayHello (`Milad`)


/// my stupid try :

function fizzBuzzFunction (a, b, currentNum) {

      if (currentNum){

        if (currentNum % a === 0 && currentNum % b === 0) {
          return `fizzBuzz`;

        } else if (currentNum % a === 0) {
          return `fizz`;

        } else if (currentNum % b === 0) {
          return `buzz`;

        } else {
          return currentNum;
        }
      }

}


  function counter () {

  }

console.log(fizzBuzzFunction(10, 15, true));
console.log(fizzBuzzFunction(10, 15, true));
console.log(fizzBuzzFunction(22, 120, false));
