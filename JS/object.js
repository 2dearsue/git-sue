let jake = {
  firstName: `Konstantinos`,
  lastName: `Diakogiannis`,
  nickName: `Jake`,
  age: 30,
  profession: `Machine Learning engineer`,
  LivesAtHome: false,
  origin: `Greece`
};

let eugen = {
  firstName: `Jewgeny`,
  lastName: `Kuhn`,
  nickName: `Eugen`,
  age: 32,
  profession: `media designer`,
  LivesAtHome: false,
  origin: `Russia`,
  calculateAgeAfterTheseYear: function(afterYears) {
    console.log(this.age + afterYears);
  },
  changeAge: function(newAge) {
    this.age = newAge;
  }
}

eugen.changeAge(10);
eugen.calculateAgeAfterTheseYear(20);

// console.log(jake.age);
// console.log(`${eugen.age}, ${eugen.profession}`);
// console.log(eugen["age"]);
// console.log(`In 10 years I am going to be ${jake.age + 10} years old.`);


let marina = {
  firstName: `marina`,
  lastName: `nikolau`,
  age: 38,
  yearsOfResidence: 33,
  nationality: `greek`,
  profession: `traveller`,
  salary: 0,

  changeNationality: function() {
    if (this.yearsOfResidence >= 7 ) {
      this.nationality = `german`
    }
  }
}

console.log(marina);
marina.changeNationality();

console.log(marina);


////// second Possibilites

let brisa = {
  firstName: `brisa`,
  lastName: `nogueira`,
  age: 35,
  yearsOfResidence: 12,
  nationality: `brasil`,
  profession: `teacher`,
  salary: 300,
  currentResidence: `german`,
  countryLimit: 10,

  doubleNationality: false,

  changeNationality: function () {
    if (this.yearsOfResidence >= this.countryLimit) {
      if (this.doubleNationality) {
        this.secondNationality = this.currentResidence;
      } else {
        this.nationality = this.currentResidence;
      }
    }
  }


}

brisa.changeNationality(brisa.countryLimit);

console.log(brisa);
