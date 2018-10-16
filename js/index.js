let addBtn = document.querySelector("button"),
  form = document.querySelector("form"),
  todoUl = document.querySelector(".todos"),
  todoItems = [...document.querySelectorAll(".todo_items")],
  todoInput = document.querySelector("input"),
  todoSlideOut = document.querySelector(".todo_button"),
  todos = document.querySelector(".todo_list"),
  errorTodo = document.querySelector(".todo_error"),
  removeBtns = document.querySelectorAll(".todo_remove");

removeBtns.forEach(btn => btn.addEventListener("click", removeTodo));
todoItems.forEach(todo => todo.addEventListener("click", completeTodo));

form.addEventListener("submit", createTodo);
todoSlideOut.addEventListener("click", slideOut);
