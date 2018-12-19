let testResults = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];

let basis = 50;
let failedStudents = 0;

for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] < basis) {
    failedStudents ++;
  }
}

  let percentage = failedStudents/testResults.length * 100;
  console.log(`The percentage of failed students is ${percentage}%.`);


console.log(`/////// REUSABLE VERSION /////////////`);


let calculateFailurePercentage = function(testPoints, basis) {
  let failedStudents = 0;

  for (let i = 0; i < testPoints.length; i++) {
    if (testPoints[i] < basis) {
      failedStudents ++;
    }
  }

  let result = failedStudents/testPoints.length * 100;

  return `The percentage of failed students is ${result}% of all students.`;
}

console.log(calculateFailurePercentage(testResults, basis));
