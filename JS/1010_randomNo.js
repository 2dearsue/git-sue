
let randomNumber = function (firstNumber, secondNumber) {

  let range = Math.abs(secondNumber-firstNumber);
  let randomNo= Math.round((Math.random() * range) + firstNumber);

  console.log(`Our random number is ${randomNo}`);
}

randomNumber(14, 33);


/// 10 - 20 => (Math.random() * range ) + starting point;
/// 10 - 20 => (Math.random() * 10 ) + 10;
