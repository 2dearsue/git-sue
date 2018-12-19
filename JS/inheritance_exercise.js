let latin = {
  language: `spanish`,
  city: `Hamburg`,
}

let mauro = {
  firstName: `Mauro`,
  lastName: `Cifuentes Navarro`,
  nationality: `Chilean`,
}

let marcelo = {
  firstName: `Marcelo`,
  lastName: `Ramirez`,
  nationality: `Paraguayan`,
}

let daniel = {
  firstName: `Daniel`,
  lastName: `Cipolla`,
  nationality: `Ecuadorian`,
  city: `Zurich`,
}

const jake = {
  firstName: `Konstantinos`,
  lastName: `Diakogiannis`,
}

Object.setPrototypeOf(mauro, latin);
Object.setPrototypeOf(daniel, latin);
Object.setPrototypeOf(marcelo, latin);

mauro.city = `Santiago`;
marcelo.language = `english`;

delete marcelo.language;

console.log(mauro.city);

jake.favouriteCity = `Athens`;

console.log(jake.favouriteCity);
