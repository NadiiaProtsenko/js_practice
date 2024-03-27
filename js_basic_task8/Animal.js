// Animal.js

export default class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }

    sayHello() {
        console.log(`Hello! I'm ${this.name} and I'm a ${this.type}.`);
    }

    run() {
        console.log(`${this.name} is running.`);
    }
}
