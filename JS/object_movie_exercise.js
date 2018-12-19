
let Movie = function (title, directorsName, yearReleased, starringActor, haveSeen) {
  this.title = title;
  this.directorsName = directorsName;
  this.yearReleased = yearReleased;
  this.starringActor = starringActor;
  this.haveSeen = haveSeen;
}


let drive = new Movie (`Drive`, `Nicolas Winding Refn`, 2011, `Ryan Gosling`, true);
let nightOnEarth = new Movie (`Night On Earth`, `Jim Jarmush`, 1991, `Winona Ryder`, true);
let theRoyalTenenbaums = new Movie (`The Royal Tenenbaums`, `Wes Anderson`, 2001, `Gene Hackman`, true);
let hailCesar = new Movie (`Hail, Caesar!`, `Coen Brothers`, 2016, `Josh Brolin`, false);
let blackMass = new Movie (`Black Mass`, `Scott Cooper`, 2015, `Johnny Depp`, false);


let allMovies = {
  drive: drive,
  nightOnEarth: nightOnEarth,
  theRoyalTenenbaums: theRoyalTenenbaums,
  hailCesar: hailCesar,
  blackMass: blackMass,

  printSeenMovies: function() {
    for (let movie in this) {
      if (this[movie].haveSeen) {
        console.log(this[movie].title);
      }
    }
  }

  // for printing all:
  // for (let movie in this) {
  //    for (let info in this [movie]) {
  //      console.log(this[movie][info]);
  //        }
  //    }

}

allMovies.printSeenMovies();


// solution of jake which also works (outside of the object)

// for (let movie in allMovies) {
//   if (allMovies[movie].haveSeen) {
//     console.log(allMovies[movie].title);
//   }
// }
