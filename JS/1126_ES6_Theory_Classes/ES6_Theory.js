///////////////// Classes

class AllSpecies {
  constructor (species, numOfEyes, numOfLegs, haveTail) {
    this.species = species;
    this.numOfEyes = numOfEyes;
    this.numOfLegs = numOfLegs;
    this.haveTail = haveTail;
  }
}

class Tiger {
  constructor(colorFur, eyeColor, region, eatMeat) {

  this.colorFur = colorFur;
  this.eyeColor = eyeColor;
  this.region = region;
  this.eatMeat = eatMeat;
  this.species = `Tiger`;
    }
};


class BengalTiger extends Tiger {
  constructor(name, age, height, length) {
    super(`orange-black`, `brown`, `India`, true);
    // super only with "extends" / = values of the extended class!!!
    this.name = name;
    this.age = age;
    this.height = height;
    this.length = length;
    this.gender = gender;
    }
};

class SiberianTiger extends Tiger {
  constructor(name, age, height, length, gender) {
    super(`white-black`, `blue`, `Siberia`, false);
    // super only with "extends" / = values of the extended class!!!
    this.name = name;
    this.age = age;
    this.height = height;
    this.length = length;
    this.gender = gender;
    }
};

let richardParker = new BengalTiger (`Richard Parker`, 103, 42, 150, `male`);
let jackSparrow = new BengalTiger (`Jack Sparrow`, 74, 30, 130, `male`);
let cindySnow = new SiberianTiger (`Cindy Snow`, 27, 88, 204, `female`);

console.table(richardParker);
console.table(jackSparrow);
console.table(cindySnow);
