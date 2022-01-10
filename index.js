import BookManager from './modules/book_manager.js';
import DisplayBooks from './modules/display_books.js';
import FormListener from './modules/form_listener.js';
import Navigation from './modules/navigation.js';
import './modules/date.js';
import './modules/static_date.js';

const bookManager = new BookManager();
const displayBooks = new DisplayBooks(bookManager.bookCollection);
displayBooks.display();
const formListener = new FormListener(bookManager);
formListener.addEventListener();
const navigation = new Navigation();
navigation.attachListeners();
