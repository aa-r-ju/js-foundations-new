/* eslint-disable no-unused-vars */
function repeat(str, value) {
  let repeatedValue = "";
  if (value > 0) {
    for (let i = 0; i < value; i++) {
      repeatedValue += str;
    }
  }
  return repeatedValue;
}

console.log(repeat("yo", 2));

function sum(array) {
  let numberValue = 0;
  for (let i = 0; i < array.length; i++) {
    numberValue += array[i];
  }
  return numberValue;
}

function join(array, spliter) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    if (spliter === undefined) {
      str += array[i];
    } else {
      if (array.length - 1 !== i) {
        str += array[i] + spliter;
      } else {
        str += array[i];
      }
    }
  }
  return str;
}

function gridGenerator(number) {
  let str = "";

  for (let row = 0; row < number; row++) {
    for (let col = 0; col < number; col++) {
      if (row === col || row + col === number - 1) {
        str += "#";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }

  return str;
}

function paramify(obj) {
  let str = "";
  let array = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      array.push(key);
    }
  }

  array.sort();

  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    str += key + "=" + obj[key];
    if (i !== array.length - 1) {
      str += "&";
    }
  }

  return str;
}

function paramifyObjectKeys(obj) {
  const keys = Object.keys(obj);

  keys.sort();

  let result = "";
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result += key + "=" + obj[key];
    if (i !== keys.length - 1) {
      result += "&";
    }
  }

  return result;
}

function sort(arr) {
  let sorted = arr.slice();

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  return sorted;
}
