console.log("Tutorial 15");

let cont = document.querySelector(".no");
cont = document.querySelector(".container");

/*
console.log(cont.childNodes); // but newLine, comments are also shown as child nodes
// we don't want that
console.log(cont.children); // only elements
*/

let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);

let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);

/*
Node types
    1: Element
    2: Attribute
    3: Text node
    8: Comment
    9: document 
    10: docType
*/

let container = document.querySelector("div.container");
console.log(container.children);
// you can traverse children->children->children

/*
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
*/
