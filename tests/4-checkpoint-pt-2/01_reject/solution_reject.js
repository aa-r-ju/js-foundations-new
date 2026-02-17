/* eslint-disable no-unused-vars */
function reject(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
