/* eslint-disable no-unused-vars */
function mapQuest(directions) {
  let obj = {
    N: "S",
    S: "N",
    E: "W",
    W: "E",
  };

  return directions.reduce((acc, char) => {
    let last = acc[acc.length - 1];
    if (obj[char] === last) {
      acc.pop();
    } else {
      acc.push(char);
    }
    return acc;
  }, []);
}
console.log(mapQuest(["N", "E", "S", "W"]));
console.log(mapQuest(["S", "E", "W", "W"]));
