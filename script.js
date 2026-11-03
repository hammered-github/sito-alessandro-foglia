// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Apri menu' : 'Chiudi menu');
  nav.classList.toggle('open', !open);
});
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
});

// Lightbox galleria
const box = document.querySelector('.lightbox');
const boxImg = box.querySelector('img');
let lastFocus = null;
function closeBox() {
  box.hidden = true;
  if (lastFocus) lastFocus.focus();
}
document.querySelectorAll('.shot').forEach((btn) => {
  btn.addEventListener('click', () => {
    lastFocus = btn;
    boxImg.src = btn.dataset.full;
    boxImg.alt = btn.querySelector('img').alt;
    box.hidden = false;
    box.querySelector('.lightbox-close').focus();
  });
});
box.addEventListener('click', (e) => { if (e.target !== boxImg) closeBox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !box.hidden) closeBox(); });

// Anno nel footer
document.getElementById('year').textContent = new Date().getFullYear();
