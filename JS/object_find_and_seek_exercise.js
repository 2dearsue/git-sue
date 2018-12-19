
let Participant = function (firstName, lastName, age, nationality, hoursOfProgramming, favouriteLanguage) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.nationality = nationality;
  this.hoursOfProgramming = hoursOfProgramming;
  this.favouriteLanguage = favouriteLanguage;

  this.checkHobby = function() {
      if (this.hasOwnProperty(`hobby`)) {
        console.log(`${this.firstName} has a life.`);
      } else {
        console.log(`${this.firstName} is doomed like his/her teacher or worse.`);
      }
  }

}

let jake = new Participant (`Kostas`, `Diakogiannis`, 30, `Greece`, 20000, `Python`);
let meir = new Participant (`Meir`, `Tavim`, 32, `Israel`, 700, `Html`, );
let mauro = new Participant (`Mauro`, `Cervantes`, 40, `Chile`, 800, `Python`);
let jens = new Participant (`Jens`, `Lübeck`, 45, `German`, 480, `CSS`);
let mohammed = new Participant (`Mohammed`, `Ali`, 27, `Syria`, 500, `CSS`, );

jake.hobby = `Loving Switzerland`;
mauro.hobby = `Fishing`;
jens.hobby = `Sailing`;


jake.checkHobby();
mauro.checkHobby();
