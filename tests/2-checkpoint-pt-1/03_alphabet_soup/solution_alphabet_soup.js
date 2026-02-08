/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, characterBank) {
  let bank = characterBank.split("");

  for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i];
    let index = bank.indexOf(char);

    if (index === -1) {
      return false;
    }
    bank.splice(index, 1);
  }
  return true;
}
console.log(soup("helloworld", "dlhelolwor"));
