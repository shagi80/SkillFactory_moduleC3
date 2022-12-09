function Device(){
  this.OFF_MESSAGE = "i can't do it, i'm is off"
  this.name = "no name",
  this.power = 0,
  this.turnedOn = false
};

Device.prototype.switchOn = function(){
  this.turnedOn = true;
  console.log(`${this.name}: i'm turned on !`);
};
  
Device.prototype.switchOff = function(){
  this.turnedOn = false;
  console.log(`${this.name}: i'm turned off !`);
};

function DoorBell(name, power, sound){
  this.name = name,
  this.power = power,
  this.sound = sound
};

DoorBell.prototype = new Device();

DoorBell.prototype.ring = function(){ 
  const text = (this.turnedOn)?this.sound:this.OFF_MESSAGE;
  console.log(`${this.name}: ${text}`)
};

function WebStation(name, power, maxVolume){
  this.name = name,
  this.power = power,
  this.maxVolume = false||maxVolume 
};

WebStation.prototype = new Device();

WebStation.prototype.getWeather = function(){
  const text = (this.turnedOn)?(this.maxVolume)?"THE WEATHER IS FINE !!!":"the weather is fine":this.OFF_MESSAGE; 
  console.log(`${this.name}: ${text}`)
};

const bell = new DoorBell("myBell", 3, "Din-Don");

const alice = new WebStation("Alice", 10);


bell.ring();
bell.switchOn();
bell.ring();


alice.switchOn();
alice.getWeather();
alice.maxVolume = true;
alice.getWeather();

bell.switchOff();
alice.switchOff();