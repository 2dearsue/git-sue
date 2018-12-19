let foods = [`chocolate`, `apple`, `orange`, `bread`, `meat`];

let fiveFoods = foods.find(function(food) {
  return food.length < 5; // length of the word (amount of letters)
})

console.log(foods.indexOf(`bread`));

// find function only work with arrays and only if you know there is only
// one element which responds to the searched characteristica....
