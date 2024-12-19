/*
Singleton is a design pattern that ensures that a class has only one immutable instance. Said simply, the singleton pattern consists of an object that can't be copied or modified. It's often useful when we want to have some immutable single point of truth for our application.

let's say for example we want to have all of our app's configuration in a single object. And we want to disallow any duplication or modification of that object.

Two ways of implementing this pattern are using object literals and classes:
*/

const Config = {
  start: () => console.log("App has started"),
  update: () => console.log("App has updated"),
};

// We freeze the object to prevent new properties being added and existing properties being modified or removed

Object.freeze(Config);

Config.start(); // "App has started"
Config.update(); // "App has updated"

Config.name = "Robert"; //We try to add a new key
console.log(Config); // And verify it doesn't work: {start: [Function: start], update:[Function: update]}

class ConfigClass {
  constructor() {}
  start() {
    console.log("App has started");
  }
  update() {
    console.log("App has updated");
  }
}

const instance = new ConfigClass();
Object.freeze(instance);
