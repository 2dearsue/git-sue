
  // for (var x = 1; x <= 10; x++) {
  //
  //   for (var y = 1; y <= 10; y++) {
  //     console.log(x*y);
  //   }
  // }


  // Print only prime numbers

  for (var x = 1; x <= 100; x++) {

   var firstCondition = true;

        for (var y = 1; y <= x - 1; y++) {

          if (x % y === 0) {
            var firstCondition = false;
            break;
          }

        }

      if (firstCondition) {
        console.log(`The number ${x} is a prime number.`);
      }

  }

  // jakes solution:

  for (var x = 1; x <= 100; x++) {

    var isPrime = true;

    for (var y = 2; y <= x - 1; y ++) {

      if (x % y === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime === true) {
      console.log(`${x}`);
    }
  }
