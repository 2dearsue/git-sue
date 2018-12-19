let latin = {
  language: `spanish`,
  city: `Hamburg`,
}

let LatinoGuys = function (firstName, lastName, age) { /// put a uppercase in the name "LatinoGuys" for recognizing the function as an object 
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isStudent = true;
}

let jake = new latinoGuys(`Kostas`, `Diakogiannis`, 30); //new instance of an object and uses the skin "LatinoGuys"
let daniel = new latinoGuys (`Daniel`, `Cibolla`, 35);
let mauro = new latinoGuys (`Mauro`, `Cifuentes`, 46);

Object.setPrototypeOf(daniel, latin); // inherit from latin BUT constructor (arguments that belongs to the objects have higher priority than inherit)
Object.setPrototypeOf(mauro, latin);


jake.favouriteCity = `Zurich`;

jake.isStudent = false;

jake.isStudent ? console.log(`Welcome back to school!`) :  console.log(`What are you doing here?`);

console.log(jake);
console.log(daniel);
console.log(mauro);

// let mauro = {
//   firstName: `Mauro`,
//   lastName: `Cifuentes Navarro`,
//   nationality: `Chilean`,
//   age: 46,
// }
//
// let marcelo = {
//   firstName: `Marcelo`,
//   lastName: `Ramirez`,
//   nationality: `Paraguayan`,
//   age: 37,
// }
//
// let daniel = {
//   firstName: `Daniel`,
//   lastName: `Cipolla`,
//   nationality: `Ecuadorian`,
//   city: `Zurich`,
//   age: 35,
// }
