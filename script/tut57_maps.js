console.log("Tutorial 57");
// maps: any type of key or value

const myMap = new Map();
console.log(myMap);

const key1 = "adfa",
  key2 = {},
  key3 = function () {};

//Setting map values
myMap.set(key1, "string as a key");
myMap.set(key2, "blank as a key");
myMap.set(key3, "function as a key");
console.log(myMap);

//Getting map values
let value1 = myMap.get(key2);
console.log(value1);

//Size of map
console.log(myMap.size);

for (let [key, value] of myMap) {
  console.log(key, value);
}

for (let key of myMap.keys()) {
  console.log(key);
}

for (let value of myMap.values()) {
  console.log(value);
}

myMap.forEach((value, key) => {
  console.log("key: ", key);
  console.log("value: ", value);
});
