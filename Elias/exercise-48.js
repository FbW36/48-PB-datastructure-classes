// 1. Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return console.log(`${this.name}, ${this.age} years old.`);
    }
}

const personDescription = new Person("John", 20);
personDescription.describe();

// 2. Volume
class Cylinder {
    constructor(radius, hight) {
        this.radius = radius;
    }

    calculate() {

    }
}

// 3. Tick Tock
class Clock {
    constructor(object, timer) {
        this.template = object.template;
        this.timer = timer;
    }
    

    render () {
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
    };

    start() {
        this.render();
        this.timer = setInterval(this.render(), 1000);
    };

}
let timer;
let clock = new Clock({ template: 'h:m:s' }, timer);
clock.render();
// clock.start();

// 4. TV Class
class TV {
    constructor (brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
        
    }

    inVolume () {
        if (this.volume <= 100 && this.volume >= 0) {
            return this.volume += 1;
        }
    }
    deVolume () {
        if (this.volume < 100 && this.volume > 0) {
            return this.volume -= 1;
        }
    }
    randomChannel () {
        this.channel = Math.floor(Math.random() * Math.abs(50) - 1);
        return this.channel;
    }
    resetTV () {
        this.channel = 1;
        this.volume = 50;
    }
    output () {
        return console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
    }
}

const tvFunction = new TV("Sony");
tvFunction.inVolume();
tvFunction.inVolume();
tvFunction.inVolume();
tvFunction.inVolume();
tvFunction.inVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.inVolume();
tvFunction.randomChannel();
// tvFunction.resetTV();
tvFunction.output();