/* eslint-disable no-unused-vars */
function setPropsOnObj(object) {
  object.x = 7;
  object["y"] = 8;
  object.onePlus = function (num) {
    return 1 + num;
  };
  return object;
}
let object = {};
console.log(setPropsOnObj(object));

function setPropsOnArr(arr) {
  arr[0] = 5;
  arr.hello = function () {
    return `Hello!`;
  };
  arr["full"] = "stack";
  arr["twoTimes"] = function (num) {
    return 2 * num;
  };
  return arr;
}
let arrayObject = [];
console.log(setPropsOnArr(arrayObject));

function setPropsOnFunc(obj) {
  obj.year = "20??";
  obj.divideByTwo = function (num) {
    return num / 2;
  };
}
let functionObject = {};
setPropsOnFunc(functionObject);

function shallowCopy(array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    return [...array1, ...array2];
  }
  if (typeof array1 === "object" && typeof array2 === "object") {
    return { ...array1, ...array2 };
  }
}

const gumBrands = ["orbit", "trident", "chiclet", "strident"];
const mintBrands = ["altoids", "certs", "breath savers", "tic tac"];

console.log(shallowCopy(gumBrands, mintBrands));
