/* eslint-disable no-unused-vars */
function accessor(obj) {
  return function (key, value) {
    if (value !== undefined) {
      obj[key] = value;
    }
    return obj[key];
  };
}
