// storage.js - saves and loads tasks in the browser (localStorage).

const STORAGE_KEY = 'taskflow-tasks';

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    // If saving fails, the app still works until the page is closed.
  }
}
