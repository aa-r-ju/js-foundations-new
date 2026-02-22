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

  computeGameState() {
    if (this.remainingGuesses <= 0) {
      this.gameState = "lost";
      return;
    }
    let winner = true;
    for (let i = 0; i < this.secretWord.length; i++) {
      let letter = this.secretWord[i];
      if (letter !== " " && !this.lettersGuessed.includes(letter)) {
        winner = false;
        break;
      }
    }
    if (winner) {
      this.gameState = "won";
    }
  }

  getSecretWordPuzzle() {
    let puzzle = "";
    for (let i = 0; i < this.secretWord.length; i++) {
      const letter = this.secretWord[i];
      if (letter === " ") {
        puzzle += " ";
      } else if (this.lettersGuessed.includes(letter)) {
        puzzle += letter;
      } else {
        puzzle += "#";
      }
    }
    return puzzle;
  }
}

const kk = new VanishingMan("aerobic");
console.log(kk.getSecretWordPuzzle());
// console.log(kk);
