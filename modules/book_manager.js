import LocalStorageManager from './local_storage.js';
import DisplayBooks from './display_books.js';

export default class BookManager {
  constructor() {
    this.localStorageManager = new LocalStorageManager();
    this.bookCollection = this.localStorageManager.retrieve() || [];
  }

    #saveToLocalStorage=(bookCollection) => this.localStorageManager.save(bookCollection);

    #getFromLocalStorage=() => this.localStorageManager.retrieve();

    #rerender=() => {
      const displayBooks = new DisplayBooks(this.bookCollection);
      displayBooks.display();
    }

    add=(book) => {
      // gets the books from local storage
      const bookCollectionGot = this.#getFromLocalStorage();
      // sets an index on the book
      book.index = (bookCollectionGot.length === 0) ? 0
        : bookCollectionGot[bookCollectionGot.length - 1].index + 1;
      // adds the book and updates the bookmanager collection
      bookCollectionGot.push(book);
      this.bookCollection = bookCollectionGot;
      this.#rerender();
      // save the book collection to the local storage
      this.#saveToLocalStorage(this.bookCollection);
    }
}
