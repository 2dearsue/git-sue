const factory = require ('../factory.js');
const assert = require(`assert`);
const showZodiac = require(`../zodiacSignTest.js`);

describe(`Testing whole functionality, test suite!`, () => {

  describe(`Testing the calculateNumbers function`, () => {

  it(`Should return the sum of the arguments`, () => {
    const actualResult = factory.calculateNumbers(10, 15);
    const expectedResult = 25;

    assert.equal(actualResult, expectedResult);
    })

  it(`Should return the product if b is negative.`, () => {
    const actualResult = factory.calculateNumbers(10, -4);
    const expectedResult = -40;

    assert.equal(actualResult, expectedResult);
  })

  it(`Should return an error string message if typeof not a number.`, () => {
    const actualResult = factory.calculateNumbers(`sue`);
    const expectedResult = 'The operation is not possible.';

    assert.equal(actualResult, expectedResult);
  })

  })

  describe(`Testing the factorialNumber function`, () => {

    it(`it should return the factorial of the num`, () => {
      const actualResult = factory.factorial(5);
      const expectedResult = 120;

      assert.equal(actualResult, expectedResult);
      })

    it(`only pass numbers`, () => {
      const actualResult = factory.factorial(`sue`);
      const expectedResult = `Clearly not a number`;

      assert.equal(actualResult, expectedResult);
      })

    it(`only positive numbers`, () => {
      const actualResult = factory.factorial(-10);
      const expectedResult = `impossible to calculate a negative factorial`;

      assert.equal(actualResult, expectedResult);
      })

  })

  describe(`Checking the functionality of fizzBuzz function.`, () => {

    const arguments = [-2, 45, 9, 25, 38];
    const correspondingResults = ['You get nothing here!', `FizzBuzz`, `Fizz`, `Buzz`, 38];

    arguments.forEach((argument, index) => {
      it (`Should do something ${correspondingResults[index]}`, () => {
        const actualResult = factory.fizzBuzz(argument);
        const expectedResult = correspondingResults[index];

        assert.equal(actualResult, expectedResult)
      })
    })

    // OLD VERSION:
    // it(`Checking the validity of the given value.`, () => {
    //   const actualResult = factory.fizzBuzz(`no`);
    //   const expectedResult = 'You get nothing here!';
    //
    //   assert.equal(actualResult, expectedResult);
    // })
    //
    // it(`Checking FizzBuzz.`, () => {
    //   const actualResult = factory.fizzBuzz(15);
    //   const expectedResult = 'FizzBuzz';
    //
    //   assert.equal(actualResult, expectedResult);
    // })
    //
    // it(`Checking Fizz.`, () => {
    //   const actualResult = factory.fizzBuzz(9);
    //   const expectedResult = 'Fizz';
    //
    //   assert.equal(actualResult, expectedResult);
    // })
    //
    // it(`Checking Buzz.`, () => {
    //   const actualResult = factory.fizzBuzz(20);
    //   const expectedResult = 'Buzz';
    //
    //   assert.equal(actualResult, expectedResult);
    // })
    //
    // it(`Returning value`, () => {
    //   const actualResult = factory.fizzBuzz(13);
    //   const expectedResult = 13;
    //
    //   assert.equal(actualResult, expectedResult);
    // })

  })

})

describe('Testing the Zodiac function', () => {

    const dates =
    [
      new Date(1990, 3, 15),
      new Date(1990, 4, 12),
      new Date(1990, 5, 19),
      new Date(1990, 6, 20),
      new Date(1990, 7, 20),
      new Date(1990, 8, 10),
      new Date(1990, 9, 10),
      new Date(1990, 10, 11),
      new Date(1990, 11, 10),
      new Date(1990, 0, 18),
      new Date(1990, 0, 27),
      new Date(1990, 2, 15),
     ];
    // const correspondingResults = allZodiacs[index].sign


    dates.forEach((date, index) => {
    it(`Should return ${showZodiac.allZodiacs[index].sign}`, () => {
      const actualResult = showZodiac.showZodiac(date);
      const expectedResult = `Your zodiac is ${showZodiac.allZodiacs[index].sign}`;


      assert.equal(actualResult, expectedResult);
    })
  })
})


// OLD CODE:

// const allNumbers = (() => {
//   const actualResult = factory.calculateNumbers(5, 15);
//
//   const expectedResult = 20;
//
//   actualResult === expectedResult ? console.log(`Test passed - calcNumbers`) : console.log(`Test failed - calcNumbers`);
// })();
//
// const factorialNumber = (() => {
//   console.log('it should return the factorial of a number');
//
//   const actualResult = factory.factorial(5);
//   const expectedResult = 120;
//
//   actualResult === expectedResult ? console.log(`Test passed - factorial`) : console.log(`Test failed - factorial`);
// })();
//
// const ifNotNumber = (() => {
//
//   const actualResult = factory.factorial('susano');
//   const expectedResult = `Clearly not a number`;
//
//   actualResult === expectedResult ? console.log(`Test passed - factorialNotNum`) : console.log(`Test failed - factorialNotNum`);
// })();
//
// const ifNegNumber = (() => {
//
//   const actualResult = factory.factorial(-10);
//   const expectedResult = `impossible to calculate a negative factorial`;
//
//   actualResult === expectedResult ? console.log(`Test passed - factorialNegNum`) : console.log(`Test failed - factorialNegNum`);
// })();
