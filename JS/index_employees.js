/// Fizzbuzz Problems

var currentNum = 1;
var endNum = 100;


while (currentNum <= endNum) {

  if (currentNum % 3 === 0 && currentNum % 5 === 0) {

    console.log(`FizzBuzz`);

    } else if (currentNum % 3 === 0) {
      console.log(`Fizz`);
    } else if (currentNum % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(`${currentNum}`);
    }

  currentNum++;
}

/// Create a script that checks all the numbers from 1 to 100 and
/// prints to the console if the number is odd or even.

var num = 1;

while (num <= 100) {
  var message = `The ${num} you have put is `;
  num % 2 === 0 ? message += `even` : message += `odd`;
  console.log(message);
  num++;
}

///

x = 1;
y = 3;

while ( x <=10 ) {
  z = y * x;
  console.log(z);
  x++;
}

 console.log();

/// Pay the employees today

var cashier = 100000;
var totalWorker = 72;
var orderNum = 1;
var nextPayment = 7500;


  while (cashier >= 0 + nextPayment) {

    if (orderNum===1) { //machine learning
      cashier -= 10000;
      nextPayment= 7500;

    } else if (orderNum === 2) { // data scientist
      cashier -= 7500;
      nextPayment= 3000;

    } else if (orderNum <= 4) { // full stack
      cashier -= 3000;
      orderNum === 4 ? nextPayment = 2000 : nextPayment = 3000;
      // nextPayment= 2000;

    } else if (orderNum <= 8) { // backend
      cashier -= 2000;
      orderNum === 4 ? nextPayment = 1500 : nextPayment = 2000;

    } else if (orderNum <= 12) { // frontend
      cashier -= 1500;
      orderNum === 12 ? nextPayment = 1000 : nextPayment = 1500;

    } else if (orderNum <= 62) { // normal worker
      cashier -= 1000;
      orderNum === 62 ? nextPayment = 5000 : nextPayment = 1000;

    } else if (orderNum <= 67) { // op dev
      cashier -= 5000;
      orderNum === 67 ? nextPayment = 4000 : nextPayment = 5000;

    } else { // project managers
      cashier -= 4000;
      orderNum === 72 ? nextPayment = 0 : nextPayment = 4000;
    }

    orderNum++;

    console.log(`So far ${orderNum} employees have been paid so far and there is ${cashier} $ left.`);
  }
