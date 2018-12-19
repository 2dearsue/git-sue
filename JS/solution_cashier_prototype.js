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

    if (enoughShirts && enoughJeans && enoughJackets) {  // "this" keyword means whoever calls the function not where the function is defined
      let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
      this.numOfSales += 1; // not sales but customers served!!!!
      this.cashierBalance += costOrder;
      shop.balance += costOrder;
      shop.tshirtStock-=numOfShirts;
      shop.jeansStock-=numOfJeans;
      shop.jacketStock-=numOfJackets;
      console.log(`The cashier ${this.employee} has made a new sale! The balance of this cashier now is ${this.cashierBalance}.`);

    } else {
      console.log(`I am sorry the order was not possible. One or more articles are out of stock.`);
    }
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


// let tshirt = new shop (`tshirt`, 10, 100);
// let jeans = new shop (`jeans`, 30, 100);
// let jacket = new shop (`jacket`, 150, 100);
//
// let allItems = {
//   tshirt: tshirt,
//   jeans: jeans,
//   jacket: jacket,
//
//   printStock: function() {
//     for (let article in this) {
//         console.log(this[article].articleStock);
//     }
//   }
// }
//
// allItems.printStock();
