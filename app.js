var text;
var person = prompt("Please enter your name:");
if (person == null || person == "") {
  confirm("Are you sure you don't want to enter your name?");
} else {
  nameFunction();
}
function nameFunction() {
  if (confirm("So, your Name is " + person + " right?")) {
    text = "Hello " + person + "! Start your search today.";
  } else {
    text = "Start your search.";
  }
  document.getElementById("userName").innerHTML = text;
}

function alertFunction() {
  alert("We are still working to add more loactions, check with us very soon!");
}
