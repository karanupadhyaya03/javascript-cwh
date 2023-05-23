console.log("Tutorial 60");

let a, b;
[a, b] = [1, 2];
console.log(a, b); // a=1, b=2

let c, d;
// [a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8]; // a=1, b=2, c=3, d=4
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8]; // d = [4, 5, 6, 7, 8]
({ a, b, c, ...d } = { a: 23, b: 323, c: 342, d: 344, e: 666 });

console.log(a, b, c, d);

// object destructuring
laptop = {
  model: "HP fadf",
  age: "88 days",
  gender: "object",
  next: 3423,
  start: function () {
    console.log("started");
  },
};

const { model, age, gender, next, start } = laptop;
console.log(model, age, gender);
start();
