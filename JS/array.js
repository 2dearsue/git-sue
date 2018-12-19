let testResults = [91, 65, 72, 44, 82, 31];

let favoriteAnimals = [`Tiger`, `Panda`, `Squirrel`, `Lynx`, `Wolf`];

console.log(testResults.length);

console.log(favoriteAnimals.length);

console.log(typeof favoriteAnimals);


/// Most interesting person - task

let eugen = [`reading`, `beach-volleyball`, `drawing`];
let jake = [`cinema`, `tennis`, `ancient history`, `coffee-tasting`];

let comparePersons = function(firstPerson, secondPerson) {
  if (firstPerson.length === secondPerson.length) {
    console.log(`well...both are interesting`);
  } else {
    firstPerson.length > secondPerson.length ? console.log(`The first person is more interessting`) : console.log(`The second person is more interesting though.`);;
  }
}

comparePersons(eugen, jake);

console.log(jake[0]);
console.log(jake[3]);


// Temperatures at 6, 10, 14, 18, 22, 2 o clock

let hamburgTemp = [-2, 2, 8, 6, 1, -1];

let firstTempOfTheDay = hamburgTemp [0];
var lastTempOfTheDay = hamburgTemp.length -1;



/////// Compare skills / polyglots

let schoolTeachers = {
  math: `mauro`,
  science: `meir`,
  history: `jake`,
  geography: `bob`,
};

let daniel = [`Daniel Cibolla`, `Javascript`, `PHP`];
let sue = [`Susanne Schütt`, `Javascript`, `Ruby`, `Python`];

let compareCandidateSkills = function(first, second) {
  let hiredPerson;

  first.length > second.length ? hiredPerson = first[0] : hiredPerson = second[0];

  schoolTeachers.programming = hiredPerson;
}

compareCandidateSkills(daniel, sue);

console.log(schoolTeachers);
