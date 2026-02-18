/* eslint-disable no-unused-vars */
function thrice(callback) {
  let count = 0;
  return function () {
    if (count < 3) {
      count++;
      return callback();
    }
  };
}
