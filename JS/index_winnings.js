var jackpot = 1000;
var standardWinnings = 10;
var randomNumber = 93;

if (randomNumber < 500) {

    standardWinnings = 0;

  } else if (randomNumber < 700  || randomNumber >= 800 && randomNumber < 900) {

    standardWinnings = standardWinnings * 2;

    } else if (randomNumber < 800) {

      standardWinnings = standardWinnings * 10;

      switch (randomNumber) {

      case 776:
      standardWinnings = jackpot / 2;
          console.log(`Total Winnings: ${standardWinnings}`);
      break;

      case 777:
      standardWinnings = jackpot;
          console.log(`Total Winnings: ${standardWinnings}`);
      break;

      case 778:
      standardWinnings = standardWinnings * 5;
          console.log(`Total Winnings: ${standardWinnings}`);
      break;

      default:
        standardWinnings = jackpot / 5;
      }

  }




else
