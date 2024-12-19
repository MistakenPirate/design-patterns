/*
The Abstract Factory pattern allows us to produce families of realted objects without specifying concrete clases. It's useful in situations where we need to create objects that share only some properties and methods.

The way it works is by presenting an abstract factory the client interacts with. The abstract factory calls the corresponding concrete factory given the corresponding logic. And that concrete factory is the one that returns the end object.

Basically it just adds an abstraction layer over the factory method pattern, so that we can create many different types of objects, but still interact with a single factory function or class.

So let's see this with an example. Let's say we're modeling a system for a car company, which builds cars of course, but also motorcycles and trucks.
*/

class Car {
  constructor() {
    this.name = "Car";
    this.wheels = 4;
  }
  turnOn = () => console.log("Vroom");
}

class Truck {
  constructor() {
    this.name = "Truck";
    this.wheels = 8;
  }
  turnOn = () => console.log("RRRRRRMMMMM");
}

class Motorcycle {
  constructor() {
    this.name = "Motorcycle";
    this.wheels = 2;
  }
  turnOn = () => console.log("SSSSHH");
}

// And and abstract factory that works as a single point of interaction for our clients
// Given the type paramter it receives, it will call the corresponding concrete factory

const vehicleFactory = {
  createVehicle: function (type) {
    switch (type) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      case "motorcycle":
        return new Motorcycle();
      default:
        return null;
    }
  },
};

const car = vehicleFactory.createVehicle("car"); // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck"); // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle"); // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }