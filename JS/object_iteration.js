let payPerMonth = {

  july: 1000,
  august: 2000,
  september: 5000,
}

  let calculateAverage = function (obj) {
    let sum = 0;
    let count = 0;
    for (props in obj) {
      sum += obj[props];
      count ++;
    }
    obj.average = sum / count;
  }
calculateAverage(payPerMonth);


//// create an object that holds 3 properties:

// html: 1-100
// css: 1-100
// js: 1-100


let marceloSkills = {
  html: 92,
  css: 88,
  js: 67
}

let calculateWebSkills = function (obj) {
  let sum = 0;
  let counter = 0;
  for ( let skill in obj) {
    sum += obj[skill];
    counter++;
  }
  obj.skillAvg = sum / counter;
}

calculateWebSkills(marceloSkills);
