// Define the Library object
const Library = {
    books: [],

    // Method to add a new book to the library
    addBook: function(bookName, bookAuthor, bookYear, bookId) {
        const newBook = {
            name: bookName,
            author: bookAuthor,
            year: bookYear,
            id: bookId
        };
        this.books.push(newBook);
    },

    // Method to print information about a book based on its ID
    printBookInfo: function(bookId) {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            console.log(`Book ID: ${book.id}`);
            console.log(`Name: ${book.name}`);
            console.log(`Author: ${book.author}`);
            console.log(`Year: ${book.year}`);
        } else {
            console.log(`Book with ID ${bookId} not found.`);
        }
    },

    // Method to print information about all books in the library
    printAllBooks: function() {
        console.log("Books available in the library:");
        this.books.forEach(book => {
            console.log(`Book ID: ${book.id}`);
            console.log(`Name: ${book.name}`);
            console.log(`Author: ${book.author}`);
            console.log(`Year: ${book.year}`);
            console.log("-------------------------");
        });
    }
};

// Testing the Library object
Library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 1);
Library.addBook("To Kill a Mockingbird", "Harper Lee", 1960, 2);
Library.addBook("1984", "George Orwell", 1949, 3);

Library.printAllBooks();
console.log();
Library.printBookInfo(2);
