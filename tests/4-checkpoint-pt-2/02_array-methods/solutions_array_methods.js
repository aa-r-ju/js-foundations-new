/* eslint-disable no-unused-vars */
function useMapToUpperCase(str) {
  let values = str.split(" ");
  return values.map((word) => word.toUpperCase());
}
console.log(useMapToUpperCase("Keep It Simple"));

function useFilter(array) {
  return array.filter((item) => item.includes("@"));
}

let kkk = [
  "emilie.io",
  "trace.google.com",
  "kellyscott2@aol.com",
  "helloWorld.com",
  "test@apple.com",
  "snowman@iceland.com",
];
console.log(useFilter(kkk));

function sumWithReduce(arr, startValue = 0) {
  return arr.reduce((acc, curr) => acc + curr, startValue);
}
let sum = [7, 8, 9, 10];
console.log(sumWithReduce(sum, 202));
