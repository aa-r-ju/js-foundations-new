/* eslint-disable no-unused-vars */
function repeat(str, value) {
  let repeatedValue = "";
  if (value > 0) {
    for (let i = 0; i < value; i++) {
      repeatedValue += str;
    }
  }
  return repeatedValue;
}

console.log(repeat("yo", 2));

function sum(array) {
  let numberValue = 0;
  for (let i = 0; i < array.length; i++) {
    numberValue += array[i];
  }
  return numberValue;
}

function join(array, spliter) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    if (spliter === undefined) {
      str += array[i];
    } else {
      if (array.length - 1 !== i) {
        str += array[i] + spliter;
      } else {
        str += array[i];
      }
    }
  }
  return str;
}
