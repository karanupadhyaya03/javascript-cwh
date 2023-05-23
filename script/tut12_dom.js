console.log("Tutorial 12");
let a = document;
a = document.all; // returns a html collection (not an array)
// a = document.body;
// a = document.forms[0];

// Array.from extracts elements in form of an array from html collection
// Array.from(a).forEach(function (element) {
//   console.log(element);
// });

a = document.links[0];
console.log(a);
