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

function createObjectWithClosures() {
  let value = 0;
  return {
    oneIncrementer: function () {
      value += 1;
    },
    tensIncrementer: function () {
      value += 10;
    },
    getValue: function () {
      return value;
    },
    setValue: function (num) {
      value = num;
    },
  };
}
let sum = createObjectWithClosures();
console.log(sum.oneIncrementer());
console.log(sum.tensIncrementer());

// console.log(sum.setValue(7.5));
console.log(sum.getValue());

function dontSpillTheBeans(initialSecret) {
  let secret = initialSecret;

  return {
    getSecret: function () {
      return secret;
    },

    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}
