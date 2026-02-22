/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan {
  constructor(secretWord, remainingGuesses, lettersGuessed, gameState) {
    this.secretWord = secretWord.toLowerCase().split("");
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = "playing";
  }
  submitGuess(val) {
    let value = val.toLowerCase();

    if (this.gameState !== "playing") {
      return;
    } else {
      if (!this.lettersGuessed.includes(value)) {
        this.lettersGuessed.push(value);
        if (!this.secretWord.includes(value)) {
          this.remainingGuesses -= 1;
        }
      }
    }
  }
}

const kk = new VanishingMan("aerobic");
console.log(kk.submitGuess("a"));
console.log(kk.submitGuess("e"));
console.log(kk.submitGuess("r"));
console.log(kk.submitGuess("l"));
console.log(kk.submitGuess("k"));
console.log(kk.submitGuess("o"));
console.log(kk.submitGuess("b"));
console.log(kk.submitGuess("i"));
console.log(kk.submitGuess("c"));
console.log(kk.gameState);
console.log(kk.computeGameState());
console.log(kk.gameState);
