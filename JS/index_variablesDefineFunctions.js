
  function add(a, b) {
    return a + b;
  }

  let addFiveAndTwo = add;

  console.log(addFiveAndTwo (2, 5));

  //// or

  function add(a, b) {
    return a + b;
  }

  let substract = function (a, b) {
    return b - a;
  }

  console.log(substract(5, 10));

/// function

let sayHello = function (name) {
  return `Hello ${name}!`;
}

let printAge = function (age) {
  return `My age is ${age}`;
}

let showInfo = function(fun, param) {
  return fun(param);

}
console.log(showInfo(sayHello, `Jake`));
console.log(showInfo(printAge, 50));


////

let addition = function (a, b) {
  return a + b;
}

let substraction = function (a, b) {
  return b -a;
}

let multiplication = function (a, b) {
  return a * b;
}

let divide = function (a, b) {
  return a / b;
}

let modulo = function (a, b) {
  return a % b;
}

let apocalypseNow = function (fn, firstArgument, secondArgument) {
  return fn (firstArgument, secondArgument);
}

console.log(apocalypseNow(divide, 10, 5));
console.log(apocalypseNow(multiplication, 10, 5));
console.log(apocalypseNow(substraction, 10, 5));
console.log(apocalypseNow(addition, 10, 5));
console.log(apocalypseNow(modulo, 10, 100));
