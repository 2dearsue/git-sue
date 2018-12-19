let amount = [5, 5, 2, 6, 1];
let groceries = [`chocolate`, `bananas`, `rice`, `beers`, `deodorant`];

let shoppingList = [];

for (let i = 0; i < groceries.length; i++) {
  let pair = [groceries[i], amount[i]]
  shoppingList.push(pair);
}

  for (let item of shoppingList)
  console.log(`Please buy ${item[1]} x ${item[0]}.`);

  // for (let i = 0; i < groceries.length; i++) {
  //   shoppingList.push([groceries[i], amount[i]]);
  // }
