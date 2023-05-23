console.log("Tutorial 34");

setTimeout(() => {
  for (let index = 0; index < 4005; index++) {
    const element = index;
    console.log(`index: ${element}`);
  }
}, 100); // waits for 100 ms and starts printing

console.log("printed");
