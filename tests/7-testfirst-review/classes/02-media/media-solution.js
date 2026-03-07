/* eslint-disable no-unused-vars */
class Media {
  constructor(title, yearOfRelease, ratings) {
    this.title = title;
    this.yearOfRelease = yearOfRelease;
    this.ratings = [];
  }

  getTitle() {
    return this.title;
  }

  getYearOfRelease() {
    return this.yearOfRelease;
  }

  addRating(val) {
    if (val < 1 || val > 100) {
      return `${val} is not a valid rating, ratings must be 1-100`;
    } else {
      this.ratings.push(val);
    }
  }

  getAverageRating() {
    if (this.ratings.length === 0) {
      return `this is not rated`;
    }
    let sum = this.ratings.reduce((acc, char) => {
      acc += char;
      return acc;
    }, 0);
    return Math.floor(sum / this.ratings.length);
  }
}

let kk = new Media("Example Title", 2004);
console.log(kk.getTitle());
console.log(kk.getYearOfRelease());

console.log(kk.addRating(22));
console.log(kk.addRating(88));
console.log(kk.addRating(92));
console.log(kk.addRating(100));
console.log(kk.addRating(67));
console.log(kk.addRating(93));
console.log(kk.getAverageRating(), "ppp");
console.log(kk);
