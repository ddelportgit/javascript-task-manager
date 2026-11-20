const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = [];

function addTask(title) {
  const task = {
    id: Date.now(),
    title: title,
    completed: false,
  };

  tasks.push(task);
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks !== null) {
    tasks = JSON.parse(savedTasks);
  }
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (title === "") {
    return;
  }

  addTask(title);
  saveTasks();
  renderTasks();

  taskInput.value = "";
});

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No tasks yet. Add your first task!";
    taskList.appendChild(li);
    return;
  }

  tasks.forEach(function (task) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.textContent = task.title;

    li.appendChild(checkbox);
    li.appendChild(span);

    taskList.appendChild(li);
  });
}

loadTasks();
renderTasks();
