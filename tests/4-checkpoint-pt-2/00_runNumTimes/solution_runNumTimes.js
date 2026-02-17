/* eslint-disable no-unused-vars */
function runNumTimes(callback, num) {
  let str;
  for (let i = 0; i < num; i++) {
    str = callback();
  }
  return str;
}
