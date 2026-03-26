const toggle  = document.getElementById('menu-toggle');
const overlay = document.getElementById('menu-overlay');
const drawer  = document.getElementById('nav-drawer');

function openMenu()  {
  overlay.classList.add('active');
  drawer.classList.add('active');
}

function closeMenu() {
  overlay.classList.remove('active');
  drawer.classList.remove('active');
}

toggle.addEventListener('click', openMenu);
overlay.addEventListener('click', closeMenu);
document.getElementById('menu-close').addEventListener('click', closeMenu);
