// Object 1: Person
const person = new Object();
person.name = "Janis Joplin";
person.age = 27;
person.occupation = "Teacher";
person.introduce = function() {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I work as a ${this.occupation}.`);
};

// Object 2: Car
const car = new Object();
car.make = "Honda";
car.model = "Civic";
car.year = 2018;
car.start = function() {
    console.log("The car has started.");
};
car.stop = function() {
    console.log("The car has stopped.");
};

// Testing the objects
console.log(person);
person.introduce();

console.log(car);
car.start();
car.stop();
