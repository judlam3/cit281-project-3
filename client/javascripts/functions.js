// jshint esversion: 6
//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//Req. B
let bitBatBotOrNot = n => {
let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  } if (n % 5 == 0) {
    result = `${result}Bat`;
  } if (n % 7 == 0) {
    result = `${result}Bot`;
  } if ((n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0)) {
    result = `${result}Not`;
  } return result;
};

//Req. C
let findAllbitBatBotOrNots1 = arr => {
const arr1 = arr.map(bitBatBotOrNot);
var arr2 = arr.map(function (x, i) {
  return `${x}: ${arr1[i]}`;
  });
  return arr2; // Finally returning the finally array .
};

//Req. D
let findAllbitBatBotOrNots2 = (arr) => {
let arr1 = [];
for(var each in arr) {
  arr1.push(arr[each]+": "+bitBatBotOrNot(arr[each]));
  }
  return arr1;
};

//Req. E
let findAllbitBatBotOrNots3 = (arr) => {
let arr1 = [];
for(var each of arr) {
  arr1.push(each+": "+bitBatBotOrNot(each));
  }
return arr1;
};

//Req. F
let findAllbitBatBotOrNots4 = (arr) => {
let arr1=[];
    arr.forEach((each)=>{
    arr1.push(each + ": " + bitBatBotOrNot(each));
    });
return arr1;
};

//Req. XC
let findAllbitBatBotOrNotsXC = (arr) => {
let arr1 = [];
for(var each in arr) {
  arr1.push(arr[each]+": "+bitBatBotOrNot(arr[each]));
  }
  return arr1;
};

/*let bitBatBotOrNot = (n) => {
  if (n % 3 == 0 && n % 5 ==0 && n % 7 ==0) {
    result = "BitBatBot";
  } else if (n % 3 == 0 && n % 5 ==0) {
    result = "BitBat";
  } else if (n % 3 == 0 && n % 7 ==0) {
    result = "BitBot";
  } else if (n % 5 == 0 && n % 7 ==0) {
    result = "BatBot";
  } else if (n % 3 == 0) {
    result = "Bit";
  } else if (n % 5 == 0) {
    result = "Bat";
  } else if (n % 7 == 0) {
    result = "Bot";
  } else if (n % 7 !== 0 || n % 5 !== 0 || n % 3 !== 0) {
    result = "Not";
  }
  return result;
};*/
