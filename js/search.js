// search.js - Feature: search tasks by title.

let searchText = '';

// 1. Add a search box above the task list.
const searchBox = document.createElement('input');
searchBox.type = 'search';
searchBox.className = 'search-input';
searchBox.placeholder = 'Search tasks...';
searchBox.setAttribute('aria-label', 'Search tasks');
document.getElementById('toolbar').appendChild(searchBox);

// 2. Redraw the list whenever the user types.
searchBox.addEventListener('input', function () {
  searchText = searchBox.value.trim().toLowerCase();
  renderTasks();
});

// 3. Only show tasks whose title contains the search text.
taskFilters.push(function (task) {
  return task.title.toLowerCase().includes(searchText);
});