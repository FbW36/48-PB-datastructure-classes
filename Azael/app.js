// # 48-PB-datastructure-classes
// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number. The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  describe() {
    return `${this.name}, ${this.age} years old`;
  }
}

const guy = new Person("Azael", 34);

console.log("guy :>> ", guy, guy.describe());

// #### 2. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

class Cilinder {
  volume(r, h) {
    return (Math.PI * r ** 2 * h).toFixed(4);
  }
}

const cilinder1 = new Cilinder();

console.log("Cilinder :>> ", cilinder1.volume(8, 15));

// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax.
// ```javascript
// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

//I have no idea!!!!!

// ```
// #### 4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50.
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }
  increaseVol(num) {
    return (this.volume = this.volume + num);
  }
  decreaseVol(num) {
    return (this.volume = this.volume - num);
  }
  randomChannel() {
    return (this.channel = Math.floor(Math.random() * (51 - 1) + 1));
  }
  resetTv() {
    this.channel = 1;
    this.volume = 50;
  }

  returnStatus() {
    return `${this.brand} at ${this.channel}, volume ${this.volume}`;
  }
}

let tv1 = new TV("Samsung");
console.log("tv1 :>> ", tv1);

console.log("Random Channel :>> ", tv1.randomChannel());
console.log("tv1.increaseVol() :>> ", tv1.increaseVol(30));
console.log("resetTv() :>> ", tv1.resetTv());
console.log("tv1.increaseVol() :>> ", tv1.increaseVol(30));
console.log("Random Channel :>> ", tv1.randomChannel());
console.log("tv1 :>> ", tv1);
console.log("returnStatus() :>> ", tv1.returnStatus());
