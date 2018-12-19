let shop = {    /// literal object // public properties
  tshirtPrice: 10,
  jeansPrice: 30,
  jacketPrice: 150,
  tshirtStock: 100,
  jeansStock: 100,
  jacketStock: 100,
  balance: 0,

  createSale: function(numOfShirts, numOfJeans, numOfJackets) {
    let enoughShirts = numOfShirts <= shop.tshirtStock;
    let enoughJeans = numOfJeans <= shop.jeansStock;
    let enoughJackets = numOfShirts <= shop.jacketStock;

    if (!enoughShirts) {
      numOfShirts = shop.tshirtStock;
    }

    if (!enoughJeans) {
      numOfJeans = shop.jeansStock;
    }

    if (!enoughJackets) {
      numOfJackets = shop.jacketStock;
    }

    let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
    
    if (!costOrder) {
      console.log(`Its not possible to make this sale because the requested items are not on stock.`);
      return;
    }

    this.numOfSales += 1; // not sales but customers served!!!!
    this.cashierBalance += costOrder;
    shop.balance += costOrder;
    shop.tshirtStock-=numOfShirts;
    shop.jeansStock-=numOfJeans;
    shop.jacketStock-=numOfJackets;
    console.log(`The cashier ${this.employee} has made a new sale! The balance of this cashier now is ${this.cashierBalance}.`);

  },

  refund: function(numOfShirts, numOfJeans, numOfJackets) {
    let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;// no problem to name the value the same because they are in different functions
    this.numOfSales -= 1;
    this.cashierBalance -= costOrder;
    shop.balance -= costOrder;
    shop.tshirtStock+=numOfShirts;
    shop.jeansStock+=numOfJeans;
    shop.jacketStock+=numOfJackets;
    console.log(`The cashier ${this.employee} has a return! The balance of this cashier now is ${this.cashierBalance}.`);

  }
};

let Cashier = function(id, employee, ) { /// function constructor // "numOfSales, cashierBalance" always begin with 0
  this.id = id;
  this.employee = employee;
  this.numOfSales = 0;
  this.cashierBalance = 0;
}

let firstCashier = new Cashier (1, `Marcelo Ramirez`); // setting object with properties
let secondCashier = new Cashier (2, `Meir Overferst`); // so far no inheritance from nowhere!!!
let thirdCashier = new Cashier (3, `Jens  Soltwedel`);

Object.setPrototypeOf(firstCashier, shop);
Object.setPrototypeOf(secondCashier, shop);
Object.setPrototypeOf(thirdCashier, shop); // now everybody have their own properties and from above (shop)

firstCashier.createSale(2, 2, 0);
secondCashier.createSale(0, 0, 1);
secondCashier.createSale(0, 1, 1);
thirdCashier.createSale(2, 1, 1);
secondCashier.refund(0, 1, 1);
