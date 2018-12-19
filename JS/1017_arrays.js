let names = [`Mauro`, `Meir`, `Eugen`, `Mohamad`, `Mohammed`, `Milad`, `Ali`, `Sue`, `Jens`, `Carmine`, `Daniel`, `Marcelo`];
let scores = [82, 56, 33, 91, 24];

console.log(names.includes(`Daniel`)); // Checks if the value is inside the array

console.log(names.indexOf(`Daniel`)); // Returns the index position of the element in the array

let nameWithThreeCharacters = names.find(function(name) {
  return name.length === 3;
})

let eugen = names.find(function(name) {
  return names === 'Eugen';
})

let namesWithExactlyThreeCharacters = names.filter(function(name) {
  return name.length === 3;
})

let findNamesFromM = function(name) {
  return name[0] === 'M';
}

let namesThatStartWithM = names.filter(findNamesFromM);
let dividedScores = [];

scores.map(function(score) {
  dividedScores.push(score/10);
})

console.log(nameWithThreeCharacters);
console.log(namesWithExactlyThreeCharacters);
console.log(namesThatStartWithM);
