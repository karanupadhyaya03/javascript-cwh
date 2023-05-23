console.log("Tutorial 43");

// async: returns a promise
async function ramesh() {
  // you can wait for a promise to resolve
  console.log("Inside function");
  const response = await fetch("https://api.github.com/users");

  console.log("before response");
  const users = await response.json();
  console.log("users received");
  return users;

  //   return "ramesh";
}

console.log("Before calling function");
let a = ramesh();
console.log("After calling function");
console.log(a);
a.then((data) => console.log(data));
console.log("last line of js file");
