
function assignGrade (points, name) {

  if (points < 1 || points > 100 ){
    console.log(`The score value must be be between 1 and 100`);
    return;
  }

  var message;

    if (points < 50) {

      message = `Not Pass!`;

    } else if (points <= 60){
      message = `grade D`;

    } else if (points <= 80){
      message = `grade C`;

    } else if (points <= 90){
      message = `grade B`;

    // } else if (points <= 98){
    //   console.log(`Dear ${name}, you have reached a grade A`);
    //
    // } else if (points === 99){
    //   console.log(`Dear ${name}, you have reached a Almost perfect!`);

    // } else {
    //   console.log(`Dear ${name}, you can take a day-off tomorrow!`);
    // }

  } else {
    switch (points) {
      case 99:
        message = `Almost Perfect!`;
        break;

      case 100:
      message = `Take a day-off`;

      default:
      message: `A`;

    }
  }

  console.log(`Dear ${name} the score of your test is ${points}. That is a ${message}.`);
}

assignGrade(58, `kostas`);
assignGrade(67, `sara`);
assignGrade(87, `bob`);
assignGrade(43, `peter`);
assignGrade(99, `bob`);
assignGrade(100, `till`);


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
