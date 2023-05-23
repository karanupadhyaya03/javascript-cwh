// Premitive data types

// string
const name = "Karan";
console.log("my name is " + name);
console.log("data type " + typeof name);

// numbers
const age = 19;
console.log("data type " + typeof age);

// boolean
const isElec = true;
console.log("data type " + typeof isElec);

// null
const nulVar = null;
console.log("data type " + typeof nulVar); // although it says object data type but is a premitive data type

// undefined
const undef = undefined;
console.log("data type " + typeof undef);

// Reference data types

// Array
const arr = [3, 4, 2, 1, true, "string"];
console.log("data type " + typeof arr);

// Object literals

let marks = {
  karan: 83,
  kanxo: 32,
  jetho: 33,
};
console.log(typeof marks);

function findName() {}
console.log(typeof findName);

let date = new Date();
console.log(typeof date); // also an object
