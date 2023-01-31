const books = require('./data');

const formatedBookNames = books.map(book => `${book.name} - ${book.genre} - ${book.author.name}`);

const formatedAuthorNamesBirth = books.map(book => `${book.author.name} - ${book.author.birthYear}`);

const nameAndAge = books.map(book => {
  const object = {
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear,
  }

  return object;
}).sort((obj1, obj2) => obj1.age - obj2.age);

console.log(nameAndAge);