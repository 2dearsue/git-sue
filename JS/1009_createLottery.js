let totalWinnings = 0;
let prize = 100;

let createLottery = function() {

  let userWinning = 0;
  let luckyNumber = Math.round(Math.random() * 100);
  let userNumber = Math.round(Math.random() * 100);

  console.log(luckyNumber);
  console.log(userNumber);

  if (luckyNumber === userNumber) {
    console.log(`You have won ${userWinning} bugs!! Yeah!`);
      totalWinnings = totalWinnings+userWinning;
    return;
  }

  let absDiff = Math.abs(luckyNumber-userNumber);
  console.log(absDiff);

  if (absDiff < 10) {
    userWinning = prize - 10 * absDiff;
    console.log(`You have won ${userWinning} bugs. Badaboom!`);
  } else {
    console.log(`You have won nothing! Sorry.`);
  }

  totalWinnings = totalWinnings+userWinning;
}

createLottery();

  // for (i = 1; i < 100; i++) {
  //   createLottery();
  // }

console.log(`The total winnings are ${totalWinnings}! Wow.`);


/////////////////// jake:

let totalWin = 0;

let createLot = function() {
  let win;
  let luckyNu = Math.ceil(Math.random() * 100);
  let userNu = Math.ceil(Math.random() * 100);
  let differencBetweenNu = Math.abs(luckyNu-userNu);

  if (luckyNu === userNu) {
    win = 100;
    console.log(`yaaaayyyyy !!!! You have won ${prize}`);
  } else if (differencBetweenNu < 10) {
    win = 100 - (10 * differencBetweenNu);
  } else {
    win = 0;
  }

  totalWin += win;
  console.log(`The lucky number is ${luckyNu}, the users numbers is ${userNu}. The difference is ${differencBetweenNu}`);
  // return [luckyNu, userNu, differencBetweenNu, win];
}

let resultOfLottery = createLot();

console.log(resultOfLottery);
