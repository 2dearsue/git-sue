var firstNum = 20;
var secondNum= 40;

var isSunny = false;

console.log(!isSunny);


var numBalls = 1;
numBalls ++;

var price1 = `1.00`;
var price2 = `1.80`;
var price3 = `2.50`;
var price4 = `3.00`;
var price5 = `3.30`;

switch (numBalls) {
  case 1:
    console.log(`You have ordered ${numBalls}. You have to pay ${price1} $.`);
    break;

  case 2:
    console.log(`You have ordered ${numBalls}. You have to pay ${price2} $.`);
    break;

  case 3:
    console.log(`You have ordered ${numBalls}. You have to pay ${price3} $.`);
    break;

  case 4:
    console.log(`You have ordered ${numBalls}. You have to pay ${price4} $.`);
    break;

  case 5:
    console.log(`You have ordered ${numBalls}. You have to pay ${price5} $.`);
    break;


  default:
    console.log(`You have ordered 2 Balls. You have to pay 1.80 $.`);
}


var numOfBalls = 4;

var price;

switch (numOfBalls) {
  case 1:
    price = 1;
    break;

  case 2:
    price = 1.80;
    break;

  case 3:
    price = 2.50;
    break;

  case 4:
    price = 3;
    break;

  case 5:
    price = 3.30;
    break;

  default:
    price = 1.80;
}

console.log(`You have ordered ${numOfBalls} ice balls. You have to pay ${price} $!`);
