/* eslint-disable no-unused-vars, no-prototype-builtins */
// Prototype object that will hold shared methods
let bookMethods = {
  getPrice: function () {
    return this.price;
  },
  getId: function () {
    return this.id;
  },
  getInfo: function () {
    return `${this.title} by ${this.author}`;
  },
  addRating: function (rating) {
    this.rating.push(rating);
  },
  getRating: function () {
    if (this.rating.length === 0) return 0;
    let totalStars = 0;
    for (let i = 0; i < this.rating.length; i++) {
      totalStars += this.rating[i].length;
    }
    return Math.round(totalStars / this.rating.length);
  },
};

function createBook(id, title, author, price) {
  let book = Object.create(bookMethods);

  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];

  return book;
}
