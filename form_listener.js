export default class FormListener {
  constructor(bookManager) {
    this.bookManager = bookManager;
  }

    addEventListener=() => {
      const form = document.querySelector('.form');
      form.addEventListener('submit', (event) => {
        const formData = new FormData(form);
        event.preventDefault();
        const object = {};
        formData.forEach((value, key) => {
          object[key] = value;
        });

        this.bookManager.add(object);
      });
    }
}
