/* eslint-disable no-unused-vars */
function accessor(obj) {
  return function (key, value) {
    if (value !== undefined) {
      obj[key] = value;
    }
    return obj[key];
  };
}

let kk = { stuff: "something" };
let rsult = accessor(kk);
console.log(rsult("stuff", "anything"));
console.log(rsult("pizza-pie", "yummmm"));
console.log();
