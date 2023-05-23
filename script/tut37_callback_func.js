console.log("Tutorial 37");

// response from server (assume)
const students = [
  { name: "ramesh", subject: "abcd" },
  { name: "suresh", subject: "defg" },
];

// without a callback function, student gets enrolled after getStudents is called
// list will not be updated properly
// => include the callback function in the enroll function
function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log(`Student enrolled`);
    callback();
  }, 3000);
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log(`list populated`);
  }, 1000);
}

let newStudent = { name: "mahesh", subject: "hijk" };
enrollStudent(newStudent, getStudents);
// getStudents();
