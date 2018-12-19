
// create an array of 10 objects
// with new constructor for creating multiple objects from a template.

let fan = function (firstName, lastName, favouriteTeam, city) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favouriteTeam = favouriteTeam;
  this.city = city;
}

let jake = new fan (`Kostas`, `Diakogiannis`, `Dortmund`, `Hamburg`);
let meir = new fan (`Meir`, `Tavim`, `St Pauli`, `Tel Aviv`);
let mauro = new fan (`Mauro`, `Cervantes`, `Madrid`, `Santiago`);
let peter = new fan (`Peter`, `Bauer`, `FC Köln`, `Köln`);
let malte = new fan (`Malte`, `Schmidt`, `FC Köln`, `Hamburg`);
let jessi = new fan (`Jessi`, `Kebekus`, `St Pauli`, `Rendsburg`);
let marina = new fan (`Marina`, `Nikolau`, `HSV`, `Preveza`);
let helga = new fan (`Helga`, `Schütt`, `FC Nürnberg`, `Herzogenaurach`);
let tom = new fan (`Tom`, `Gärtner`, `FC Nürnberg`, `Nürnberg`);
let sonne = new fan (`Sonne`, `Gärtner`, `St Pauli`, `Fürth`);

let allFans = [
  jake,
  meir,
  mauro,
  peter,
  malte,
  jessi,
  marina,
  helga,
  tom,
  sonne
]

let printCityOf = function (team) {

  for (let i = 0; i < allFans.length; i++) {

    let favTeam = allFans[i].favouriteTeam;

    if (favTeam === team) {
      console.log(allFans[i].city);
    }
  }
}

printCityOf(`St Pauli`);

// Create a global function that accepts a specific team as an argument,
// loops through all the objects of the array and prints the city
// of the person only if he supports the team that is specified in the parameter.
