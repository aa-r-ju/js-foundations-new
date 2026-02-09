/* eslint-disable no-unused-vars */
function concatString() {
  const values = Array.from(arguments);
  return values.join("");
}

console.log(concatString("David", " ", "Yang"));
console.log(concatString("This", " ", "should", " ", "be done with join"));
