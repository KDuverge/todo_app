const createTodo = e => {
  e.preventDefault();
  if (todoInput.value == "") {
    todoMessage("Please enter a todo!");
    return;
  }

  let todo = document.createElement("li");
  todo.textContent = e.target[0].value;
  todo.className = `todo_items todo_${Math.floor(Math.random() * 9999)}`;
  todo.addEventListener("click", completeTodo);

  let btn = document.createElement("button");
  btn.className = "todo_remove";
  btn.textContent = "X";
  btn.addEventListener("click", removeTodo);

  todo.appendChild(btn);
  todoUl.appendChild(todo);
  todoInput.value = "";
  todoMessage("Todo Added!");
  todoItems.push(todo);
};

const removeTodo = e => {
  e.target.offsetParent.remove();
  todoMessage("Todo Removed!");
};

const completeTodo = e => {
  if (!(e.srcElement.localName == "button")) {
    e.target.classList.toggle("todo_complete");
  }
};

const slideOut = () => {
  if (todos.className === "todo_list") {
    todos.className = "todo_list todo_flyout";
  } else {
    todos.className = "todo_list";
  }
};

const todoMessage = message => {
  errorTodo.textContent = message;
  errorTodo.classList.add("todo_flydown");
  setTimeout(() => {
    errorTodo.classList.remove("todo_flydown");
  }, 2000);
};
