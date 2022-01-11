export default class LocalStorageManager {
    save=(bookCollection) => {
      const stringObject = JSON.stringify(bookCollection);
      window.localStorage.setItem('books', stringObject);
    }

    retrieve=() => {
      const serializedObject = window.localStorage.getItem('books');
      const array = JSON.parse(serializedObject) || [];
      return array;
    }
}