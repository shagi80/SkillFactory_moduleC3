class Device{
  OFF_MESSAGE = "i can't do it, i'm is off";

  constructor(name, power){
    this.name = name;
    this.power = power;
    this.turnedOn = false;
  }
  
  switchOn(){
    this.turnedOn = true;
    console.log(`${this.name}: i'm turned on !`);
  };
  
  switchOff(){
    this.turnedOn = true;
    console.log(`${this.name}: i'm turned off !`);
  }; 
};


class DoorBell extends Device{
  constructor(name, power, sound){
    super(name, power);
    this.sound = sound;
  };
  
  ring(){ 
    const text = (this.turnedOn)?this.sound:this.OFF_MESSAGE;
    console.log(`${this.name}: ${text}`)
  };
};


class WebStation extends Device{
  constructor(name, power, maxVolume){
    super(name, power);
    this._maxVolume = false||maxVolume;
  };
  
  getWeather(){
    const text = (this.turnedOn)?(this._maxVolume)?"THE WEATHER IS FINE !!!":"the weather is fine":this.OFF_MESSAGE; 
    console.log(`${this.name}: ${text}`)
  };
  
  get maxValue(){
    return this._maxValue;
  };
  
  set maxVolume(value){
    this._maxVolume = value;
  };
};


const bell = new DoorBell("myBell", 3, "Din-Don");

const alice = new WebStation("Alice", 10, true);


bell.ring();
bell.switchOn();
bell.ring();


alice.switchOn();
alice.getWeather();
alice.maxVolume = false;
alice.getWeather();

bell.switchOff();
alice.switchOff();