/////////// the push method:

let testResults = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];

testResults.push(66);
testResults.push(92);

let basis = 50;

let calculateFailurePercentage = function(testPoints, basis) {
  let failedCollection = [];

  for (let i = 0; i < testPoints.length; i++) {
    if (testPoints[i] < basis) {
      failedCollection.push(testPoints[i]);
    }
  }

  let result = failedCollection.length/testPoints.length * 100;
  return `The percentage of failed students is ${result}% of all students.`;
}

console.log(calculateFailurePercentage(testResults, basis));

/////////////// why push? // write an array with numbers from 1 to 1000!

let emptyArray = [];

for (let i = 1; i < 1000; i ++) {
  emptyArray.push(i);
}

console.log(emptyArray);


////////// the concat method:

let favoriteAnimals = [`Pandas`, `Tigers`, `Elephants`];
let favoriteFoods = [`Gyros`, `Pastitsio`, `Souvlaki`];
let favoriteCities = [`Rio De Janeiro`, `Lisboa`, `Barcelona`];

let favoriteThings = favoriteAnimals.concat(favoriteFoods, favoriteCities);

if (favoriteCities.includes(`Lisboa`)) {
  console.log(`This woman has taste.`);
} else {
  console.log(`Raise your standards, dood!`);
}
