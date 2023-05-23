console.log("Tutorial 30");
// object created using object literal: inherits from Object.prototype
// but custom constructor: inherits from constructor

/**********OLDER JS VERSION********/
const proto = {
  slogan: function () {
    return `do code`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

const ramesh = Object.create(proto);
ramesh.name = "ramesh";
ramesh.role = "programmer";
ramesh.changeName("rameshNew");

// prototype inheritance
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

// editing existing slogan
Employee.prototype.slogan = function () {
  return `Code mat kar`;
};

let suresh = new Employee("suresh", 599, 5);
console.log(suresh.slogan());

// programmer inherired from Employee
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}

// to inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// manually set the constructor
Programmer.prototype.constructor = Programmer;

let mahesh = new Programmer("mahesh", 799, 7, "C++");
console.log(mahesh);
