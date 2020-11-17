//* 1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	describe() {
		return `${this.name}, ${this.age} years old.`;
	}
}

const john = new Person('John', 29);
console.log(john.describe()); // John, 29 years old.


//* 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.
// Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder.

class Cylinder {
	constructor(radius, height) {
		this.radius = radius;
		this.height = height;
	}
	calculateVolume() {
		let volume = (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
		return Number(volume);
	}
}

const cylinder = new Cylinder(3, 8);
console.log(cylinder.calculateVolume()); // 226.1947


//* 3. Tick Tock
// Rewrite the following code to use the "class" syntax.

class Clock {
	constructor(obj) {
		this.template = obj.template;
	}
	
	render() {
		let date = new Date();

		let hours = date.getHours();
		hours = hours < 10 ? '0' + hours : hours;

		let mins = date.getMinutes();
		mins = mins < 10 ? '0' + mins : mins;

		let secs = date.getSeconds();
		secs = secs < 10 ? '0' + secs : secs;

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
		this.timer = setInterval(() => this.render(), 1000);
		// this.timer = setInterval(this.render, 1000); // This won't work because setInterval is a global function and render() doesn't exist within its scope.
		// A) the callback function inside setInterval should be an arrow function that returns the result of calling this.render().
		// B) render should be defined as an arrow function above.
	};


}

let clock = new Clock({ template: 'h:m:s' });
clock.start();



//* 4. TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TV {
	constructor(brand) {
		this.brand = brand;
		this.channel = 1;
		this.volume = 50;
	}
	increaseVol() {
		if (this.volume < 100) {
			++this.volume;
		}
	}
	decreaseVol() {
		if (this.volume > 0) {
			--this.volume;
		}
	}
	setChannel() {
		this.channel = Math.ceil(Math.random() * 50);
	}
	reset() {
		this.channel = 1;
		this.volume = 50;
	}
	writeStatus() {
		console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
	}
}

let tvSet = new TV('Panasonic');
tvSet.writeStatus();
for (let i = 0; i < 55; i++) {
	tvSet.decreaseVol();
}
tvSet.setChannel();
tvSet.writeStatus();
tvSet.reset();
tvSet.writeStatus();
