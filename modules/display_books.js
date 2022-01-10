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
    const listNode = document.createElement('li');
    const listInnerHtml = new ListHtml(book).html;
    listNode.innerHTML = listInnerHtml;
    listNode.id = `book${book.index}`;
    listNode.className = 'bookItem';
    this.bookListHtml.appendChild(listNode);
  };

  #hideListItem = (book) => {
    const li = document.querySelector(`#book${book.index}`);
    li.classList.add('hidden');
  };

  #attachRemoveMethod = (book) => {
    const button = document.querySelector(`#${`button${book.index}`}`);
    button.addEventListener('click', () => {
      this.bookCollection = this.bookCollection.filter(
        (bookGot) => bookGot.index !== book.index
      );
      this.#saveToLocalStorage(this.bookCollection);
      this.#hideListItem(book);
      this.emptyCheck();
    });
  };

  #saveToLocalStorage = (bookCollection) => {
    const storageManager = new LocalStorageManager();
    storageManager.save(bookCollection);
  };

  display = () => {
    this.#clear();
    this.bookCollection.forEach(this.#displayBook);
    this.bookCollection.forEach(this.#attachRemoveMethod);
    this.emptyCheck();
  };

  emptyCheck = () => {
    if (this.bookCollection.length === 0) {
      const li = document.createElement('li'); 
      li.className = 'bookItem'
      li.innerHTML = 'No books found.';
      this.bookListHtml.appendChild(li);
    }
  };
}
