/* eslint-disable no-unused-vars */
function makeIterator(arr = []) {
  let index = 0;

  return {
    getNext() {
      if (index < arr.length) {
        const value = arr[index];
        index++;
        return { value: value, done: false };
      } else {
        index++;
        return { value: undefined, done: true };
      }
    },

    getIndex() {
      return index;
    },
  };
}
