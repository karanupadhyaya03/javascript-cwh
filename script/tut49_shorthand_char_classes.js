console.log("Tutorial 49");

/*
Character classes
*/

let regex = /\wamesh/; // word char: -,_, alphabet or number
regex = /\w+adfkas/; // \w+: one or more word characters
regex = /\Wfadj/; // \W: non word char
regex = /\W+/; // \W+: more than one non word char
regex = /\dadfa/; // \d: any digit
regex = /\d+adfa/; // \d+: more than 1 digit
// non digit similar as non word
regex = /\sdfafdna/; // match whitespace char
// similar for more than one/non whitespace
regex = /adfa\b/; // another word starts after adfa // adfa is a word boundary

/* 
Assertions
*/
regex = /k(?=a)/; // there should be a 'a' after 'k'
regex = /k(?!=a)/; // any char except 'a' after 'k'

let str = "rameshasdjfna is ramesh";

let result = regex.exec(str);
console.log("Result from exec is ", result);
if (regex.test(str)) {
  console.log(`The string "${str}" matches the expression "${regex.source}"`);
} else {
  console.log(
    `The string "${str}" doesn't match the expression "${regex.source}"`
  );
}
