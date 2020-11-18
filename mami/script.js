// # 48-PB-datastructure-classes
// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number.
// The `Person` class should have a method called describe which returns a string with the following syntax: "name, age years old". So,
// for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name},${this.age} years old`;
  }
}

let prof = new Person("John", 19);
console.log(prof);

console.log(prof.describe());
// #### 2. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.
class Volume {
  constructor(r, h) {
    this.r = r;
    this.h = h;
  }

  calc() {
    return (Math.PI * this.r ** 2 * this.h).toFixed(4);
  }
}

let vol = new Volume(2, 4);
console.log(vol.calc());
// * **Note**: Volume of a cylinder : `V = π(Math.PI)r^2h` - r is the radius and h is the height of the cylinder.

// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax.
// ```javascript

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });

// clock.start();

// #### 4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50.
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class Tv {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }
  increaceVol() {
    if (this.volume < 100) {
      this.volume++;
    }
  }

  decreaceVol() {
    if (this.volume > 0) {
      this.volume--;
    }
  }

  set() {
    this.channel = Math.floor(Math.random() * 50 + 1);
  }

  reset() {
    this.channel = 1;
    this.volume = 50;
  }

  status() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

let setting = new Tv("sony", 5, 10);

console.log(setting.status());
