

function recycle(money) {
  var bottleCost = 2;
  var howManyIbuy = Math.floor(money / bottleCost);
  var totalBottles = howManyIbuy;
  var totalCaps = howManyIbuy;
  var total = howManyIbuy;
  var fromBottle = 0;
  var fromCap = 0;
  var leftCap = 0;
  var leftBottle = 0;

  while (totalBottles > 1 || totalCaps > 3) {
    fromBottle = Math.floor(totalBottles / 2);
    fromCap = Math.floor(totalCaps / 4);
    leftBottle = totalBottles % 2 ;
    leftCap = totalCaps % 4;
    total += (fromCap + fromBottle);
    totalBottles = (fromBottle + fromCap + leftBottle);
    totalCaps = (fromBottle + fromCap + leftCap);
  }

  return total;
}

console.log(recycle(10));
console.log(recycle(20));
console.log(recycle(30));
console.log(recycle(40));