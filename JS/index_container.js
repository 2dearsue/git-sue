
var maxWeight = 10000;
var numOfContainers = 500;
var weightIncluded = 0;
var id = 1;
var weightNextContainer = 10;

while ( maxWeight >= weightIncluded + weightNextContainer) {

  if (id <= 100) {
    weightIncluded += 10;
    weightNextContainer = 10;

    } else if (id <= 200) {
      weightIncluded += 20;
      weightNextContainer = 20;

    } else if (id <= 250) {
      weightIncluded += 50;
      weightNextContainer = 50;

    } else if (id <= 300) {
      weightIncluded += 100;
      weightNextContainer = 100;

    } else if (id <= 400) {
      weightIncluded += 200;
      weightNextContainer = 200;

    } else {
      weightIncluded += 500
    }

  id++;
  // id += 1;
}

  console.log(`The container with id ${id - 1} is in the ship. The total weight is currently ${weightIncluded}.`);
/////// odd and even numbers

var currentNumber = 1;
var endNumber = 10;

while (currentNumber < endNumber) {

  if (currentNumber % 2 !== =) {
    console.log(`The ${currentNumber} is an even number`);
  } else {
    console.log(`The ${currentNumber} is an odd number`);
  }

currentNumber ++;
}

///
//
// var numCon = 1;
// var totalWeight = 0;
// var maxWeight = 10000;
// numCon ++;
//
//  while (totalWeight <= maxWeight) {
//
//    if (numCon <= 100) {
//       var weight = 10;
//
//     } else if (numCon>100 && numCon<=200) {
//       var weight = 20;
//
//     } else if (numCon>200 && numCon<=300)
//       var weight = 30
//  }
