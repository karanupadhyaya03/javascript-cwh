console.log("tutorial 14");
/*
element selectors:
1. Single element selector
2. Multi element selector
*/

// 1. SINGLE ELEMENT SELECTOR
let element = document.getElementById("first");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = "red";
// element.innerText = "Karan";
// console.log(element.innerHTML);

// query selector
// let sel = document.querySelector("#first");
// sel = document.querySelector(".child"); // first element of this class name
// sel = document.querySelector("div");
// sel.style.color = "green";

// console.log(sel);

// 2. MULTI ELEMENT SELECTOR
let elems = document.getElementsByClassName("child");

elems = document.getElementsByClassName("container");

// console.log(elems[0].getElementsByClassName("child"));

elems = document.getElementsByTagName("div");

console.log(elems);

Array.from(elems).forEach((element) => {
  console.log(element);
  element.style.color = "blue";
});
