/* eslint-disable no-unused-vars */
function concatString() {
  const values = Array.from(arguments);
  return values.join("");
}

console.log(concatString("David", " ", "Yang"));
console.log(concatString("This", " ", "should", " ", "be done with join"));

function yourFunctionRunner() {
  let values = Array.from(arguments);
  let result = "";
  for (let i = 0; i < values.length; i++) {
    result += values[i]();
  }
  return result;
}

const callThisFunction = () => {
  return "Called Value";
};

const andThisFunction = () => {
  return " and Other Value";
};

console.log(yourFunctionRunner(callThisFunction, andThisFunction));
