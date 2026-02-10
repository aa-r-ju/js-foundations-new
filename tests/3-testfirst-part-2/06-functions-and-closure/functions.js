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

function makeAdder(num) {
  return function add(val = 0) {
    return val + num;
  };
}
const adderOf10Function = makeAdder(10);
console.log(adderOf10Function());
console.log(adderOf10Function(22));

function once(fn) {
  let hasBeenCalled = false;
  let save;
  return function () {
    if (hasBeenCalled === false) {
      save = fn();
      hasBeenCalled = true;
    } else {
      return "the function has already been called...";
    }
    return save;
  };
}

// const sayHello = () => {
//   return "Hello!";
// };
// const returnValue = once(sayHello);
// console.log(returnValue());
// console.log(returnValue());
// console.log(returnValue());

let num = 50;

const addTen = () => {
  return (num += 10); // num is defined outside of addTen
};
const increment = once(addTen);
console.log(increment());
console.log(increment());
console.log(increment());
