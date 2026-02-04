/* eslint-disable no-unused-vars */
function createCalculator() {
  let total = 0;

  return {
    add(num) {
      total += num;
    },
    subtract(num) {
      total -= num;
    },
    value() {
      return total;
    },
    clear() {
      total = 0;
    },
  };
}

function addSquareMethod(instances) {
  for (let i = 0; i < instances.length; i++) {
    instances[i].square = function () {
      const value = this.value();
      return value * value;
    };
  }

  return instances;
}
// const humanCalculatorMethods = {
//   add(num) {
//     this.total += num;
//   },
//   subtract(num) {
//     this.total -= num;
//   },
//   value() {
//     return this.total;
//   },
//   clear() {
//     this.total = -10;
//   },
// };

const humanCalculatorMethods = {
  add(num) {
    this.total += num;
  },

  subtract(num) {
    this.total -= num;
  },

  value() {
    return this.total;
  },

  clear() {
    this.total = -10;
  },
};

function createHumanCalculator() {
  const calculator = Object.create(humanCalculatorMethods);
  calculator.total = -10;
  return calculator;
}
