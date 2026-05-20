
let input = document.getElementById("dynamic");
let button = document.getElementById("btn");
let list = document.getElementById("list");

// enter text into input box to ADD
button.addEventListener("click", function (e) {
  e.preventDefault();

  if (input.value.length === 0) {
    alert("Please add to list");
  } else {

    // create list item, its text and accompanying buttons
    let listItem = document.createElement("li");
    let span = document.createElement("span");

    let newButton = document.createElement("button");
    let buttonTwo = document.createElement("button");
    newButton.textContent = "EDIT";
    newButton.classList.add("edit-btn");

    buttonTwo.textContent = "DEL";
    buttonTwo.classList.add("del-btn");


    listItem.append(span, newButton, buttonTwo);

    console.log(listItem);

    // add list item to big list
    span.textContent = input.value;

    // save data
    let myList = [];
    localStorage.setItem ("list", JSON.stringify(myList));
    list.append(listItem);
     
    input.value = "";

    // that DEL button
    buttonTwo.addEventListener("click", function () {
      listItem.remove();
    });

    // that EDIT button
    newButton.addEventListener("click", function (e) {
      e.preventDefault();
      let editedText = prompt("Edit your task");
      if (editedText !== null && editedText !== "") {
        span.textContent = editedText;
      } else {
        console.log("User cancelled the prompt");
      }
    });
  }

}
  
);

let savedList = JSON.parse(localStorage.getItem("list"));
console.log(savedList);
