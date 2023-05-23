console.log("Tutorial 39");

// Promise
// -resolve
// -reject
// -pending

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Promise resolved");
        resolve();
      } else {
        console.log("Promise rejected");
        reject("Error 404");
      }
      console.log;
    }, 2000);
  });
}

// .then() -> if resolve()
// .catch() -> if reject()
func1()
  .then(function () {
    console.log("Thanks for resolving");
  })
  .catch(function (error) {
    console.log("rejected, not good");
    console.log(`error: ${error}`);
  });
