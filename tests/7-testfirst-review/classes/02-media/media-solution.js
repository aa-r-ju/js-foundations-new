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

class Album extends Media {
  constructor(title, yearOfRelease, artist, tracks) {
    super(title, yearOfRelease);
    this.artist = artist;
    this.tracks = tracks;
  }
}

class Movie extends Media {
  constructor(title, yearOfRelease, director, runTime) {
    super(title, yearOfRelease);
    this.director = director;
    this.runTime = runTime;
  }
}
class Book extends Media {
  constructor(title, yearOfRelease, author, pages) {
    super(title, yearOfRelease);
    this.author = author;
    this.pages = pages;
  }
}
