console.log("tutorial 28");

// object literal : object.prototype -> some methods are already available

let obj = {
  name: "name1",
  channel: 13,
  address: "hostel",
};

function Obj(name) {
  this.name = name;
}

// you can add new prototype to your constructor(don't edit existing)
Obj.prototype.getName = function () {
  return this.name;
};

// here, obj2.getName() returns "name2"

let obj2 = new Obj("name2");
console.log(obj);
console.log(obj2);
// object literal is not editable
