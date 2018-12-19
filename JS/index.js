
  let factorial = function (num) {

    let result = 1;

    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    return result;
}

/// ----------------------------------------------


let calculateCombinations = function(x, y) {
  let totalCombinations = 0;
  for (let i = y; i <= x; i++) {
  totalCombinations += factorial (x) / ( factorial (y) * factorial (x - y) );
    }

  return totalCombinations;
  }


let moneyPerBet = function (budget, poolNum, startNum) {
  return budget / calculateCombinations (poolNum, startNum);
}

console.log(moneyPerBet(20, 5, 3));
console.log(moneyPerBet(60, 9, 7));


//// -------- IIFE - Immediately Invoked Fuctions Expressions

let helloLanguage = (function(language) {
  console.log(`Hello ${language}`);
})(`Python`);
