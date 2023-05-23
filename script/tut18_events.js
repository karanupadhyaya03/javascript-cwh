console.log("Tutorial 18");

let btn = document.getElementById("btn");
btn.addEventListener("click", func1);
btn.addEventListener("dblclick", func2);

function func1(e) {
  console.log("button clicked", e);
  e.preventDefault(); // prevents from default behaviour eg: form submission
}

function func2(e) {
  console.log("button double clicked", e);
}
