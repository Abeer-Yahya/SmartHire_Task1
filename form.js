function Employee(fullName, category, level, account) {
  this.fullName = fullName;
  this.jobCategory = category;
  this.jobLevel = level;
  this.linkedinAccount = account;
}

// Accessing on main tag
const main = document.getElementById("main");

// Creating table tag
const table = document.createElement("table");
table.setAttribute("border", 1 + "px");

// Prepending table inside the main tag
main.append(table);

// Creting a thead tag
const thead = document.createElement("thead");

const th1 = document.createElement("th");
th1.textContent = "Full Name";
thead.append(th1);

const th2 = document.createElement("th");
th2.textContent = "Job Title";
thead.append(th2);

const th3 = document.createElement("th");
th3.textContent = "Level";
thead.append(th3);

const th4 = document.createElement("th");
th4.textContent = "LinkedIn";
thead.append(th4);

table.prepend(thead);

// Event code

// Submited button
const submit = document.getElementById("submit");

// accessing on inputs
const full_name = document.getElementById("full_name");
const account = document.getElementById("account_url");

// accessing on selects
const caegory = document.getElementById("categories");
const level = document.getElementById("levels");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const emp = new Employee(
    full_name.value,
    caegory.value,
    level.value,
    account.value
  );
  render(full_name.value, caegory.value, level.value, account.value);
  full_name.value = "";
  caegory.value = caegory[0].value;
  level.value = level[0].value;
  account.value = "";
});

function render(...rows) {
  const tr = document.createElement("tr");
  const users = [];
  for (const row of rows) {
    const td = document.createElement("td");
    td.textContent = row;
    tr.append(td);
    users.push(row);
  }
  table.append(tr);

  setLocalStorage(users);
}

var count = 0;
function setLocalStorage(...users) {
  for (let i = 0; i < users.length; i++) {
    localStorage.setItem(`users ${count}`, JSON.stringify(users));
    count++;
  }
}
