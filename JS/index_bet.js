
  let factorial = function (num) {

    let result = 1;

    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    return result;
}

console.log(factorial (5));

/// ----------------------------------------------


let calculateCombinations = function(x, y) {
  let totalCombinations = 0;
  for (let i = y; i <= x; i++) {
  totalCombinations += factorial (x) / ( factorial (y) * factorial (x - y) );
    }
    
  return totalCombinations;
  }

console.log(calculateCombinations(10, 6));

// function factorial1(num) {
//
//   let i;
//   let num1;
//   let fact = 1;
//
//   for (i = 1; i <= num1; i++) {
//     fact = fact*i
//   }
//
// }
//
// console.log(factorial1(5));
