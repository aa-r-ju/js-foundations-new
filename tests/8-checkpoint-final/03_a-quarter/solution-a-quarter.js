/* eslint-disable no-unused-vars, no-prototype-builtins */
function aQuarter(fn) {
  let count = 0;

  return function (...args) {
    count++;

    if (count % 4 !== 0) {
      return "something went wrong :/";
    }

    return fn(...args);
  };
}

const plus = (x, y) => {
  return x + y;
};
let kk = aQuarter(plus);

console.log(kk(5, 5));
console.log(kk(5, 5));
console.log(kk(5, 5));
console.log(kk(5, 5));
