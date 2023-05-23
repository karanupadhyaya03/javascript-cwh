console.log("Tutorial 31");

class Employee {
  constructor(name, experience, division) {
    this.name = name;
    this.experience = experience;
    this.division = division;
  }

  slogan() {
    return `I am ${this.name}`;
  }

  joiningYear() {
    return 2022 - this.experience;
  }

  // function can be used without creating an object
  static add(a, b) {
    return a + b;
  }
}

let ramesh = new Employee("ramesh", 4, "Division");
// console.log(ramesh);
// console.log(ramesh.joiningYear());

/********** Inheritance *********/
class Programmer extends Employee {
  constructor(name, experience, division, language) {
    super(name, experience, division);
    this.language = language;
  }

  static multiply(a, b) {
    return a * b;
  }
}

suresh = new Programmer("suresh", 2, "agadf", "python");

console.log(suresh);
console.log(suresh.joiningYear());
console.log(Programmer.multiply(3, 5));
