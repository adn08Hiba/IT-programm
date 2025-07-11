const tasks = [];
let currentId = 0;

const form = document.querySelector("form");
const input = document.getElementById("taskInput");
const listDiv = document.querySelector(".listTasks");

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Veuillez entrer une tâche !");
    return;
  }

  const taskObj = {
    task_id: currentId,
    text: taskText,
    done: false
  };
  tasks.push(taskObj);
  currentId++;

  console.log("Tach ajoutée :", taskObj);

  const taskContainer = document.createElement("div");
  taskContainer.className = "taskItem";
  taskContainer.setAttribute("data-task-id", taskObj.task_id);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", doneTask);

  const label = document.createElement("label");
  label.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
  deleteBtn.className = "deleteBtn";

  deleteBtn.addEventListener("click", deleteTask);

  taskContainer.appendChild(deleteBtn);
  taskContainer.appendChild(checkbox);
  taskContainer.appendChild(label);

  listDiv.appendChild(taskContainer);

  input.value = "";
}

function doneTask(event){
  const checkbox = event.target;
  const taskContainer = checkbox.parentElement;
  const taskId = parseInt(taskContainer.getAttribute("data-task-id"));
  const task = tasks.find(t => t.task_id === taskId);
  if(task){
    task.done = checkbox.checked;
    const label = taskContainer.querySelector("label");
    if(task.done){
      label.style.textDecoration = "line-through";
      label.style.color = "red";
    }else{
      label.style.textDecoration = "none";
      label.style.color = "black";
    }
  }
}

function deleteTask(event){
  const button = event.target.closest("button");
  const taskContainer = button.parentElement;
  const taskId = parseInt(taskContainer.getAttribute("data-task-id"));

  taskContainer.remove();

  const index = tasks.findIndex(t => t.task_id === taskId);
  if (index !== -1){
    tasks.splice(index, 1);
  }
}
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", function () {
  tasks.length = 0;

  const allTasks = document.querySelectorAll(".taskItem");
  allTasks.forEach(task => task.remove());
});