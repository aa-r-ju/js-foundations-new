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

function filterEvensDoubleAndSum(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(filterEvensDoubleAndSum([1, 2, 3, 4])); // 12
console.log(filterEvensDoubleAndSum([10, 12, 15, 19, 20])); // 84
console.log(filterEvensDoubleAndSum([10, 11, 12])); // 44
