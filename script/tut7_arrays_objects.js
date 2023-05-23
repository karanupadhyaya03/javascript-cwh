console.log("tut 7");

let marks = [32, 54, 32, 55, 65];
const fruits = ["abc", "def", "ghi"];
const mixed = ["str", 54, [2, 4]];

const arr = new Array(54, 66, "string");

// console.log(marks);
// console.log(fruits);
// console.log(mixed);
// console.log(arr);

// console.log(arr.length); // length is a property, not a method => no braces

let index = marks.indexOf(54);
console.log(index);

// push, pop (back); unshift, shift (front)
marks.push(65); // appends at the end
marks.shift(); // removes 1 element from front
marks.unshift(44); // adds new element(s) at front
console.log(marks);

// marks.splice(start_index, no_of_elemets_to_be_removed); // to remove elements
// marks.reverse(); // to reverse the elements

let marks2 = [1, 2, 3, 4];
marks = marks.concat(marks2);
console.log(marks);

// object: key value pair
let myObj = {
  firstName: "Karan",
  lastName: "Upadhyaya",
  age: 19,
  isActive: true,
};

console.log(myObj.firstName);
console.log(myObj["lastName"]);
console.log(myObj.isActive);
