
/// Pay the employees today

var cashier = 100000;
var orderNum = 1;
var nextPayment = 7500;
var employees = 72;

  for (var orderNum = 1 ; cashier - nextPayment >= 0; orderNum++) {

    if (orderNum === 1) { //machine learning
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

    console.log(`So far ${orderNum} employees have been paid so far and there is ${cashier} $ left.`);
  }
