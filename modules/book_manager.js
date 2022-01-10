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
      const bookCollectionGot = this.#getFromLocalStorage();

      book.index = (bookCollectionGot.length === 0) ? 0
        : bookCollectionGot[bookCollectionGot.length - 1].index + 1;

      bookCollectionGot.push(book);
      this.bookCollection = bookCollectionGot;
      this.#rerender();

      this.#saveToLocalStorage(this.bookCollection);
    }
}
