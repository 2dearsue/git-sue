
let convertToLocalCurrency = function(person) {
  person.bankAccountInLocalCurrency = person.bankAccountInUsDollar * person.convertToLocal;
}

let jake = {

  firstName: `Konstantinos`,
  lastName: `Diakogiannis`,
  bankAccountInUsDollar: 1000,
  countryOfResidence: `Greece`,
  convertToLocal: 0.86,

}

let gidday = {

  firstName: `Meuron`,
  lastName: `Gday`,
  bankAccountInUsDollar: 2000,
  countryOfResidence: `Australia`,
  convertToLocal: 1.39,

}

let steffan = {

  firstName: `Steffan`,
  lastName: `Effenberg`,
  bankAccountInUsDollar: 5000,
  countryOfResidence: `Switzerland`,
  convertToLocal: 0.96,

}

convertToLocalCurrency(jake);
convertToLocalCurrency(gidday);
convertToLocalCurrency(steffan);

console.log(jake);
console.log(gidday);
console.log(steffan);
