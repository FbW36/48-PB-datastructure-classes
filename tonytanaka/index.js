// 1 Person Class
class Person {
    constructor (name, age) {
        this.personName = name;
        this.personAge = age
    }
    render(){
        return `${this.personName}, ${this.personAge} years old`
    }
}
const friend = new Person('Israel', 64)
console.log(friend.render())

// 2 Volume
class Volume {
    constructor (r, h) {
        this.radius = r;
        this.height = h;
    }
    calculate() {
        return Math.PI * this.radius ** (2 * this.height)
    }
}
const cylinder = new Volume (2, 3)
console.log(cylinder.calculate())

// 3 Tick Tock
let timer;
class Clock {
    constructor ({ template }) {
        this.template = template;
        this.timer = undefined;
    }
    render = () => {
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
      this.timer = setInterval(this.render, 1000);
    };
 
  };
  let clock = new Clock({template: 'h:m:s'});
//  clock.start();
 

  // 4 TV Class
class TV {
    constructor (brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50
    };
    plusVolume () {
        if (this.volume < 100) {
            this.volume++;
            console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`)
        }
    };
    minusVolume () {
        if (this.volume > 0) {
            this.volume--;
            console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`)
        }
    };
    setChannel () {
        this.channel = Math.floor(Math.random() * 51)
        console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`)

    };
    resetTV () {
        this.channel = 1
        this.volume = 50
        console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`)
    };
}
const myTV = new TV ("Telefunken");
myTV.plusVolume()
myTV.plusVolume()
myTV.setChannel()
myTV.plusVolume()
myTV.minusVolume()
myTV.resetTV()