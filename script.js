document.addEventListener("DOMContentLoaded", function() {
    var taskForm = document.getElementById("task-form");
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var taskName = taskInput.value.trim();
        if (taskName !== '') {
            var listItem = document.createElement("li");
            listItem.textContent = taskName;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed"); // Aqui está a correção
        }
    });
});