export default class LocalStorageManager {
  constructor(bookCollection) {
    this.bookCollection = bookCollection;
  }

    save=() => {
      const stringObject = JSON.stringify(this.bookCollection);
      window.localStorage.setItem('books', stringObject);
    }

   static retrieve=() => {
     const serializedObject = window.localStorage.getItem('books');
     const array = JSON.parse(serializedObject) || [];
     return array;
   }
}