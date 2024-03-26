import Animal from './Animal.js';

export default class Cat extends Animal {
    constructor(color, name, type, breed, age) {
        super(color, name, type);
        this.breed = breed;
        this.age = age;
    }

    meow() {
        console.log(`${this.name} is meowing.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}
