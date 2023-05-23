console.log("Tutorial 16");

// CREATING AN ELEMENT
let element = document.createElement("li");

// Or you could have directly created a text node

let text = document.createTextNode("Created text node");
element.appendChild(text);

// to add a class name to the li element
// flow: create element -> create a text node -> put text node inside the element -> set class, attributes -> put element in li

element.className = "childul";
element.id = "createdLi";
element.setAttribute("title", "myTitle");
// element.innerText = "Set element";
// element.innerHTML = "<b>Set bold element</b>";

let list = document.querySelector("ul.this");

// list.appendChild(element); // to append child

// console.log(element);

// REPLACING AN ELEMENT
let elem2 = document.createElement("h3");

elem2.id = "elem2";
elem2.className = "elem2";

let tNode = document.createTextNode("created node for elem2");

elem2.appendChild(tNode);
element.replaceWith(elem2);

console.log(elem2);
console.log(element);
