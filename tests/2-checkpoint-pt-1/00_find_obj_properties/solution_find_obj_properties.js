/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj) {
  let array = [];
  for (let keys in obj) {
    if (obj.hasOwnProperty(keys)) {
      array.push(keys);
    }
  }
  return array.join(", ");
}
