/* eslint-disable no-unused-vars */
function callAll(obj, arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i].call(obj);
    resultArr.push(result);
  }
  return resultArr;
}

const fnArr = [
  function firstName() {
    return this.first;
  },

  function lastName() {
    return this.last;
  },
];
const obj = { first: "Nimit", last: "Maru" };

console.log(callAll(obj, fnArr));
