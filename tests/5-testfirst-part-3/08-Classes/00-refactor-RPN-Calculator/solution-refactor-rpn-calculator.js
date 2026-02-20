/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
/* eslint-disable no-unused-vars */

class RPNCalculator {
  constructor() {
    this.state = [];
  }
  push(num) {
    this.state.push(num);
  }
  checkLength() {
    if (this.state.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
  }
  value() {
    return this.state[this.state.length - 1];
  }
  plus() {
    this.checkLength();
    let b = this.state.pop();
    let a = this.state.pop();
    let val = a + b;
    this.state.push(val);
  }
  minus() {
    this.checkLength();
    let b = this.state.pop();
    let a = this.state.pop();
    let val = a - b;
    this.state.push(val);
  }
  times() {
    this.checkLength();
    let b = this.state.pop();
    let a = this.state.pop();
    let val = a * b;
    this.state.push(val);
  }
  divide() {
    this.checkLength();
    let b = this.state.pop();
    let a = this.state.pop();
    let val = a / b;
    this.state.push(val);
  }
}

let cslc = new RPNCalculator();
console.log(cslc);
