console.log("Tutorial 27");

// object literal for creating object
let car = {
  name: "chirron",
  topSpeed: 480,
  run: function () {
    console.log("running");
  },
};

// new xyzw() is a constuctor

function GenerateCar(name, topSpeed) {
  this.name = name;
  this.topSpeed = topSpeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
}

car1 = new GenerateCar("porche", 359);

console.log(car);
