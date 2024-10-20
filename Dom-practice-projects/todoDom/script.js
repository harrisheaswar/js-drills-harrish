let todoInput = document.querySelector("#todo-input");

let todoSet = document.querySelector(".todo-list");
let todoItemDummy = document.querySelector(".todo-item-dummy");

checkListCount();

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let newInput = e.target.value;

    let newTodoItem = todoItemDummy.cloneNode(true);
    newTodoItem.classList.remove("todo-item-dummy");
    newTodoItem.classList.add("todo-item");
    newTodoItem.setAttribute("id", e.target.value);
    let todoText = newTodoItem.querySelector("span");
    let updateInput = newTodoItem.querySelector(".update-input");
    updateInput.value = newInput;
    todoText.innerText = newInput;
    todoSet.append(newTodoItem);
    e.target.value = "";
  }

  checkListCount();
});

todoSet.addEventListener("click", (e) => {
  let clickedBtn = e.target;
  if (clickedBtn.closest(".edit-btn")) {
    let editBtn = e.target.closest(".edit-btn");
    let item = editBtn.parentElement;

    let saveBtn = item.querySelector(".save-btn");
    let updateInput = item.querySelector(".update-input");
    let todoTitle = item.querySelector(".todo-title");

    saveBtn.style.display = "inline";
    updateInput.style.display = "inline";
    editBtn.style.display = "none";
    todoTitle.style.display = "none";
  } else if (clickedBtn.closest(".save-btn")) {
    let item = clickedBtn.closest("li");
    let saveBtn = clickedBtn.closest(".save-btn");
    let updatedText = item.querySelector(".update-input");
    let editBtn = item.querySelector(".edit-btn");
    let todoTitle = item.querySelector(".todo-title");
    todoTitle.innerText = updatedText.value;
    saveBtn.style.display = "none";
    updatedText.style.display = "none";
    todoTitle.style.display = "inline";
    editBtn.style.display = "inline";
  } else if (clickedBtn.closest(".trash-btn")) {
    let item = clickedBtn.closest(".trash-btn").parentElement;

    item.remove();
  }
  checkListCount();
});

function checkListCount() {
  let children = todoSet.children;
  if (children.length === 1) {
    let text = document.querySelector(".empty-list");
    text.style.display = "flex";
  } else {
    let text = document.querySelector(".empty-list");
    text.style.display = "none";
  }
}
