/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
/* eslint-disable no-unused-vars */

class RPNCalculator {
  constructor() {
    this.stack = [];
  }

  push(num) {
    this.stack.push(num);
  }

  value() {
    return this.stack[this.stack.length - 1];
  }

  _checkLength() {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
  }

  plus() {
    this._checkLength();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a + b);
  }

  minus() {
    this._checkLength();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a - b);
  }

  times() {
    this._checkLength();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a * b);
  }

  divide() {
    this._checkLength();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a / b);
  }
}
