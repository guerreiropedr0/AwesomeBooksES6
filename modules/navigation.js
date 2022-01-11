export default class Navigation {
    #hideAll=() => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((node) => {
        node.classList.add('hidden');
      });
    }

    #showSection=(node) => {
      node.classList.remove('hidden');
    }

    #unselectAll=() => {
      const navButtons = document.querySelectorAll('.nav li');
      navButtons.forEach((nav) => {
        nav.classList.remove('selected');
      });
    }

    #select=(node) => {
      node.classList.add('selected');
    }

    #attachList=() => {
      const button = document.querySelector('#list');
      button.addEventListener('click', () => {
        this.#hideAll();
        const section = document.querySelector('.books-display');
        this.#showSection(section);
        this.#unselectAll();
        this.#select(button);
      });
    }

    #attachaddNew=() => {
      const button = document.querySelector('#add-new');
      button.addEventListener('click', () => {
        this.#hideAll();
        const section = document.querySelector('.form-section');
        this.#showSection(section);
        this.#unselectAll();
        this.#select(button);
      });
    }

    #attachContact=() => {
      const button = document.querySelector('#contact');
      button.addEventListener('click', () => {
        this.#hideAll();
        const section = document.querySelector('.contact');
        this.#showSection(section);
        this.#unselectAll();
        this.#select(button);
      });
    }

    attachListeners() {
      this.#attachContact();
      this.#attachList();
      this.#attachaddNew();
    }
}