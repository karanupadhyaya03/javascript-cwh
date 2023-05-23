console.log("Tutorial 53");

// Generators

function* numbersGen() {
  let i = 0;

  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  while (true) {
    yield i++;
  }
}

const gen = numbersGen();
console.log(gen.next()); // returns an object which follows Iterator Protocol
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
