const addToPendingTasks = document.querySelector(".pending-tasks-container ul");
const newTaskInput = document.querySelector(".add-to-list-input input");
const submitButton = document.getElementById("submit-new-task-button");

let completedTasksList = document.querySelector(
  ".completed-tasks-container ul"
);

count = 1;

submitButton.addEventListener("click", () => {
  let listItemIdMaker = document.createElement("li");
  listItemIdMaker.id = count++;
  listItemIdMaker.innerText = `${newTaskInput.value}`;

  let listItemCheckmarkMaker = document.createElement("input");
  listItemCheckmarkMaker.type = "checkbox";

  let listItemDeleteBtnMaker = document.createElement("button");
  listItemDeleteBtnMaker.innerHTML = "Delete";

  listItemIdMaker.append(listItemCheckmarkMaker, listItemDeleteBtnMaker);

  addToPendingTasks.append(listItemIdMaker);

  listItemCheckmarkMaker.addEventListener("click", (e) => {
    console.dir(e.target);
    const clonedTask = e.target.parentElement.cloneNode(true);
    clonedTask.id = clonedTask.id + "c";
    console.log(clonedTask);

    const removal = document.getElementById(e.target.parentElement.id + "c");
    // e.target.parentElement.remove();
    if (e.target.checked === true) {
      e.target.parentElement.style.textDecoration = "line-through";
      completedTasksList.appendChild(clonedTask);
    } else {
      e.target.parentElement.style.textDecoration = "none";
      removal.remove();
      console.log(e.target.parentElement.id);
    }
  });

  const deleteTask = completedTasksList.querySelectorAll("li button");
  console.log(deleteTask);
  listItemDeleteBtnMaker.addEventListener("click", (e) => {
    const removalPending = document.getElementById(e.target.parentElement.id);
    const removalCompleted = document.getElementById(
      e.target.parentElement.id + "c"
    );
    if (removalCompleted) {
      removalCompleted.remove();
    }
    removalPending.remove();
  });
});
