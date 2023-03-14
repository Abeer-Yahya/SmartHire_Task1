// Handling Form data

function addLi() {
  var txtVal = document.getElementById("txtVal").value,
    listNode = document.getElementById("list"),
    liNode = document.createElement("LI"),
    txtNode = document.createTextNode(txtVal);

  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
}
