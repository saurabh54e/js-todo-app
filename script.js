// addBtn.addEventListener('click', addTodo);
const form = document.querySelector(".task-input");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  listContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("checked");
    }

    li.setAttribute("data-index", index);

    const span = document.createElement("span");
    span.textContent = "×";
    li.appendChild(span);

    listContainer.appendChild(li);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inputBox.value.trim() === "") {
    alert("Please enter the task!");
    return;
  }

  tasks.push({
    text: inputBox.value,
    completed: false,
  });

  inputBox.value = "";
  saveData();
  renderTasks();
});

listContainer.addEventListener("click", function (e) {
  const index = e.target.closest("li")?.dataset.index;

  if (e.target.tagName === "LI") {
    tasks[index].completed = !tasks[index].completed;
  }

  if (e.target.tagName === "SPAN") {
    tasks.splice(index, 1);
  }

  saveData();
  renderTasks();
});

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

renderTasks();
