let jake = {

  firstName: `Konstantinos`,
  lastName: `Diakogiannis`,
  bankAccountInUsDollar: 1000,
  countryOfResidence: `Greece`,
  convertToLocal: 0.86,

  convertToLocalCurrency: function(exchangeRate) {
    this.bankAccountInLocalCurrency = this.bankAccountInUsDollar * exchangeRate;
  }
}


let gidday = {

  firstName: `Meuron`,
  lastName: `Gday`,
  bankAccountInUsDollar: 2000,
  countryOfResidence: `Australia`,
  convertToLocal: 1.39,

  convertToLocalCurrency: function(exchangeRate) {
    this.bankAccountInLocalCurrency = this.bankAccountInUsDollar * exchangeRate;
  }
}


let steffan = {

  firstName: `Steffan`,
  lastName: `Effenberg`,
  bankAccountInUsDollar: 5000,
  countryOfResidence: `Switzerland`,
  convertToLocal: 0.96,

  convertToLocalCurrency: function(exchangeRate) {
    this.bankAccountInLocalCurrency = this.bankAccountInUsDollar * exchangeRate;
  }
}

jake.convertToLocalCurrency(jake.convertToLocal);
gidday.convertToLocalCurrency(gidday.convertToLocal);
steffan.convertToLocalCurrency(steffan.convertToLocal);

console.log(jake);
console.log(gidday);
console.log(steffan);
