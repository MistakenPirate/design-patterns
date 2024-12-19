/*
    The Factory method pattern provides an interface for creating objects that can be modified after creation. The cool thing about this is that the logic for creating our objects is centralized in a single place,simplifying and better organizing our code.

    This pattern is used a lot and can also be implemented in two different ways, via classes or via factory functions (functions that return an object)
*/

class AlienClass {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
  }
  fly = () => console.log("ZZZZZZZZZAo");
  sayPhrase = () => console.log(this.phrase);
}

const alien1 = new AlienClass("Sam", "I'm Sam the alien!");

console.log(alien1.name);
console.log(alien1.phrase);
alien1.fly();

function Alien(name, phrase) {
  this.name = name;
  this.phrase = phrase;
  this.species = "alien";
}

Alien.prototype.fly = () => console.log("ZZZZZZZZAo");
Alien.prototype.sayPhrase = () => console.log(this.phrase);

const alien2 = new Alien("Sam", "I'm Sam the alien!");

console.log(alien2.name);
console.log(alien2.phrase);
alien2.fly();
