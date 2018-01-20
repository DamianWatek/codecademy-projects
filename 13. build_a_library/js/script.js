// Main class Media
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() { return this._title; }
  get isCheckedOut() { return this._isCheckedOut; }
  get ratings() { return this._ratings; }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  getAverageRating() {
    let lengthOfArray = this._ratings.length;
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    let average = ratingsSum / lengthOfArray;
    this._ratings = average;
  }
  
  addRating(ratings) {
    this._ratings.push(ratings);
  }
}
// Class Book
class Book extends Media {
  
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  } 
  
  get author() { return this._author; }
  get pages() { return this._pages; }
  
}
// Class Movie 
class Movie extends Media {
  
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  } 
  
  get director() { return this._director; }
  get runTime() { return this._runTime; }
  
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();

console.log(historyOfEverything);

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();

console.log(speed);
















