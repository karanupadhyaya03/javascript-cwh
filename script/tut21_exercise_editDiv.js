console.log("Tutorial 21");

let newDiv = document.createElement("div");

newDiv.appendChild(document.createTextNode("CREATED DIV"));

// console.log(newDiv);
newDiv.className = "createdDiv";
document.body.appendChild(newDiv);

let createdDiv = document.querySelector(".createdDiv");

// console.log(createdDiv);
createdDiv.addEventListener("click", func1);

createdDiv.innerText = localStorage.getItem("editedDiv")
  ? localStorage.getItem("editedDiv")
  : createdDiv.innerText;

function func1(e) {
  //   console.log(e);
  this.contentEditable = true;
  createdDiv.addEventListener("blur", func2);
}

function func2(e) {
  localStorage.setItem("editedDiv", createdDiv.innerText);
  this.contentEditable = false;
}

localStorage.clear();
