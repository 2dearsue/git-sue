var implementation = require('./implementation.js');

var allGoodOperation = (() => {
  var expectedResult = 9;
  var actualResult = implementation.operation(4, 5);

  expectedResult === actualResult ? console.log(`Yeah it has passed - opTest`) : console.log(`Shit it has not passed - opTest`);
})();
