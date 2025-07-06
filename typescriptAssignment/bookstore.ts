class Book{
    title: string;
    author: string;
    price: number;
    constructor(title:string,author:string,price:number){
        this.title=title;
        this.author=author;
        this.price=price;
    }

    getDetails():string{
        return `Book: ${this.title} by ${this.author} - ₹${this.price}`;
    }
}

class PremiumBook extends Book{
    deliveryCharge: number;
    constructor(title:string,author:string,price:number,deliveryCharge:number){
        super(title,author,price);
        this.deliveryCharge=deliveryCharge;
    }

    override getDetails(): string {
        const total=this.price+this.deliveryCharge;
        return `Book: ${this.title} by ${this.author} - ₹${total} (Includes Delivery)`;
    }
}

const normalBook = new Book("Clean Code", "Robert C. Martin", 500);
const premiumBook = new PremiumBook("Design Patterns", "Erich Gamma", 700, 50);
console.log(normalBook.getDetails());
console.log(premiumBook.getDetails());