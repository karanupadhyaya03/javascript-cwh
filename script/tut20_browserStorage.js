console.log("Tutorial 20");
//data is stored in terms of Local Storage or Session in key value pair
// local storage: remains
// session storage: cleared when browser restarts
localStorage.setItem("name", "karan");
localStorage.setItem("name2", "karan2");

// to clear local storage
// localStorage.clear();

// to clear particular key
// localStorage.clear("name2");

let name = localStorage.getItem("name");
console.log(name);

let impArray = ["Andi", "mandi", "shandi"];
// localStorage.setItem("trick", impArray); // saved as a string

localStorage.setItem("trick", JSON.stringify(impArray)); // looks like an array but is a string

trickStr = localStorage.getItem("trick");

// to save as array
trickArr = JSON.parse(trickStr);
console.log(trickArr);
