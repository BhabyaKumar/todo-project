// app.js - connects the page (HTML) with the task functions.

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const emptyMessage = document.getElementById('empty-state');

// Build one task row for the list.
function createTaskItem(task) {
  const item = document.createElement('li');
  item.className = 'task-item';
  if (task.done) {
    item.classList.add('done');
  }

  // Checkbox: mark task as done / not done
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-check';
  checkbox.checked = task.done;
  checkbox.addEventListener('change', function () {
    toggleTask(task.id);
    renderTasks();
  });

  // Title and extra info
  const body = document.createElement('div');
  body.className = 'task-body';

  const title = document.createElement('span');
  title.className = 'task-title';
  title.textContent = task.title;

  const info = document.createElement('div');
  info.className = 'task-meta';

  body.appendChild(title);
  body.appendChild(info);

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'btn-delete';
  deleteButton.textContent = '×';
  deleteButton.setAttribute('aria-label', 'Delete task');
  deleteButton.addEventListener('click', function () {
    deleteTask(task.id);
    renderTasks();
  });

  item.appendChild(checkbox);
  item.appendChild(body);
  item.appendChild(deleteButton);

  // Let feature files add their own information to this row.
  taskDecorators.forEach(function (decorate) {
    decorate(task, info, item);
  });

  return item;
}

// Draw the whole list on the page.
function renderTasks() {
  // Keep only the tasks that every filter allows.
  const visibleTasks = tasks.filter(function (task) {
    return taskFilters.every(function (isAllowed) {
      return isAllowed(task);
    });
  });

  list.innerHTML = '';
  visibleTasks.forEach(function (task) {
    list.appendChild(createTaskItem(task));
  });

  if (tasks.length === 0) {
    emptyMessage.textContent = 'No tasks yet. Add your first one above!';
  } else {
    emptyMessage.textContent = 'No tasks match your search or filter.';
  }
  emptyMessage.hidden = visibleTasks.length > 0;

  afterRenderActions.forEach(function (action) {
    action(tasks);
  });
}

// When the form is submitted, add a new task.
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = input.value.trim();
  if (title === '') {
    return;
  }

  const extraData = {};
  extraDataReaders.forEach(function (readData) {
    Object.assign(extraData, readData());
  });

  addTask(title, extraData);
  form.reset();
  input.focus();
  renderTasks();
});

renderTasks();
