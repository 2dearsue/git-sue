var cashier = 0;

var smartphone = 300;
var headphones = 50;
var cover = 20;

var customer = true;
var customerHeadphones = false;
var customerCover = true;

var colorCover = `pink`;

 if (customer) {
   cashier = smartphone;

   if (customerHeadphones && customerCover) {
     cashier = (smartphone + headphones + cover)*0.15;

   } else if (customerHeadphones) {
     cashier = (smartphone + headphones)*0.1;

   } else if (customerCover) {

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
     cashier = (smartphone + cover)*0.05;
   }
   
} else {
  cashier = 0;
}

console.log(`Our cashier contents ${cashier} $.`);
