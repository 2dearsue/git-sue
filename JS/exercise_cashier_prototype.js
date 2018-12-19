let shop = function (article, prize, amount, articleStock) {
  this.article = article;
  this.prize = prize;
  this.articleStock = articleStock;
}

let tshirt = new shop (`tshirt`, 10, 100);
let jeans = new shop (`jeans`, 30, 100);
let jacket = new shop (`jacket`, 150, 100);

let allItems = {
  tshirt: tshirt,
  jeans: jeans,
  jacket: jacket,

  printStock: function() {
    for (let article in this) {
        console.log(this[article].articleStock);
    }
  }
}

allItems.printStock();

Object.setPrototypeOf(cashier1, shop);
Object.setPrototypeOf(cashier2, shop);
Object.setPrototypeOf(cashier3, shop);

let cashier1 function (id, employeeName, balance, amountOfArticle, sales) {
  this.id = id;
  this.employeeName = employeeName;
  this.balance = balance;
  this.sales = sales;
  this.amountOfArticle = amountOfArticle;
}

  this.purchase = function() {
      // change amount of item and log message if sth is sold out
      switch (article) {
        case `tshirt`:
          this.purchaseArticle = function(article, articleStock, amount, balance, sales) {
            if(articleStock <= this.articleStock){
              this.articleStock = articleStock - amountOfArticle; // update stock
              this.cash += 10;
              this.sales += 1;
            } else {
              console.log (`${article} sold out`);
            }
          }
          break;

        case `jeans`:
          cash += 30;
          sales += 1;
          break;
        case `jacket`:
          cash += 150;
          sales += 1;
          break;
      }
  }

  this.return = function(){
    // change amount of money if someone gives item back
  }
}
