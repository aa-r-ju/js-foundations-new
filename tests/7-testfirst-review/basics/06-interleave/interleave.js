function interleave(...strings) {
  let maxLength = 0;
  for (let s of strings) {
    if (s.length > maxLength) maxLength = s.length;
  }

  let result = "";

  for (let i = 0; i < maxLength; i++) {
    for (let s of strings) {
      if (i < s.length) {
        result += s[i];
      }
    }
  }

  return result;
}

console.log(interleave("hello", "WORLD"));
