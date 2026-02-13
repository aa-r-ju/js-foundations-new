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

function filter(array, callback) {
  let newFilter = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newFilter.push(array[i]);
    }
  }
  return newFilter;
}

const evenFilter = (element) => {
  if (element % 2 === 0) return true;
  else return false;
};

const oddFilter = (element) => {
  return !evenFilter(element);
};
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filter(values, evenFilter));
console.log(filter(values, oddFilter));
