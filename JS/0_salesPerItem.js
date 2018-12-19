let sales = [
  'smartphone',
  'smartphone',
  'laptop',
  'smartphone',
  'laptop',
  'air cooler',
  'smartphone',
  'smartphone',
  'laptop',
  'smartphone'];

let soldItems = {};

let showQuantity = function(items) {

  // for (let sale of salesCollection) {
  // soldItems.hasOwnProperty(sale) ? soldItems[sale]++ : salesPerProduct[sale] = 1;
  // }

  for (i=0; i < items.length; i++) {
    // if (soldItems.hasOwnProperty(sale)) {
    if (soldItems.hasOwnProperty(sales[i])) {
      soldItems[sales[i]]++;
      // if it would be a variable the sales i then
      // we ould have wrote soldItems.sales[i] !!!!
    } else {
      soldItems[sales[i]] = 1;
      //soldItems[sale] = 1;
      }
    }
    console.log(soldItems);
}

showQuantity(sales);
