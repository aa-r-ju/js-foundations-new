/* eslint-disable no-unused-vars */
function sometimes(fn) {
  let count = 0;

  return function (...args) {
    count++;

    if (count <= 3) {
      return fn(...args);
    }

    if (count % 2 === 1) {
      return fn(...args);
    }

    return "I do not know!";
  };
}
let add = (a, b) => {
  return a + b;
};

let myFunc = sometimes(add);
console.log(myFunc(2, 3));
