/* eslint-disable no-unused-vars */
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
const array = ["soccer", "swimming", "softball", "water-polo"];

forEach(array, function (val) {
  console.log(val);
});
