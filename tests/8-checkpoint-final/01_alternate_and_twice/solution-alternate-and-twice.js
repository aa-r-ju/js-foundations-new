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
