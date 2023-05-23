console.log("Tutorial 51");

// Iterators

function fruitsIterator(values) {
  let nextIndex = 0;
  // will return an object
  return {
    next: function () {
      if (nextIndex < values.length) {
        // will return object below
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        // return object with only done
        return {
          done: true,
        };
      }
    },
  };
}

const arr = ["apple", "grapes", "oranges", "fadkf"];
console.log(arr);

// using the iterator
const fruits = fruitsIterator(arr);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
