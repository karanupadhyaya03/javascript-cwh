// type conversion and type coercion

let myVar = String(23);
console.log(myVar, typeof myVar);

let boolVar = String(true);
console.log(boolVar, typeof boolVar);

let date = String(new Date());
console.log(date, typeof date);

let arr = [1, 2, 3, 4, 5];
console.log(arr.length, typeof arr);

let i = 55;
console.log(i.toString());

let stri = Number("7727");
console.log(stri, typeof stri);

let num = 53.33235;

console.log("parseInt: ", parseInt(num));
console.log("parseFloat: ", parseFloat(num));
console.log("fixed decimal to 4: ", num.toFixed(4));

// type coercion

let str = "663";
let num1 = 21;
let num2 = Number(str);

console.log("str + num: ", str + num1);
console.log("num + num: ", num1 + num2);
