console.log("Tutorial 58");

const mySet = new Set();
console.log(mySet);

// adding values
mySet.add("this");
mySet.add("is");
mySet.add("mySet");
mySet.add("this");
mySet.add(334);
mySet.add(true);

console.log(mySet);

// other way
// let mySet2 = new Set([1, 2, "adf", false, { a: 4, b: 8 }]);
// console.log(mySet2);

console.log(mySet.size);
console.log(mySet.has(334));

if (mySet.has("this")) {
  mySet.delete("this");
}

console.log(mySet);

// Iteration on set
for (let item in mySet) {
  console.log("using for-in");
  console.log(item);
}
mySet.forEach((item) => {
  console.log("using forEach");
  console.log(item);
});

console.log(Array.from(mySet)[2]);
