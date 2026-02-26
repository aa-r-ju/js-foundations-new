/* eslint-disable no-unused-vars */
function pigify(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .split(" ")
    .map((word) => {
      if (vowels.includes(word[0])) {
        return word + "ay";
      }

      if (word.startsWith("sch")) {
        return word.slice(3) + "schay";
      }

      if (word[1] === "q" && word[2] === "u") {
        return word.slice(3) + word.slice(0, 3) + "ay";
      }

      if (word.startsWith("qu")) {
        return word.slice(2) + "quay";
      }

      let i = 0;
      while (!vowels.includes(word[i])) {
        i++;
      }

      return word.slice(i) + word.slice(0, i) + "ay";
    })
    .join(" ");
}
