/* eslint-disable no-unused-vars */
function vowelsCount(str) {
  const result = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    total: 0,
  };

  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (acc.hasOwnProperty(char)) {
        acc[char]++;
        acc.total++;
      }
      return acc;
    }, result);
}
