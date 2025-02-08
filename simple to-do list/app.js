document.getElementById("addTask").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("please enter a task!");
    return;
  }

  let taskList = document.getElementById("taskList");

  //create list item

  let li = document.createElement("li");
  li.textContent = taskText;

  //create "complete " button

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";

  completeBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  //Create "Delete " button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", function () {
    {
      taskList.removeChild(li);
    }
  });
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
