console.log("Tutorial 59");

// Symbol: is a premitive type, not a constructor
const sym1 = Symbol("My identifier");
const sym2 = Symbol("My identifier");
// console.log(sym1);
// console.log(typeof sym1);

console.log(sym1 === sym2); // false: speciality of symbol

const k1 = Symbol();
// const k1 = Symbol("identifier for k1");
const k2 = Symbol();
// const k2 = Symbol("for k2");
myObj = {};
myObj[k1] = "ramesh";
myObj[k2] = "suresh";
myObj["name"] = "mahesh";
// cannot do myObj.k1: since equivalent to myObj["k1"];
// all keys are unique

// Symbols are ignored in for-in
for (let key in myObj) {
  console.log(key, myObj[key]);
}

// also ignored here
console.log(JSON.stringify(myObj));
