/* eslint-disable no-unused-vars */
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
const array = ["soccer", "swimming", "softball", "water-polo"];

forEach(array, function (val) {
  console.log(val);
});

function map(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }

  return newArray;
}
let arr = [1, 2, 3];
function doubler(num) {
  return num * 2;
}
console.log(map(arr, doubler));
