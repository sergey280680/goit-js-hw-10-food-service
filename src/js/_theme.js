const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggle = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('theme') === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  themeToggle.checked = true;
}

function changeThemeBody(addClass, removeClass) {
  document.body.classList.remove(removeClass);
  document.body.classList.add(addClass);
  localStorage.setItem('theme', addClass);
}

function changeThemeToggle(e) {
  themeToggle.checked
    ? changeThemeBody(Theme.DARK, Theme.LIGHT)
    : changeThemeBody(Theme.LIGHT, Theme.DARK);
}

themeToggle.addEventListener('change', changeThemeToggle);
