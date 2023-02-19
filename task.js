"use strict";
function solveEquation(a, b, c) {
  let str = b ** 2 - 4 * a * c;
  let arr = [];
  if (str < 0) {
    arr;
  } else if (str === 0) {
    str = -b / (2 * a);
    arr.push(str)
  } else {
    str = (-b + Math.sqrt(b)) / (2 * a);
    let str2 = (-b - Math.sqrt(b)) / (2 * a);
    arr.push(str, str2)
  }
  return arr
}
console.log(solveEquation(1, 2, 1))

/*---TASK2---*/
function calculateTotalMortgage (percent, contribution, amount, countMonths) {
  const s = amount - contribution;
  let p = percent / 12;
  
    let monthPay = s * (p + (p / (((1 + p) ** countMonths) - 1)));
     let finalPay = `${monthPay} * ${countMonths}`;
      
  
return monthPay
}
console.log(calculateTotalMortgage(10, 1000, 20000, 24))
