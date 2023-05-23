console.log("Tutorial 13");

let a = document.links;

let desiredStrings = [];
Array.from(a).forEach(function (element) {
  let link = element.toString();
  //   console.log(link);
  if (link.includes("code")) {
    desiredStrings.push(link);
  }
});

console.log(desiredStrings);
