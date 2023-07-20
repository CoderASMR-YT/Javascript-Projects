let addTask = document.querySelector(".btn-task"),
  taskInput = document.getElementById("text"),
  tasks = document.querySelector(".container-tasks");

addTask.addEventListener("click", () => {
  if (taskInput.value.length > 0) {
    //create parent
    let task = document.createElement("div");
    task.classList.add("task");
    tasks.appendChild(task);

    //create text task
    let textTask = document.createElement("span");
    textTask.classList.add("textTask");
    textTask.innerText = `${taskInput.value}`;
    task.appendChild(textTask);

    //create parent btn
    let wrapperBtn = document.createElement("div");
    wrapperBtn.classList.add("wrapperBtn");
    task.appendChild(wrapperBtn);

    // create btn delete task
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete");
    btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    wrapperBtn.appendChild(btnDelete);

    btnDelete.addEventListener("click", () => {
      task.remove();
    });

    //create btn complete task
    let btnComplete = document.createElement("button");
    btnComplete.classList.add("check");
    btnComplete.innerHTML = `<i class="fa-solid fa-check"></i>`;
    wrapperBtn.appendChild(btnComplete);

    btnComplete.addEventListener("click", () => {
      textTask.classList.add("completed");
      btnComplete.remove();
    });
    taskInput.value = "";
  } else {
    taskInput.classList.add("error");
    setTimeout(() => {
      taskInput.classList.remove("error");
    }, 600);
  }
});
