let males = {
  gender: 'male',
  hobby: 'Reading',

  convertToLocalCurrency : function() {
    this.bankAccountInLocalCurrency = this.bankAccountInUsDollar * this.convertToLocal;
  }
}

let Person = function (firstName, lastName, bankAccountInUsDollar, countryOfResidence, convertToLocal) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.bankAccountInUsDollar = bankAccountInUsDollar;
  this.countryOfResidence = countryOfResidence;
  this.convertToLocal = convertToLocal;
}

let jake = new Person (`Kostas`, `Diakogiannis`, 1000, `Greece`, 0.86);
let meuron = new Person (`Meuron`, `Gday`, 2000, `Australia`, 1.38);
let steffan = new Person (`Steffan`, `Effenberg`, 5000, `Switzerland`, 0.96);

Object.setPrototypeOf(jake, males);
Object.setPrototypeOf(meuron, males);
Object.setPrototypeOf(steffan, males);

jake.convertToLocalCurrency();

console.log(jake);
