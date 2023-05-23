// Asynchronous JS and XML
// not a programming language, but set of existing technologies
// no reload required
console.log("Tutorial 35");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("fetch button clicked");
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // open the object. true: non blocking request
  //   xhr.open("GET", "sample.txt", true);
  // POST REQUEST
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");

  // what to do on progress
  xhr.onprogress = function () {
    console.log("on progress");
  };

  //   xhr.onreadystatechange = function () {
  //     console.log("ready state: ", xhr.readyState);
  //   };
  xhr.onload = function () {
    if (this.status == 200) {
      // 200: ok
      console.log(this.responseText);
    } else {
      console.log(`error: ${this.status}`);
    }
  };

  params = `{"name":"name1","salary"="232","age":"34"}`;
  // send the request
  xhr.send(params);

  console.log("all done");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("Populate handler clicked");
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // open the object. true: non blocking request
  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText);
      //   console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>${obj[key].employee_name}</li>`;
      }
    } else {
      console.log(`error occured`);
    }
  };

  // send the request
  xhr.send();

  console.log("done fetching");
}
