console.log("Tutorial 47");

let regex = /ramesh/;
let str = "ramesh, suresh and ramesh";

regex = /^ramu/; // ^ :starts with
regex = /esh$/; // $ :(at the end) ends with
regex = /r.mesh/; // exactly matches ignoring character at .
regex = /r*mesh/; // any number of unmaching characters can be at *
regex = /ru?mx?sh/; // char before ? is optional. match=>include else exclude
regex = /r\*mesh/;

let result = regex.exec(str);
console.log("Result from exec is ", result);
if (regex.test(str)) {
  console.log(`The string "${str}" matches the expression "${regex.source}"`);
} else {
  console.log(
    `The string "${str}" doesn't match the expression "${regex.source}"`
  );
}
