var operation = require('./operation.js');

var allGoodOperation = (() => {
  var expectedResult = 9;
  var actualResult = operation(4, 5);

  expectedResult === actualResult ? console.log(`Yeah it has passed - opTest`) : console.log(`Shit it has not passed - opTest`);
})();
