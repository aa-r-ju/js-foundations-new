// /* eslint-disable no-unused-vars */
Array.prototype.maap = function (callback) {
  let newArr = [];

  this.forEach(function (element) {
    newArr.push(callback(element));
  });

  return newArr;
};

// console.log([1, 2, 3].maap((val) => val + 1));
// // [2,3,4]

// console.log(["bear", "owl"].maap((val) => val.toUpperCase()));
// // ["BEAR","OWL"]

Array.prototype.fiilter = function (callback) {
  let newArr = [];
  this.forEach((element) => {
    if (callback(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].fiilter((val) => val % 2 === 0));
// console.log(["bear", "owl", "mouse", "dog"].filter((val) => val.includes("o")));

Array.prototype.reeduce = function (callback, initialValue) {
  let accumulator = initialValue;

  this.forEach((element, index) => {
    accumulator = callback(accumulator, element, index, this);
  });

  return accumulator;
};
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].reeduce((a, b) => a + b, 0));
