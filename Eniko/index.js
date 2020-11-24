// 1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    render() {
        return `${this.name}, ${this.age} years old`
    }
}

const person = new Person("Annie", "111");
console.log(person.render());

// 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    render() {
        let volume = 3.14 * (this.radius * this.radius) * this.height;
        return `A cylinder with ${this.height} cm height and ${this.radius} cm radius has the volume of ${volume} cm3` 
    }
}
const cylinder = new Cylinder(5, 10);
console.log(cylinder.render());


// Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder.

// 3. Tick Tock
// Rewrite the following code to use the "class" syntax.

class Clock {
    constructor({template}) {
        this.template = template;
    }

    render = () => {   //set Interval global function, just do it all times
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
       this.timer = setInterval(this.render, 60);
    }
}
  
let clock = new Clock({ template: `h:m:s` });
clock.start();


// function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();


// 4. TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TV {
    constructor(brand, chanel, volume) {
        this.brand = brand;
        this.chanel = chanel;
        this.volume = volume;
    }

    changeVolume(num) {
        if (this.volume + num > 0 && this.volume + num < 101) {
            this.volume += num;
        }
    }

    changeChanel() {
        this.chanel = Math.floor(Math.random() * 50); 
    }

    resetTV() {
        this.chanel = 1;
        this.volume = 50;
    }

    render() {
        return `${this.brand} at channel ${this.chanel}, volume ${this.volume}`
    }

}

const tv = new TV("Sony", 1, 50);
tv.changeChanel();
tv.changeVolume(-2);
console.log(tv.render())