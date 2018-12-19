function printType() {
  var num = 234;

  return typeof local;
}

var type = printType();

console.log(type);


//////new thing

var type = printType();

console.log(type);

function add (a, b) {
  return a + b;
}

console.log(add(10,15));
console.log(add(33,158));

/// DRY - Dont Repeat Your Code!!!!!


var goodWeather = true;

  if (goodWeather) {
    console.log(`goodWeather`);
  } else {
    console.log(add(10,37));
  }


function add (a, b, substract) {
  if (substract) {
    return b - a;
  } else {
    return a  + b;
  }
}

console.log(add(10, 15, true));
console.log(add(10, 15, false));
console.log(add(22, 120, false));
