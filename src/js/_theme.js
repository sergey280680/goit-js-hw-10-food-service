const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeToggle = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('theme') === Theme.DARK) {
  body.classList.add(Theme.DARK);
  themeToggle.checked = true;
} else {
  body.classList.add(Theme.LIGHT);
}

function changeThemeBody(addClass, removeClass) {
  body.classList.remove(removeClass);
  body.classList.add(addClass);
  localStorage.setItem('theme', addClass);
}

function changeThemeToggle(e) {
  themeToggle.checked
    ? changeThemeBody(Theme.DARK, Theme.LIGHT)
    : changeThemeBody(Theme.LIGHT, Theme.DARK);
}

themeToggle.addEventListener('change', changeThemeToggle);


