/* eslint-disable no-unused-vars, no-prototype-builtins */
function alternate(fn) {
  let count = 0;
  return function () {
    count++;
    if (count % 2 !== 0) {
      fn();
    }
  };
}

function twice(fn) {
  let count = 0;

  return function () {
    if (count < 2) {
      count++;

      return fn();
    } else {
      return 0;
    }
  };
}

const returnTen = twice(() => {
  return 10;
});
console.log(returnTen());
console.log(returnTen());
console.log(returnTen());
console.log(returnTen());
