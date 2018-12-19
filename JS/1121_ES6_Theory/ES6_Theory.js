// ECMA Script 6

let numbers = [2, 4, 5, 8];

let returnSum = () => {
  let sum = 0
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(returnSum());

//////////////////////////////////////////////////////
let num = [2, 4, 5, 8];

let returnSummary = arr => {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0)
}

console.log(returnSum(num));
