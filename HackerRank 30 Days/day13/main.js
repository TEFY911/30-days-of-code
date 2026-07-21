class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Cannot instantiate abstract class');
        }
        this.title = title;
        this.author = author;
    }

    display() {
        throw new Error('Abstract method');
    }
}

class MyBook extends Book {
    constructor(title, author, price) {
        super(title, author);
        this.price = price;
    }

    display() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
}

const title = readLine();
const author = readLine();
const price = parseInt(readLine(), 10);

const book = new MyBook(title, author, price);
book.display();
