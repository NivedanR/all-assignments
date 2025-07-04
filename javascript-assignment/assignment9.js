function Book(title,author){
    this.title=title;
    this.author=author;
}

Book.prototype.getSummary=function(){
    return `${this.title} by ${this.author}`;
}

const book1=new Book('Atomic Habits','James Clear');
const book2=new Book('Merchant of Venice','Shakesphere');

console.log(book1.getSummary());
console.log(book2.getSummary());