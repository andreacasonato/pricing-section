function toggleMenu() {
const menu = document.getElementById('headerMenu');
menu.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.header-menu__links a').forEach(link => {
link.addEventListener('click', () => {
document.getElementById('headerMenu').classList.remove('active');
});
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
const menu = document.getElementById('headerMenu');
const hamburger = document.querySelector('.hamburger');
            
if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
menu.classList.remove('active');
}
});