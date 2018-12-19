let shop = {    /// literal object // public properties
  tshirtPrice: 10,
  jeansPrice: 30,
  jacketPrice: 150,
  tshirtStock: 100,
  jeansStock: 100,
  jacketStock: 100,
  balance: 0,

  createSale: function(numOfShirts, numOfJeans, numOfJackets) {

    if (tshirtStock < numOfShirts || jeansStock < numOfJeans || jacketStock < numOfJackets) {

      if (numOfShirts < shop.tshirtStock) {
        let numShirts = shop.tshirtStock;
        shop.tshirtStock-=numOfShirts;
        let costOrder = numOfShirts * shop.tshirtPrice
        // this.numOfSales += 1;
        this.cashierBalance += costOrder;
      }

      if (numOfJeans < shop.jeansStock) {
        let numOfJeans = shop.jeansStock;
        shop.jeansStock-=numOfJeans;
        let costOrder = numOfJeans * shop.jeansPrice
        // this.numOfSales += 1;
        this.cashierBalance += costOrder;
      }

      if (numOfJackets < shop.jacketStock) {
        let numOfJackets = shop.jacketStock;
        shop.jacketStock-=numOfJackets;
        let costOrder = numOfJackets * shop.jacketsPrice
        // this.numOfSales += 1;
        this.cashierBalance += costOrder;
    }

  } else {
      let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
      this.numOfSales += 1;
      this.cashierBalance += costOrder;
      shop.balance += costOrder;
      shop.tshirtStock-=numOfShirts;
      shop.jeansStock-=numOfJeans;
      shop.jacketStock-=numOfJackets;
      console.log(`The cashier ${this.employee} has made a new sale! The balance of this cashier now is ${this.cashierBalance}.`);
      }



      this.numOfSales += 1;
      this.cashierBalance += costOrder;
      shop.balance += costOrder;
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

let Cashier = function(id, employee, ) {
  this.id = id;
  this.employee = employee;
  this.numOfSales = 0;
  this.cashierBalance = 0;
}

let firstCashier = new Cashier (1, `Marcelo Ramirez`);
let secondCashier = new Cashier (2, `Meir Overferst`);
let thirdCashier = new Cashier (3, `Jens  Soltwedel`);

Object.setPrototypeOf(firstCashier, shop);
Object.setPrototypeOf(secondCashier, shop);
Object.setPrototypeOf(thirdCashier, shop);

firstCashier.createSale(2, 2, 0);
secondCashier.createSale(0, 0, 1);
secondCashier.createSale(0, 1, 1);
thirdCashier.createSale(2, 1, 1);
secondCashier.refund(0, 1, 1);
