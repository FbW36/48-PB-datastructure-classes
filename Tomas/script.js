let log = console.log;

// 1.
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old"
class Person {
    constructor(name,age) {
        this.userName = name
        this.userAge = age
    }
    describe() {
        return `${this.userName}, ${this.userAge} years old`
    }
}
const person1 = new Person('Martina',18)
log("describe -->", person1.describe())

// 2.
// Write a JavaScript program to get the volume of a cylinder with four decimal places using a class
class Volume {
    constructor(r,h) {
        this.radius = r
        this.height = h
    }
    calcVolume() {
        return Number((3.14 * Math.pow(this.radius,2) * this.height).toFixed(4))
    }
}
const volume = new Volume(4.2,8.1)
log("volume -->", volume.calcVolume())

// 3.
// Rewrite the following code to use the "class" syntax
class Clock {
  
    constructor(object) {
        this.template = object.template
    }
  
    render =() => {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
      log(this.output)
    };
  
    start() {
     this.render();
      this.timer = setInterval(this.render, 1000);
      log(this.output)
    };
    
  }
  let clock = new Clock({template: 'h:m:s'});
  clock.start()
  clock.stop()
  // 4.
  // Create a TV class with properties like brand, channel and volume
  // Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75"
class TV {
    constructor(brand) {
        this.tvBrand = brand
        this.channel = 1
        this.tvVolume = 50
    }
    increaseVolume() {
        if(this.tvVolume > 0 && this.tvVolume < 100) {
            this.tvVolume++
        }
    }
    decreaseVolume() {
        if(this.tvVolume > 0 && this.tvVolume < 100) {
            this.tvVolume--
        }
    }
    setChannelRandomly(max) {
       this.channel = Math.floor(Math.random() * Math.floor(max))
    }
    resetTv() {
        if(this.tvVolume !== 1 || this.channel !== 50) {
            this.channel = 1;
            this.tvVolume = 50
        }
    }
    render() {
        log (`${this.tvBrand} at channel ${this.channel}, volume ${this.tvVolume}`)
    }
}
const tv = new TV('Sony')
tv.increaseVolume()
tv.increaseVolume()
tv.setChannelRandomly(50)
tv.decreaseVolume()
tv.render()
tv.resetTv()



