var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// var answer1 = students.sort(function(a,b) {
//   return a["age"] - b["age"];
// })


var answer = students.sort(function(a, b) {
  var nameA = a["name"].toUpperCase(); 
  var nameB = b["name"].toUpperCase();
  var age = a.age - b.age; 
  if ((nameA < nameB) - (a.age - b.age)) {
    // console.log(nameA < nameB, "hello");
    return 1;
  }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
});

console.log(answer);