/* eslint-disable no-unused-vars */
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
const array = ["soccer", "swimming", "softball", "water-polo"];

forEach(array, function (val) {
  console.log(val);
});

function map(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }

  return newArray;
}
let arr = [1, 2, 3];
function doubler(num) {
  return num * 2;
}

function filter(array, callback) {
  let newFilter = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newFilter.push(array[i]);
    }
  }
  return newFilter;
}

const evenFilter = (element) => {
  if (element % 2 === 0) return true;
  else return false;
};

const oddFilter = (element) => {
  return !evenFilter(element);
};

function includes(arr, val) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return true;
      }
    }
  } else if (typeof arr === "object" && arr !== null) {
    for (let keys in arr) {
      if (arr[keys] === val) {
        return true;
      }
    }
  }

  return false;
}

console.log(includes([1, 2, 3], 3));
console.log(
  includes(
    {
      moe: 1,
      larry: 3,
      curly: 9,
    },
    5
  )
);

function countWords(startingValue, words) {
  if (!words) {
    return startingValue;
  }
  let count = 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      count += 1;
    }
  }
  return count + startingValue;
}
console.log(countWords(0, "count the words"));
console.log(countWords(5, "this is a sentence with 7 words"));

function reduce(array, start, callback) {
  let result = start;

  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }

  return result;
}

let add = (a, b) => a + b;
console.log(reduce([3, 5, 7], 0, add));

function countWords(total, sentence) {
  return total + sentence.split(" ").length;
}

let lines = ["hello there this is line 1", "and this is line 2"];
console.log(reduce(lines, 0, countWords));
