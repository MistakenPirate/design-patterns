/*
    The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods.

    The end result is very similar to what we get by classes, but with a little bit more flexibility since properties and methods can be shared between objects without depending on the same class.
*/

// declaring our prototype object with two methods
const enemy = {
  attack: () => console.log("Attack!!"),
  flyAway: () => console.log("Fly like an eagle!!"),
};

//declaring another object that will inherit from our prototype
const bug1 = {
  name: "Buggy McFly",
  phrase: "Your debuger doesn't work with me",
};

//With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(bug1, enemy);

//With getPrototypeOf we read the prototype and confirm the previous has worked
console.log(Object.getPrototypeOf(bug1));

console.log(bug1.phrase); // Your debugging doesn't work with me!
console.log(bug1.attack()); // Attack!!
console.log(bug1.flyAway()); // Fly like an eagle!!