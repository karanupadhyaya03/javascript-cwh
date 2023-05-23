console.log("Tutorial 44");

let a = "ramesh";
a = undefined;

if (a != undefined) {
  throw new Error("This is defined");
  //   console.log("This is defined");
} else {
  console.log("This is undefined");
}

// error inside try block => code inside catch block executed
try {
  adsfasdfa;
  //   console.log("Inside try block");
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("this block always runs");
}
