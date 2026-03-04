/* eslint-disable no-unused-vars */
function multipleMaps(values, maps) {
  return values.map((value) => {
    for (let obj of maps) {
      if (value in obj) {
        console.log(obj[value]);
        return obj[value];
      }
    }
  });
}
console.log(multipleMaps([0], [{ 0: "zero" }]));
// console.log(multipleMaps([5, 6, 7], [{ 5: "five", 6: "six", 7: "seven" }]));
// console.log(multipleMaps(["a", "b", "c", "d"], [{ a: 0, b: 1, c: 2, d: 3 }]));
