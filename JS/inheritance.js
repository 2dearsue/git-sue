let latinMenInHamburg = {

  nativeTongue: `spanish`,
  city: `Hamburg`,
  gender: `male`,

  showCity: function() {
    console.log(`${this.firstName} ${this.lastName} lives in ${this.city} `);
  }
}

let mauro = Object.create(latinMenInHamburg);
let daniel = Object.create(latinMenInHamburg);
let marcelo = Object.create(latinMenInHamburg);


mauro = {
  inheritedProperties: Object.create(latinMenInHamburg),
  firstName: `Mauro`,
  lastName: `Cifuentes Navarro`,
  nationality: `Chilean`,
}

marcelo = {
  inheritedProperties: Object.create(latinMenInHamburg),
  firstName: `Marcelo`,
  lastName: `Ramirez`,
  nationality: `Paraguayan`,
}

daniel = {
  inheritedProperties: Object.create(latinMenInHamburg),
  firstName: `Daniel`,
  lastName: `Cipolla`,
  nationality: `Ecuadorian`,
}
