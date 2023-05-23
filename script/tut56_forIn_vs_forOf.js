console.log("Tutorial 56");

// for-in and for-of

let people = ["ramesh", "suresh", "mahesh", "rajesh", "prathmesh"];

// Traditional for loop
// for (let index = 0; index < people.length; index++) {
//   const element = people[index];
//   console.log(element);
// }

/*******ITERATING IN OBJECT*******/
obj = {
  name: "rakesh",
  language: "JS",
  hobby: "web dev",
};

/*******traditional for loop********/
// for (let index = 0; index < Object.keys(obj).length; index++) {
//   const element = obj[Object.keys(obj)[index]];
//   console.log(element);
// }

/*******for-in loop*********/
// for (const key in obj) {
//   // key is a string here => obj.key is not defined
//   console.log(obj[key]);
// }

let str = "this is a sample string";
// for (index in str) {
//   console.log(str[index]);
// }

/*******FOR-OF LOOP*******/
for (elem of people) {
  console.log(elem);
}

// for in: gives index
// for of: gives element
