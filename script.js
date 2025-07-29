//Todo List Application
// This script handles the functionality of a simple Todo List application.


const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();
  if (todoText) {
    addTodoItem(todoText);
    todoInput.value = "";
  }
});

function addTodoItem(text) {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between align-items-center";

  const textSpan = document.createElement("span");
  textSpan.textContent = text;

  const updateButton = document.createElement("button");
  updateButton.className = "btn btn-success btn-sm mr-7 important";
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", function () {
    const newText = prompt("Update your todo:", textSpan.textContent);
    if (newText) {
      textSpan.textContent = newText;
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  const buttonGroup = document.createElement("div");
  buttonGroup.appendChild(updateButton);
  buttonGroup.appendChild(deleteButton);
  buttonGroup.className = "d-flex gap-2";

  listItem.appendChild(textSpan);
  listItem.appendChild(buttonGroup);
  todoList.appendChild(listItem);
}
