
// 1. Person Class

class Person
{
    constructor()
    {}

    setName(name)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    setAge(age)
    {
        this.age = age;
    }

    getAge()
    {
        return this.age;
    }

    describe()
    {
        return `${this.getName()}, ${this.getAge()} years old `;
    }
 
}

const person = new Person()
person.setName('John');
person.setAge(19);
console.log(person.describe());

// ===================================================

// 2. Volume

// V = πr2h

const pi = 3.14;

class CylinderVolume
{
    constructor(r, h)
    {
        this.r = r;
        this.h = h;
    }   

    getR()
    {
        return this.r;
    }

    getH()
    {
        return this.h;
    }

    computeVolume()
    {
        let v = pi * Math.pow(this.getR(), 2) * this.getH();
        console.log(v, typeof Math.pow(this.getR(), 2), this.pi);
        return v;
    }
}

const cylinderVolume = new CylinderVolume(2,5);
console.log( cylinderVolume.computeVolume() );

// =========================================================

// 3. Tick Tock

let timer;

class TickTock
{
    constructor( template )
    {
        this.template = template;
    } 
 
    render(template) 
    {
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
  
    stop() 
    {
      clearInterval(timer);
    }
  
    start() 
    {
      this.render();
      timer = setInterval(render, 1000);
    }

  
} //class
   
// const tickTock = new TickTock({template: 'h:m:s'});
// tickTock.start();

// ================================================================

  // 4. TV Class

  let channel = 1;
  let volume = 50;

  class TV
  {
      constructor(brand, channel, volume)
      {
          this.brand = brand;
      }

      setVolume()
      {
          volume = volume;
      }

      increaseVolume()
      {
          if (volume < 100)
            return volume++;
      }

      decreaseVolume()
      {
          if (volume > 0)
            return volume--;
      }

      getVolume()
      {
          return volume;
      }

      setChannel()
      {
          channel = Math.floor(Math.random() * 50);
      }

      getChannel()
      {
          return channel;
      }

      resetTV()
      {
          channel = 1;
          volume = 50;
      }

      showStatus()
      {
          return `Panasonic at channel ${this.getChannel()}, volume ${this.getVolume()} `;
      }

  }

  const tv = new TV()

  console.log( tv.showStatus() );

  tv.increaseVolume();
  tv.setChannel();
  tv.increaseVolume()

  console.log(tv.showStatus());
