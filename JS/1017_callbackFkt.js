// callback Functions:
// .find(), // find the first and exit
// .filter(),  // gives back results in an array
// .map() - just updates!

    // let counter = 0;
    //
    // let printToTen = setInterval(function() { // anonymous fkt because it is passed as argument
    //   counter++;
    //   console.log(counter);
    //   if (counter === 10) {
    //     clearInterval(printToTen);
    //   }
    // }, 1000) // second argument is milisecond

/// COUNTDOWN

    // let count = 5;
    //
    // let countdown = setInterval(function() {
    //   count--;
    //   console.log(count);
    //   if (count === 0) {
    //     console.log(`Boom!`);
    //     clearInterval(countdown);
    //   }
    // }, 1000)

/// SET TIMEOUT

let msg = `Hello Timeout`;

let showMessage = setTimeout(function () {
  console.log(msg);
}, 3000);
