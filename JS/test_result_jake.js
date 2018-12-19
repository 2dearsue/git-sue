let succeeded = [67, 82, 91, 96, 54];
let failed = [46, 48, 24, 33, 30];

let studentsResults = succeeded.concat(failed);

let calculateAvg = function(array) {
  let sum = 0;
  for (let result of array) {
    sum += result;
  }

  let average = sum / array.length;
  return average;
}

let averageForTenStudents = calculateAvg(studentsResults);

console.log(averageForTenStudents);

studentsResults.push(97);

let averageForElevenStudents = calculateAvg(studentsResults);

console.log(averageForElevenStudents);

let calculateMargin = function(firstAverage, secondAverage) {
  let msg = '';

  if (firstAverage > secondAverage) {
    msg = 'down';
  } else {
    msg = 'up';
  }

  console.log(`The average went ${msg} by ${firstAverage - secondAverage} points.`);
}

calculateMargin(averageForTenStudents, averageForElevenStudents);

let calculateMax = function(array) {

  let biggest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= biggest) {
      biggest = array[i];
    }
  }
  return biggest;
}


let maxOfStudents = calculateMax(studentsResults);
console.log(`The best result is ${maxOfStudents}`);
