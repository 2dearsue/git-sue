var cashier = 0;

var smartphone = 300;
var headphones = 50;
var cover = 20;

var customer = true;
var customerHeadphones = false;
var customerCover = true;

var colorCover = `pink`;

 if (customer) {
   cashier = cashier + smartphone;

 } else if (customer && customerHeadphones) {
   cashier = (cashier + smartphone + headphones)*0.1;

 } else if (customer && customerHeadphones && customerCover) {
   cashier = (cashier + smartphone + headphones + cover)*0.15;

 } else if (customer && customerCover) {

   switch (colorCover) {

   case `green`:
   cashier = (cashier + smartphone + cover)*0.07;
   break;

   case `pink`:
   cashier = (cashier + smartphone + cover)*0.12;
   break;

   case `orange`:
   cashier = (cashier + smartphone + cover)*0.15;
   break;

   default:
   cashier = (cashier + smartphone + cover)*0.05;
 }
}

console.log(`cashier is ${cashier}.`);
