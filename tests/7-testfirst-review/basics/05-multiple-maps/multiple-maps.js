/* eslint-disable no-unused-vars */
function multipleMaps(values, maps) {
  return values.map((value) => {
    for (let obj of maps) {
      if (value in obj) {
        return obj[value];
      }
    }
  });
}
