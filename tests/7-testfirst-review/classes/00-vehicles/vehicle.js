/* eslint-disable no-unused-vars */
class Vehicle {
  constructor(arr) {
    this.wheelTotal = arr[0];
    this.energySource = arr[1];
    this.manufacturer = arr[2];
    this.isOn = false;
  }

  getSpec(para) {
    if (this.hasOwnProperty(para)) {
      return this[para];
    }
  }
}
let vv = new Vehicle([2, "gas", "Harly-Davidson"]);
console.log(vv.getSpec("wheelTotal"));
console.log(vv.getSpec("energySource"));
console.log(vv.getSpec("manufacturer"));
