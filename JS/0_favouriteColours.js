// let favourites = [
//   [`colours`, `aquarius`, `lightgreen`, `red`, `brown`],
//   [`food`, `pasta`, `mozzarella`, `tomatoes`]
// ];
//
// let things;
// let joinedFavourites = [];
//
// let best = function(theme, i) {
//   things = favourites[i][0];
//   // favourites = favourites.slice(1);
//   joinedFavourites = favourites[i].join(`, `);
//   console.log(joinedFavourites);
//
//   console.log(`My favorite ${things} among others are: ${joinedFavourites}.`);
// }
//
// best(favourites, 0);
// best(favourites, 1);


// WIE KRIEGE ICH DEN ERSTEN INDEX AUS DEM "JOIN" PART???


let colours = [`colours`, `aquarius`, `lightgreen`, `red`, `brown`];
let food =  [`food`, `pasta`, `mozzarella`, `tomatoes`];
let movies =  [`movies`, `marx brothers`, `usual suspects`, `reservoir dogs`];

let favs = function(array) {
  let name = array[0];
  let i = 0;
  let newArray = array.slice(1);
  let joinedFavourites = newArray.join(`, `);

  console.log(`My favorite ${name} among others are: ${joinedFavourites}.`);
}

favs(colours);
favs(food);
favs(movies);


//// jakes solution:

let favColours = [`green`, `blue`, `pink`];

console.log(`some of my favourite colours : ${fav.Colors.join(`, `)}`);
