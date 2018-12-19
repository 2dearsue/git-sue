// An error has occurred and you have found yourself with data of
// 10 students result tests that are of string data type.

// Find the biggest and the smallest result in this list and print the
// margin between them by printing the absolute value of the difference between them.

let results = [
  '63',
  '55.5',
  '72',
  '77',
  '35.5',
  '81',
  '95',
  '29.5',
  '44.5',
  '80'];


  for (let i = 0; i < results.length; i++) {

       results[i] = Math.ceil(parseFloat(results[i]));
         }

console.log(results);

let biggestNumber = Math.max(...results);
let smallestNumber = Math.min(...results);

console.log(biggestNumber);
console.log(smallestNumber);

console.log(Math.abs(smallestNumber-biggestNumber));

// the only possibility to update the array is through index...
// and if i would her use a "for (let value of...)" loop i would need
// an extra array!!!
