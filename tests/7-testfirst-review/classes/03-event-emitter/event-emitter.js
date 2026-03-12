/* eslint-disable no-unused-vars */
class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  addListener(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
    console.log(this.events[event].length, "ppp");
  }

  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((callback) => {
      callback(...args);
    });
  }
}

let kk = new MyEventEmitter();
console.log(
  kk.addListener("greet", (name) => {
    return "Hello, " + name + "!";
  })
);

console.log(kk.events);
