/* eslint-disable no-unused-vars, no-prototype-builtins */
function reduceRight(arr, starting, fn) {
  let acc = starting;
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}
const stringConcat = (prev, curr) => {
  return prev + curr;
};

console.log(reduceRight(["o", "l", "l", "e", "h"], "", stringConcat));
