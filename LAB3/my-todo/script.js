document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("todoInput");
  const addTaskBtn = document.querySelector(".btn");
  const taskList = document.getElementById("todoList");
  const taskCount = document.getElementById("todoCount");
  const deleteAllBtn = document.getElementById("deleteButton");

  let tasks = [];

  function updateCounter() {
      taskCount.textContent = tasks.length;
  }

  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
          alert("Enter the task!");
          return;
      }
      
      tasks.push({ name: taskText, done: false });
      renderTasks();
      taskInput.value = "";
  }

  function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
          const taskItem = document.createElement("li");
          taskItem.innerHTML = `
              <p>
                  <input type="checkbox" class="task-done" ${task.done ? "checked" : ""}/>
                  <span class="task-name ${task.done ? "disabled" : ""}">${task.name}</span>
                  <button class="delete-task">×</button>
              </p>
          `;
          
          const checkbox = taskItem.querySelector(".task-done");
          checkbox.addEventListener("change", () => markTaskDone(index));
          
          const deleteBtn = taskItem.querySelector(".delete-task");
          deleteBtn.addEventListener("click", () => deleteTask(index));
          
          taskList.appendChild(taskItem);
      });
      updateCounter();
  }

  function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
  }

  function markTaskDone(index) {
      tasks[index].done = !tasks[index].done;
      renderTasks();
  }

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
          addTask();
      }
  });

  deleteAllBtn.addEventListener("click", function () {
      tasks = [];
      renderTasks();
  });

  renderTasks();
});
