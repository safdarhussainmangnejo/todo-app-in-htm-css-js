function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var task = document.createTextNode(inputValue);
  li.appendChild(task);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("taskOL").appendChild(li);
  }
  document.getElementById("taskInput").value = "";
}
