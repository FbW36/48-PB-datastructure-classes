// ! 1. Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describes() {
    return `${this.name}, is ${this.age} years old.`;
  }
}

const personOne = new Person("John", 19);

console.log(personOne.describes());

//! 2. Volume

class Volume {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    let volume = Math.PI * (Math.pow(this.radius, 2) * this.height);
    return volume.toFixed(4);
  }
}

const cylinder = new Volume(4, 3);

console.log(cylinder.getVolume());

//! 3. Tick Tock
class Clock {
  constructor(object) {
    this.template = object.template;
    this.timer;
  }

  render = () => {
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
  };

  stop(interval) {
    setInterval(() => clock.stop(clearInterval(this.timer)), interval);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }
}

let clock = new Clock({ template: `h:m:s` });
clock.start();
clock.stop(5000);

// ! 4. TV Class
class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.vol = 50;
  }

  randomChannel() {
    this.channel = Math.floor(Math.random() * 50 + 1);
  }

  manipulateVolume(num) {
    if (num > 0) {
      if (this.vol + num < 101) {
        this.vol += num;
      }
    } else {
      if (this.vol + num > 0) {
        this.vol += num;
      }
    }
  }

  reset() {
    this.channel = 1;
    this.vol = 50;
  }

  render() {
    return `${this.brand} at channel ${this.channel}, volume ${this.vol} `;
  }
}

let tv = new TV("Panasonic");
console.log(tv.render());

tv.randomChannel();
tv.manipulateVolume(-20);
console.log(tv.render());

tv.reset();
console.log(tv.render());
