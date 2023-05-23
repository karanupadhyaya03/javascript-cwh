console.log("Tutorial 17");

document.getElementById("heading").addEventListener("click", (e) => {
  console.log("heading clicked");
  let variable = e.target.className;
  console.log("class: " + variable); // returns array for multiple classes
  //   location.href = "//youtube.com";
});
