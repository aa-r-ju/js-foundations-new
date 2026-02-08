/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator() {
  this.stack = [];
}
RPNCalculator.prototype.push = function (num) {
  this.stack.push(num);
};
RPNCalculator.prototype.value = function () {
  return this.stack[this.stack.length - 1];
};
RPNCalculator.prototype.checkStack = function () {
  if (this.stack.length < 2) {
    throw "rpnCalculatorInstance is empty";
  }
};
RPNCalculator.prototype.plus = function () {
  this.checkStack();
  let b = this.stack.pop();
  let a = this.stack.pop();
  this.stack.push(a + b);
};

RPNCalculator.prototype.minus = function () {
  this.checkStack();
  let b = this.stack.pop();
  let a = this.stack.pop();
  this.stack.push(a - b);
};
RPNCalculator.prototype.times = function () {
  this.checkStack();
  let b = this.stack.pop();
  let a = this.stack.pop();
  this.stack.push(a * b);
};

RPNCalculator.prototype.divide = function () {
  this.checkStack();
  let b = this.stack.pop();
  let a = this.stack.pop();
  this.stack.push(a / b);
};

let rpnCalculatorInstance = new RPNCalculator();
rpnCalculatorInstance.push(2);
rpnCalculatorInstance.push(3);
rpnCalculatorInstance.multiply();
rpnCalculatorInstance.push(4);
rpnCalculatorInstance.divide();
console.log(rpnCalculatorInstance);
