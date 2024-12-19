/*
The Adapter allows two objects with incompatible interfaces to interact with each other.

Let's say, for example, that your application consults an API that returns XML and sends that information to another API to process that information. But the processing API expects JSON. You can't send the information as it's received since both the interfaces are incompatible. You need to adapt it first.

We can visualize the same concept with an even simpler example. Say we have an array of cities and a function that returns the greatest number of inhabitants ant of those cities have. The number of habitants in our array is in millions, but we have a new city to add that has its habitants without the million conversion.
*/

//Our array of cities
const citiesHabitantsInMillions = [
  { city: "London", habitants: 8.9 },
  { city: "Rome", habitants: 2.8 },
  { city: "New York", habitants: 8.8 },
  { city: "Paris", habitants: 2.1 },
];

//The new city we want to add
const BuenosAires = {
  city: "Buenos Aires",
  habitants: 3100000,
};

//Our adapter function takes our city and converts the habitants properly to the same format all the other cities have

const toMillionAdapter = (city) => {
  city.habitants = parseFloat((city.habitants / 1000000).toFixed(1));
};

toMillionAdapter(BuenosAires);

// We add the new city to the array
citiesHabitantsInMillions.push(BuenosAires);

//And this func returns the largest habitants number
const MostHabitantsInMillions = () => {
  return Math.max(...citiesHabitantsInMillions.map((city) => city.habitants));
};

console.log(MostHabitantsInMillions()); // output: 8.9
