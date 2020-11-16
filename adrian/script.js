//1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe = () => {
    return `${this.name}, ${this.age} years old`;
  };
}

// const napoleon = new Person("Napoleon", 234);

//2
class Cylinder {
  constructor({ height, radius }) {
    this.height = height;
    this.radius = radius;
  }

  calcVolume = () =>
    (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
}

const smallCylinder = new Cylinder({ height: 10, radius: 3 });
// console.log(smallCylinder.calcVolume());

//3
class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = undefined;
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

  stop = () => {
    clearInterval(this.timer);
  };
  start = () => {
    this.render();
    this.timer = setInterval(this.render, 1000);
  };
}
// let clock = new Clock1({ template: "h:m:s" });
// clock.start();
// setInterval(clock.stop, 3000);

//4
class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }

  increaseVolume = () => {
    if (this.volume < 100) {
      this.volume++;
    }
  };
  decreaseVolume = () => {
    if (this.volume > 0) {
      this.volume--;
    }
  };
  setChannel = () => {
    this.channel = Math.floor(Math.random() * (50 - 1 + 1) + 1);
  };
  reset = () => {
    this.channel = 1;
    this.volume = 50;
  };

  status = () =>
    console.log(
      `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    );
}

const tv1 = new TV("Samsung");
// tv1.increaseVolume();
// tv1.increaseVolume();
// tv1.decreaseVolume();
// tv1.setChannel();
// tv1.status();
// tv1.reset();
// tv1.status();
