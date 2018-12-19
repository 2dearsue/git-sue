// ECMA Script 6

class Company {
  constructor(yearFounded, nameCeo, typeOfCompany, nation) {

  this.yearFounded = yearFounded;
  this.nameCeo = nameCeo;
  this.typeOfCompany = typeOfCompany;
  this.nation = nation;
    }
  };

class CarProducers extends Company {
  constructor(yearFounded, nameCeo, typeOfCompany, nation) {
    super(yearFounded, nameCeo, typeOfCompany, nation);

    // this.salesPerYear = salesPerYear;
    // this.employees = employees;
    }
  };

let alfaRomeo = new CarProducers (1910, `Reid Bigland`, `Alfa Romeo`, `Italien`);
let bmw = new CarProducers (1916, `Harald Krüger`, `BMW`, `Deutschland`);
let mercedes = new CarProducers (1926, `Jürgen Schrempp`, `Mercedes`, `Deutschland`);

console.log(alfaRomeo);


////////////////////////////////////////
class Human {
  constructor() {
    this.species = `Human`;
    this.eyes = 2;
    this.hands = 2;
    this.legs = 2;
  }
}

class SouthAmericans extends Human {
  constructor(dance, drink, language) {
    super();
    this.canDance = dance;
    this.loveFootball = true;
    this.passionate = true;
    this.drink = drink;
    this.language = language;
  }
}

class Brazilians extends SouthAmericans {
  constructor() {
    super([`Samba`, `Forro`], `Caipirinha`, `Portuguese`);
    this.martialArts = `Capoeira`;
  }
}

class Chileans extends SouthAmericans {
  constructor(hobbies, profession) {
    super (`Everything`, `Piscola`, `Castellano`);
    this.hobbies = hobbies;
    this.profession = profession;
  }
}

let Mauro = new Chileans ([`Fishing`, `Programming`, `Data Science`, `Football`], `Biologist`);

console.log(Mauro);


/////////////////////////////// ASync

let name = `Jake`;

setTimeout(() => {
  name = `Daniel`;
}, 5000)

console.log();

////////////
