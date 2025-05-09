const inputText = document.querySelector("#input-text");
    const addTaskButton = document.querySelector("#add-task-button");
    const taskContainer = document.querySelector("#task-container");

    addTaskButton.addEventListener("click", () => {
      const taskName = inputText.value.trim();
      if (taskName === "") return;

      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item");
      taskItem.innerHTML = taskName;

      const deleteButton = document.createElement("div");
      deleteButton.innerHTML = "X";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.remove();
      });

      taskItem.appendChild(deleteButton);
      taskContainer.appendChild(taskItem);

      inputText.value = "";
    });