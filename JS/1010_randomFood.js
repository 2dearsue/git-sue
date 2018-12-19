let favFoods = [`tomatoes`, `pasta`, `cheese`, `maracuja`, `potatoes`, `bread`, `pad thai`];
let daysOfWeek = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`]

let randomFood = function (pool) {

  for (i = 0; i < daysOfWeek.length; i++) {

  let randomNo = Math.floor(Math.random() * pool.length);
  console.log(`For ${daysOfWeek[i]} you will have ${favFoods[randomNo]} for lunch. Yummy!`);

  favFoods.splice(randomNo, 1);
  }
}

randomFood(favFoods);


/// jakes solution:

// let pickFood = function(foods) {
//
//   for (let day of days) {
//     let randomNumber = Math.floor(Math.random() * foods.length);
//     let favFoodOfTheDay = foods[randomNumber];
//     console.log(`On ${day} i am going to hav ${favFoodOfTheDay}`);
//     foods.splice(randomNumber, 1);
//   }
// }
//
// pickFood(favFoods);
