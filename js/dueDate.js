// duedate.js - Feature: due dates (overdue tasks are highlighted).

// 1. Add a date picker to the form.
document
  .getElementById("form-extras")
  .insertAdjacentHTML(
    "beforeend",
    '<label class="field">Due date' +
      '<input type="date" id="due-input"></label>',
  );

const dueInput = document.getElementById("due-input");

// Today's date as text like 2026-11-16 (same format the date picker uses).
function getTodayText() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return now.getFullYear() + "-" + month + "-" + day;
}

// 2. Save the chosen date with each new task.
extraDataReaders.push(function () {
  return { due: dueInput.value };
});

// 3. Show the due date on each task.
taskDecorators.push(function (task, info) {
  if (!task.due) {
    return;
  }

  const today = getTodayText();
  const label = document.createElement("span");
  label.className = "due";

  if (!task.done && task.due < today) {
    label.classList.add("overdue");
    label.textContent = "Overdue: " + task.due;
  } else if (!task.done && task.due === today) {
    label.classList.add("today");
    label.textContent = "Due today";
  } else {
    label.textContent = "Due: " + task.due;
  }

  info.appendChild(label);
});
