// theme.js - Feature: dark mode (the choice is remembered).

const themeButton = document.createElement('button');
themeButton.type = 'button';
themeButton.className = 'theme-toggle';
document.getElementById('header-actions').appendChild(themeButton);

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeButton.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  try {
    localStorage.setItem('taskflow-theme', theme);
  } catch (error) {
    // Ignore: the theme still works for this visit.
  }
}

themeButton.addEventListener('click', function () {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Start with the saved theme (or light if nothing was saved).
let savedTheme = 'light';
try {
  savedTheme = localStorage.getItem('taskflow-theme') || 'light';
} catch (error) {
  savedTheme = 'light';
}
setTheme(savedTheme);
