// Object 1: Person
const person = {
    name: "Johny Cash",
    age: 56,
    occupation: "Engineer",
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    },
    celebrateBirthday: function() {
        this.age++;
        console.log(`Happy birthday! I am now ${this.age} years old.`);
    }
};

// Object 2: Car
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("The car has started.");
    },
    stop: function() {
        console.log("The car has stopped.");
    },
    honk: function() {
        console.log("Beep beep!");
    }
};

// Object 3: Book
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    read: function() {
        console.log(`Reading ${this.title} by ${this.author}.`);
    },
    review: function(rating) {
        console.log(`A review of ${this.title}: Rating - ${rating}/5`);
    }
};

// Testing the objects
console.log(person);
person.greet();
person.celebrateBirthday();

console.log(car);
car.start();
car.honk();
car.stop();

console.log(book);
book.read();
book.review(4.5);
