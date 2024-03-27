import Animal from './Animal.js';
import Dog from './Dog.js';
import Cat from './Cat.js';

// create objects
const animal = new Animal('brown', 'Lessi', 'dog');
const dog = new Dog('brown', 'Chappi', 'dog', 'poodle', 5);
const cat = new Cat('grey', 'Whiskers', 'cat', 'short', 1);

animal.sayHello(); 
animal.run();      

dog.sayHello();
dog.run();
dog.bark();
dog.fetch();
console.log(`Breed: ${dog.breed}`);
console.log(`Age: ${dog.age}`);

cat.sayHello();
cat.run();
cat.meow();
cat.sleep();
console.log(`Breed: ${cat.breed}`);
console.log(`Age: ${cat.age}`);  