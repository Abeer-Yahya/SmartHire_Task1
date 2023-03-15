function Employee(name, category, level, account) {
  (this.fullName = name),
    (this.category = category),
    (this.level = level),
    (this.account = account);
}

// input new employees from form, add new cards for them and add them to the local storage

let form = document.getElementById("form");
let allEmployees = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let fullName = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let level = document.getElementById("levels").value;
  let account = document.getElementById("account").value;
  let newEmployee = new Employee(fullName, category, level, account);

  allEmployees.push(newEmployee);
  saveToLocal();
  addCard(newEmployee);
  document.forms[0].reset();
});

let cardContainer = document.getElementById("card-container");

function addCard(newEmployee) {
  let card = document.createElement("div");
  cardContainer.append(card);

  let cardText = document.createElement("div");
  card.append(cardText);

  let nameH2 = document.createElement("h2");
  nameH2.textContent = newEmployee.fullName;
  cardText.append(nameH2);

  let p = document.createElement("p");
  p.textContent = "Level: " + newEmployee.level;
  cardText.append(p);

  let p2 = document.createElement("p");
  p2.textContent = "Job Title: " + newEmployee.category;
  cardText.append(p2);

  let p3 = document.createElement("p");
  p3.textContent = "Account: " + newEmployee.account;
  cardText.append(p3);

  // let an = document.createElement("a");
  // const t = document.createTextNode("LinkedIn");
  // an.setAttribute("href", newEmployee.account);
  // an.appendChild(t);
  // p3.appendChild(an);
}

function saveToLocal() {
  let strArr = JSON.stringify(allEmployees);
  localStorage.setItem("employees", strArr);
}

function getFromLocal() {
  let jsonArr = localStorage.getItem("employees");
  let arr = JSON.parse(jsonArr);
  allEmployees = arr;
  arr.forEach((ele) => {
    addCard(ele);
  });
  console.log(arr);
}

if (localStorage.getItem("employees") != null) {
  getFromLocal();
}
