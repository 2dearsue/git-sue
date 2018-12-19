
////// convert currency

let swiss = {
  firstName: `alois`,
  lastName: `schweitzer`,
  bankAccountDollar: 100000,
  convertToSwissFranc: 0.96,

  changeBankAccount: function () {
    this.bankAccount = this.bankAccountDollar * this.convertToSwissFranc;
  }
}

console.log(swiss);
swiss.changeBankAccount();


let australian = {
  firstName: `jake`,
  lastName: `baldwin`,
  bankAccountDollar: 50000,
  convertToAusDollar: 1.39,
  countryOfResidence: `australia`,

  changeBankAccount: function () {
    this.bankAccount = this.bankAccountDollar * this.convertToAusDollar;
  }
}

console.log(australian);
australian.changeBankAccount();


let greek = {
  firstName: `kostas`,
  lastName: `diakogiannis`,
  bankAccountDollar: 100000,
  convertToEuro: 0.86,
  countryOfResidence: `greece`,

  changeBankAccount: function () {
    this.bankAccount = this.bankAccountDollar * this.convertToEuro;
  }
}

console.log(greek);
greek.changeBankAccount();
