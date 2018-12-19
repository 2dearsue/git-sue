
/// Pay the employees today

var shirt = 10;
var jeans = 30;
var jacket = 150;
var cashier = 150;

  for (var customer = 1 ; customer <= 78; customer++) {

    if (customer % 3 === 0) {
      cashier += jacket;

    } else if (customer % 3 === 2) {
      cashier += 2 * jeans;

    } else {
      cashier += 3 * shirt;
    }
  console.log(`The cashier counts ${cashier} $ after ${customer} customer.`);
  }
  console.log(`The cashier counts ${cashier} $ at the end of the day`);
