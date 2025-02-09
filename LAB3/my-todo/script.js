document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todoInput");
    const addButton = document.querySelector(".btn");
    const todoList = document.getElementById("todoList");
    const todoCount = document.getElementById("todoCount");
    const deleteButton = document.getElementById("deleteButton");
  
    function updateCounter() {
      const totalTasks = todoList.children.length;
      todoCount.textContent = totalTasks;
    }
    function addTask() {
      const taskText = todoInput.value.trim();
  
      if (taskText === "") {
        alert("Enter the task!");
        return;
      }
      const li = document.createElement("li");
      li.innerHTML = `
        <p>
          <input type="checkbox" />
          <span>${taskText}</span>
          <button class="delete-task">×</button>
        </p>
      `;
  
      todoList.appendChild(li);
      todoInput.value = "";
      updateCounter();
      const deleteTaskButton = li.querySelector(".delete-task");
      deleteTaskButton.addEventListener("click", function () {
        li.remove();
        updateCounter();
      });
  
      const checkbox = li.querySelector("input[type='checkbox']");
      checkbox.addEventListener("change", function () {
        const taskSpan = li.querySelector("span");
        if (checkbox.checked) {
          taskSpan.classList.add("disabled");
        } else {
          taskSpan.classList.remove("disabled");
        }
      });
    }
  
    addButton.addEventListener("click", addTask);
  
    todoInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTask();
      }
    });
    deleteButton.addEventListener("click", function () {
      todoList.innerHTML = ""; 
      updateCounter(); 
    });
  });