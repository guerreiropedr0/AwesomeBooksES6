import ListHtml from './list_html.js';
import LocalStorageManager from './local_storage.js';

export default class DisplayBooks {
  constructor(bookCollection) {
    this.bookCollection = bookCollection;
    const ulNode = document.querySelector('.book-list');
    this.bookListHtml = ulNode;
  }

  #clear = () => {
    this.bookListHtml.innerHTML = '';
  };

  #displayBook = (book) => {
    // create the list node
    const listNode = document.createElement('li');
    // create the inner html for a listnode
    const listInnerHtml = new ListHtml(book).html;
    // add inner html to list node
    listNode.innerHTML = listInnerHtml;
    // add id to listnode
    listNode.id = `book${book.index}`;
    // used for styling
    listNode.className = 'bookItem';
    // append the list node to the DOM
    this.bookListHtml.appendChild(listNode);
  };

  #hideListItem = (book) => {
    const li = document.querySelector(`#book${book.index}`);
    li.classList.add('hidden');
  };

  #attachRemoveMethod = (book) => {
    // select the remove button clicked;
    const button = document.querySelector(`#${`button${book.index}`}`);
    button.addEventListener('click', () => {
      // removing the book from the collection
      this.bookCollection = this.bookCollection.filter(
        (bookGot) => bookGot.index !== book.index
      );
      // saving the new collection to the local storage
      this.#saveToLocalStorage(this.bookCollection);
      // hiding the list node from the books
      this.#hideListItem(book);
      this.emptyCheck();
    });
  };

  #saveToLocalStorage = (bookCollection) => {
    const storageManager = new LocalStorageManager();
    storageManager.save(bookCollection);
  };

  display = () => {
    // clear all books
    this.#clear();
    // display the books from the book collection
    this.bookCollection.forEach(this.#displayBook);
    // attach the remove method to all the remove buttons
    this.bookCollection.forEach(this.#attachRemoveMethod);
    this.emptyCheck();
  };

  emptyCheck = () => {
    if (this.bookCollection.length === 0) {
      const li = document.createElement('li');
      li.innerHTML = 'No books found.';
      this.bookListHtml.appendChild(li);
    }
  };
}
