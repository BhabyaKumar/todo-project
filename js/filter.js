// filter.js - Feature: status filters (All, Active, Completed).

let filterStatus = 'all';

// 1. Add the three buttons above the task list.
document.getElementById('toolbar').insertAdjacentHTML('beforeend',
  '<div class="filter-group">' +
  '<button type="button" class="filter-btn active" data-status="all">All</button>' +
  '<button type="button" class="filter-btn" data-status="active">Active</button>' +
  '<button type="button" class="filter-btn" data-status="completed">Completed</button>' +
  '</div>'
);

const filterButtons = document.querySelectorAll('.filter-btn');

// 2. When a button is clicked, remember the choice and redraw the list.
filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterStatus = button.dataset.status;

    filterButtons.forEach(function (other) {
      other.classList.toggle('active', other === button);
    });

    renderTasks();
  });
});

// 3. Hide tasks that do not match the chosen status.
taskFilters.push(function (task) {
  if (filterStatus === 'active') {
    return !task.done;
  }
  if (filterStatus === 'completed') {
    return task.done;
  }
  return true;
});