// Create 10 objects that contain only two properties each.
// The name of a supermarket item, and it's price in $.
//
// Store 10 of them in an array.
//
// Create a budget variable that represents the money you have in your wallet.
//
// Iterate through the array, and print the item property for every object
// that is affordable, for every object that your budget is bigger than
// item's cost.
//
// Try to place the budget also as an argument in order to make this the
// most re-usable way you can.

let bananas = {item: 'Banana', cost: 2};
let onions = {item: 'Onion',  cost: 1};
let bread = {item: 'Bread',  cost: 4};
let tomatoes = {item: 'Tomatoes',  cost: 3};
let apples = {item: 'Apples',  cost: 1};
let cheese = {item: 'Cheese',  cost: 7};
let kiwi = {item: 'Kiwi',  cost: 1};
let cucumber = {item: 'Cucumber',  cost: 2};
let garlic = {item: 'Garlic',  cost: 0.5};
let ham = {item: 'Ham',  cost: 6};

let products = [
  bananas,
  onions,
  bread,
  tomatoes,
  apples,
  cheese,
  kiwi,
  cucumber,
  garlic,
  ham
];

let checkShopping = function (budget) {

  let shoppedProducts = [];

  for (i=0; i < products.length; i++) {
    let totalCost = 0;
    totalCost += products[i].cost;

    if (budget >= totalCost) {

      budget=budget-totalCost;

      let boughtItem = products[i].item;
      shoppedProducts.push(boughtItem);
    }
  }
  console.log(`I could shop ${shoppedProducts} from my money.`);
  console.log(`My rest money is a total of ${budget} Euros.`);
}

checkShopping(16);
