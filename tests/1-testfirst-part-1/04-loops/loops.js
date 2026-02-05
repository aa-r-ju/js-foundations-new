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
console.log(sum([]));
console.log(sum([7]));
console.log(sum([7, 11]));
console.log(sum([1, 3, 5, 7, 9]));
