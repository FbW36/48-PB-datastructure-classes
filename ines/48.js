//1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name}, ${this.age} years old`;
  }
}

const person = new Person("Issa", "20/28");
console.log("1==>", person.describe());

//2
class Volume {
  constructor(r, h) {
    this.radius = r;
    this.height = h;
  }

  calculate() {
    let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(2);
  }
}

const cylinder = new Volume(5, 2);
console.log("2==>", cylinder.calculate());

//3

class Clock {
  constructor({ template }) {
    this.template = template;
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

    return output;
  };

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
console.log(clock.render());

//4
class TV {
  constructor(brand, channel, volume) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }

  randomChannel() {
    this.channel = Math.floor(Math.random() * Math.floor(51));
  }

  reset() {
    this.channel = 1;
    this.volume = 50;
  }

  status() {
    if (this.volume < 0) {
      this.volume = 0;
    } else if (this.volume > 100) {
      this.volume = 100;
    }
    return `${this.brand} at channel ${this.channel} at volume ${this.volume} `;
  }
}

const tv = new TV("Samsung", 20, 50);

tv.randomChannel();
tv.reset();
console.log("4==>", tv.status());
