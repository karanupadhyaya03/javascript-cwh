console.log("Tutorial 9");
let arr = [3, 4, 7, 2, 1, 9];
arr.forEach(function (elements, index, array) {
  console.log(elements, index, array);
});

for (let index in arr) {
  console.log(`index: ${index}, element: ${arr[index]}`);
}
