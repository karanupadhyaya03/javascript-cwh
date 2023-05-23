console.log("Tutorial 42");

// button with id myBt
let myBtn = document.getElementById("myBtn");
// div with id contenst
let content = document.getElementById("content");

// function getData() {
//   console.log("Started getData");
//   url = "sample.txt";

//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("Inside second then");
//       console.log(data);
//     });
// }

function getData() {
  console.log("Started getData");
  url = "https://api.github.com/users";

  fetch(url)
    .then((response) => {
      console.log("Inside first then");
      return response.json();
    })
    .then((data) => {
      console.log("Inside second then");
      console.log(data);
    });
}

function postData() {
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = `{"name":"name21","salary":"123","age":"23"}`;
  params = {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// console.log("Before running getData");
// getData();
// console.log("After running getData");
postData();
