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

class Tesla extends Vehicle {
  constructor(arr) {
    super(arr[4][0]);

    this.milesPerCharge = arr[0];
    this.model = arr[1];
    this.chargePercentage = arr[2];
    this.minutesToCharge = arr[3];
  }

  minutesToFullCharge(currentCharge) {
    let remaining = 100 - currentCharge;
    let time = (remaining / 100) * this.minutesToCharge;

    return time + " minutes until the charge is full!";
  }
}

let rr = new Tesla([300, "Model S", 50, 100, [[4, "electric", "Tesla"]]]);
console.log(rr.minutesToFullCharge(15));
