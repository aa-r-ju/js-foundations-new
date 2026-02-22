/* eslint-disable no-unused-vars */
// function Laptop(year, size) {}
class Laptop {
  constructor(year, hd) {
    this.year = year;
    this.hd = hd;
  }
  checkSpecs() {
    return `Year: ${this.year}, HD: ${this.hd}`;
  }
}
