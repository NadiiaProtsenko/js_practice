import Animal from './Animal.js';

export default class Dog extends Animal {
    constructor(color, name, type, breed, age) {
        super(color, name, type);
        this.breed = breed;
        this.age = age;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }

    fetch() {
        console.log(`${this.name} is fetching.`);
    }
}
