// tasks.js - the list of tasks and the functions that change it.

let tasks = loadTasks();

function addTask(title, extraData) {
  const task = {
    id: Date.now() + '-' + Math.floor(Math.random() * 1000),
    title: title,
    done: false
  };
  Object.assign(task, extraData); // extra data comes from feature files
  tasks.push(task);
  saveTasks(tasks);
}

function toggleTask(id) {
  tasks.forEach(function (task) {
    if (task.id === id) {
      task.done = !task.done;
    }
  });
  saveTasks(tasks);
}

function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  saveTasks(tasks);
}

// ---------------------------------------------------------------
// Feature files (priority.js, search.js, ...) plug into the app by
// adding a function to one of these lists.
// ---------------------------------------------------------------

// Each function returns an object with extra data to save with a new task.
const extraDataReaders = [];

// Each function is called as (task, infoDiv, listItem) and can add
// extra information (like a badge) to a task row.
const taskDecorators = [];

// Each function is called as (task) and returns true to show the task
// or false to hide it.
const taskFilters = [];

// Each function is called as (tasks) after the list has been drawn.
const afterRenderActions = [];
