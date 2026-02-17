/* eslint-disable no-unused-vars */
function useMapToUpperCase(str) {
  let values = str.split(" ");
  return values.map((word) => word.toUpperCase());
}
console.log(useMapToUpperCase("Keep It Simple"));
