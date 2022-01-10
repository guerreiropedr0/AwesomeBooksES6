export default class ListHtml {
  constructor(book) {
    this.html = ` 
    
    <h3>"${book.title}" by  ${book.author} </h3>
    
  
  <button class="tolu" id="${`button${book.index}`}">Remove</button>
`;
  }
}
