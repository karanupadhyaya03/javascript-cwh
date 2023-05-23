// Strings: Properties, Methods & Template Literals
console.log("Tut 6");

const name = "Karan";
const greeting = "Good morning";

console.log(greeting + " " + name);

let html;

html = "<h1>Heading 1</h1>" + "<p>This is a paragraph</p>";

html = html.concat("this", " str2");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase()); // or toUpperCase

console.log(html[0]);
console.log(html.indexOf("h1")); // output = -1 if doesn't occur, indexOf -> first occurence, lastIndexOf() -> last occurence
console.log(html.charAt(4));
console.log(html.endsWith("2")); // true or false
console.log(html.includes("th")); // true or false
console.log(html.substring(1, 4)); // start index(included), end index(not included)
console.log(html.slice(0, 5));

console.log(html.split(" ")); // splits the string into objects that are separated by ' ', returns an array

console.log(html.replace("This", "It")); // replaces first occurance

let age = 19;
let fruit = `Apple`;
let fruit2 = `Orange`;

let myHtml = `Hello ${name}
            <h1>Heading 2</h1>
            <p>You like ${fruit} and ${fruit2}</p>
            `;
document.body.innerHTML = myHtml;
