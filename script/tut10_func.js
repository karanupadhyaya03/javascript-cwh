console.log("tutorial 10");

// or you can declare it as: greet = function(name1, name2)

function greet(name1 = "Ramesh", name2 = "Suresh") {
  // if no parameters given, default value
  console.log(`Hello ${name1} and ${name2},
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde maiores, hic error harum corporis suscipit nisi quo sunt! Ad nam veritatis consequuntur vel magnam quo nemo, rem ipsa a quis!`);

  return "function works perfectly";
}

let name1 = "Karan";
let name2 = "Jeevan";

let val = greet(name1, name2);
console.log(val);

greet();

let array = ["assam", "arunachal", "nagaland"];
array.forEach(function (element, index, array) {
  console.log(index, element);
});

// or
array.forEach((element, index) => {
  console.log(index, element);
});

// SCOPE: data declared in function can be accessed globally or not
// let, const have block level scope
// var has function level scope

var i = 230;

function ui(name) {
  var i = 9;
  console.log(i);
  return `This is ${name} ui`;
}
console.log(ui("karan"), i);
