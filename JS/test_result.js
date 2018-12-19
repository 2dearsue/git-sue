succeded = [67, 82, 91, 96, 54];
failed = [46, 48, 24, 33, 30];

  //// combines two array to one array
let sudentsResults = succeded.concat(failed);

  /// adding all values and dividing them by the amount to get the average
let calculateAverage = function() {
  let sum = 0;

  // alternative of jake look down!!!
  for (i = 0; i < sudentsResults.length; i++) { /// this is the loop
    sum += sudentsResults[i];
  }

  let averageScore = sum/sudentsResults.length;
  /// the averageScore must be outside of the loop
  return averageScore; /// to use averageScore outside i have to return it
}

console.log(`The average of all Scores is ${calculateAverage()}`);
  /// here we call the function because i can't call the variable(averageScore)
  /// outside the function

sudentsResults.push(99);

console.log(`The average of all Scores is ${calculateAverage()}`);

  /// typical and most used method of getting the highest number out of an array:
// let highestScore = Math.max.apply(Math, sudentsResults);
  /// alternative:

let returnHighestScore = function() {

  let highestScore = sudentsResults[0];

  for (let i = 0; i < sudentsResults.length; i++) { /// this is the loop
    if (sudentsResults[i] >= highestScore) {
      highestScore = sudentsResults[i];
    }
  }
  return highestScore;
}

console.log(`The highest score in class is ${returnHighestScore()}.`);
