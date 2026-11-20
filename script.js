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
