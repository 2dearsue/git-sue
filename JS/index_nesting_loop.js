var num;

  function factorial (x) {

    if (x < 1 || x > 10) {
      console.log(`Please put another number!`);
      return;
      }

    for (let num = 1; num <= 10; num++) {
      var result = x * num;
      console.log(result);
    }
  }


  factorial (10);


  /////// how? nesting LOOPs

  function multiplication() {

    for (let x = 1; x <= 10; x++) {

      for (let y = 1; y <= 10; y++) {

        console.log(x*y);
      }
    }
  }

  multiplication();
