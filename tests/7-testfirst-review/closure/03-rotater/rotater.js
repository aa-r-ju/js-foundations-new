/* eslint-disable no-unused-vars */
function rotater(str) {
  let direction = "left";

  return function (num) {
    let len = str.length;

    if (num === len) {
      direction = direction === "left" ? "right" : "left";
      return str;
    }

    num = num % len;

    if (direction === "left") {
      return str.slice(num) + str.slice(0, num);
    } else {
      return str.slice(len - num) + str.slice(0, len - num);
    }
  };
}
