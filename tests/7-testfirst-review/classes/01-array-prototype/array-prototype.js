// /* eslint-disable no-unused-vars */
Array.prototype.maap = function (callback) {
  let newArr = [];

  this.forEach(function (element) {
    newArr.push(callback(element));
  });

  return newArr;
};

console.log([1, 2, 3].maap((val) => val + 1));
// [2,3,4]

console.log(["bear", "owl"].maap((val) => val.toUpperCase()));
// ["BEAR","OWL"]
