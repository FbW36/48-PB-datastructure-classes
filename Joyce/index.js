//1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person {
  constructor(name, age) {
    this.personName = name;
    this.PersonAge = age;
  }
  describe() {
    return `${this.personName}, ${this.PersonAge} years old.`;
  }
}

const personClass = new Person("Phil", 46);
console.log(personClass.describe());

// 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.
// Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder.
class Volume {
  constructor(height, diameter) {
    this.height = height;
    this.diameter = diameter;
  }
  checkVolum() {
    let radius = this.diameter / 2;
    return this.height * Math.PI * radius * radius;
  }
}

const volumeCylinder = new Volume(8, 6);
console.log(volumeCylinder.checkVolum().toFixed(4));

// 3. Tick Tock
// Rewrite the following code to use the "class" syntax.

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
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
    this.timer = setInterval(() => {
      this.render();
    }, 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
setTimeout(() => clock.stop(), 4000);

//4. TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TVClass {
  constructor(brand) {
    this.brand = brand;
    this.volume = 50;
    this.channel = 1;
  }

  increaseVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log(this.volume);
    }
  }
  decreaseVolume() {
    if (this.volume >= 0) {
      this.volume--;
      console.log(this.volume);
    }
  }

  getChannel() {
    this.channel = Math.floor(Math.random() * 51);
    console.log(this.channel);
  }

  reset() {
    this.channel = 1;
    this.volume = 50;
  }

  render() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume} `;
  }
}

const tvChannel = new TVClass("Panasonic");

tvChannel.increaseVolume();
tvChannel.decreaseVolume();
tvChannel.getChannel();
tvChannel.reset();
console.log(tvChannel.render());
