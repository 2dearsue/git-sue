var myMoney = 50;
var costRoom = 70;

var diffMoney= myMoney-costRoom;

if (diffMoney>100) {
  console.log(`Take the Suite`);

} else if (diffMoney>=0) {
  console.log(`Take the Room`);

} else {
  console.log(`Leave Mate!`);
}

console.log(myMoney != costRoom);
