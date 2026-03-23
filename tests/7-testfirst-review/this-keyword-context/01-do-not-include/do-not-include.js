/* eslint-disable no-unused-vars, no-extend-native */
Array.prototype.doNotInclude = function (indexes) {
  if (!Array.isArray(indexes)) {
    indexes = [indexes];
  }

  return this.filter((_, i) => {
    return !indexes.includes(i);
  });
};
