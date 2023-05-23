console.log("Tutorial 48");

let regex = /ramesh/;
/* 
Character sets - []
*/
// regex = /r[a-z]mesh/; // any char from a-z
// regex = /r[a-zA-Z]mesh/;
// regex = /r[ksz]mesh/; // any char a or s or z
regex = /r[^ksz]mesh/; // except a, s & z

/* 
Quantifies
*/
regex = /kar{2}an/; // equivalent to "karran"
regex = /kar{0,2}an/; // equivalent to "kaan" or "karan" or "karran"

/* 
Groupings - () is used
*/
regex = /(kar){2}/; // equivalent to "karkar"

const str = "ramesh is ramesh";

let result = regex.exec(str);
console.log("Result from exec is ", result);
if (regex.test(str)) {
  console.log(`The string "${str}" matches the expression "${regex.source}"`);
} else {
  console.log(
    `The string "${str}" doesn't match the expression "${regex.source}"`
  );
}
