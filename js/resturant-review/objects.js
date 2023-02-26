// const person = {
//   name: {
//     firstName: "Hama",
//     lastName: "Saadwn",
//   },
//   country: "Iraq",
//   age: 26,
//   bio() {
//     console.log(
//       `${this.name.firstName} ${this.name.lastName} is ${this.age} years old.`
//     );
//   },
// };

// function Person(name) {
//   this.name = name;
//   this.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
// }

// Person.prototype.numOfLegs = 2;

// function Person(firstName, lastName) {
//   (this.firstName = firstName), (this.lastName = lastName);
// }

// const hama = new Person("hama", "saadwn");
// const ahmad = new Person("Ahmad");

// console.log(hama.numOfLegs);

// person.city = "slemany";

// person.farewell = () => {
//   console.log("Bye everybody!");
// };

// person.farewell();

class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

const peson1 = new Person("Hama");

peson1.introduceSelf();
