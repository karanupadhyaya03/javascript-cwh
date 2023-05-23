console.log("Tutorial 46");

let reg = /ramesh/; // is a regular expression literal
// reg = /ramesh/g; // g for global search
// reg = /ramesh/i; // i for case insensitivity
console.log(reg);
console.log(reg.source);

// Functions to match expressions
let s = "This is great, ramesh! adsfa ramesh asdfa adfakl rAmeSH";

/* 
exec(): returns array for match, null for no match
*/

let result = reg.exec(s); // is an object if found else null
console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);

/*
test() - returns true or false
*/
result = reg.test(s);
console.log(result);

/* 
match() -> returs array of results or null
    but global expression should be declared
*/

let result3 = s.match(reg); // opposite syntax
console.log(result3);

/* 
search() -> returns index of first match else -1
*/

let result4 = s.search(reg);
console.log(result4);

/*
replace() -> returns replaced string with all replacements
global : all matches replaced
else only first occurance
*/

let result5 = s.replace(reg, "*********");
console.log(result5);
