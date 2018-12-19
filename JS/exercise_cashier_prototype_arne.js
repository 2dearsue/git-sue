let cashier = function (employeeName, id, cash, articleType, articlePrize, articleStock, sales) { // cashier = kasse
  this.employeeName = employeeName;
  this.id = id;
  this.cash = cash;
  this.articleType = articleType;
  this.articlePrize = articlePrize;
  this.articleStock = articleStock;
  this.sales = sales;

  this.purchase = function(articleType) {
    // add money to cash and which item + increase sales for each cashier
    switch (articleType) {
      case `tshirt`:
        this.purchaseArticle = function(articleType, articleStock) {
          if(articleStock <= this.articleStock){
            this.articleStock -= articleStock;
          } else {
            console.log (`${articleType} sold out`);
          }
        }
        articleStock += 1;
        cash += 10;
        sales += 1;
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

  this.refund = function(articleType, articleStock) {
    // subtract money from cash and update stock and sales
    switch (articleType) {
      case `tshirt`:
        articleStock+=articleStock
        cash -= 10;
        sales -= 1;

      case `jeans`:
        cash -= 30;
        sales -= 1;
        break;

      case `jacket`:
        cash -= 150;
        sales -= 1;
        break;
      }
  }

}

let cashier1 = new cashier (`pete`, 1, 100, `tshirt`, 10, 100, 0);
let cashier2 = new cashier (`charlie`, 2, 200, `jeans`, 30, 100, 0);
let cashier3 = new cashier (`ian`, 3, 300, `jacket`, 150, 100, 0);

cashier1.purchase(`tshirt`, 100);
console.log(cashier1.articleStock);
