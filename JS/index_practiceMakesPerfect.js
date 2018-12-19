var cashier = 0;

var smartphone = 300;
var headphones = 50;
var cover = 20;

var customer = true;
var customerHeadphones = true;
var customerCover = false;

var colorCover = `green`;

 if (customer && customerHeadphones && customerCover) {
   cashier = (cashier + smartphone + headphones + cover)*0.85;

 } else if (customer && customerHeadphones) {
   cashier = (cashier + smartphone + headphones)*0.9;

 } else if (customer && customerCover) {

   switch (colorCover) {

   case `green`:
   cashier = (cashier + smartphone + cover)*0.93;
   break;

   case `pink`:
   cashier = (cashier + smartphone + cover)*0.88;
   break;

   case `orange`:
   cashier = (cashier + smartphone + cover)*0.85;
   break;

   default:
   cashier = (cashier + smartphone + cover)*0.95;
 }

} else if (customer) {
   cashier = cashier + smartphone;
 }

console.log(`cashier is ${cashier}.`);

///// Practice Makes Perfect
// Number 1

var x = 0;

if (x > 0) {
  var kindOfNo = `positive`;
  } else if (x < 0) {
    var kindOfNo = `negative`;
  } else {
    var kindOfNo = `neutral`;
  }

console.log(`The number is ${x}. And it is a ${kindOfNo} number.`);

// Number 2

var x = -6;

  if (!== 0) {
    console.log(-(x));
  }

  // another possibility in one line of code:

var givenNumber = -5

  givenNumber !== 0 ? console.log(-1*givenNumber) : console.log(0);

///// Number 3

var a=1;
var b=2;
var c=3;
var d=4;
var e=5;
var x=a+b+c+d+e;
var y=x/5;

  console.log(`The sum of all numbers is ${x} and the average is ${y}`);

///// Number 4

var x = 7;
var y = 3;
var z = 12;

  if (x>y && x>z) {
    var bigger = x;
  } else if (y>x && y>z){
    var bigger = y;
  } else if (z>x && z>y){
    var bigger = z;
  }

  console.log(`The Number is ${bigger} & it is the biggest.`);

///// Number 5

var month = `december`;
var numDays;

   switch (month) {

   case `january`:
    var monthNum = 1;
   break;

   case `february`:
   var monthNum = 2;
   break;

   case `march`:
   var monthNum = 3;
   break;

   case `april`:
   var monthNum = 4;
   break;

   case `may`:
   var monthNum = 5;
   break;

   case `june`:
   var monthNum = 6;
   break;

   case `july`:
   var monthNum = 7;
   break;

   case `august`:
   var monthNum = 8;
   break;

   case `september`:
   var monthNum = 9;
   break;

   case `october`:
   var monthNum = 10;
   break;

   case `november`:
   var monthNum = 11;
   break;

   case `december`:
   var monthNum = 12;
   break;

 }
  if (monthNum==2) {
    numDays=28;

  } else if (monthNum <=7 && monthNum%2!=0 || monthNum>=8 && monthNum%2==0) {
    numDays=31;

  } else if (monthNum <=7 && monthNum%2==0 || monthNum>=8 && monthNum%2!=0){
    numDays=30;
    }

console.log(`The month is ${month} and it has ${numDays} days.`);

// alternative solution:

var numMonth = 10;

if (numMonth ===2){
  console.log(`The february has 28 days!`);
} else if (numMonth === 4 || numMonth === 6 || numMonth === 9 || numMonth == 11) {
  console.log(`The month has 30 days`);
} else {
  console.log(`The month has 31 days`);
}


///// number 6

var year = 2006;

  if (year%4==0) {
    console.log(`The ${year} is a leap year.`);
  } else {
    console.log(`The ${year} is not a leap year`);
  }

// other possibility:

var givenYear = 2012;
var LeapYearMsg = `Yes! ${givenYear} is a Leap year`;
var noLeapHere = `Nope! ${givenYear} is not a Leap year`;

  givenYear % 4 === 0 ? console.log(LeapYearMsg) : console.log(noLeapHere);

//// number 7

// var x = 1;
// var y = 10;
//
//   console.log((x + y) * (y / 2));


//

var x = 3;
var y = 15;

  console.log((x + y) * (y / 2));

  console.log(3+4+5+6+7+8+9+10+11+12+13+14+15);
