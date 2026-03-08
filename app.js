// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.transform = `translate(${mx - 4}px, ${my-4}px)`;
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button, .faq-item, .portfolio-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '52px';
    ring.style.height = '52px';
    ring.style.borderColor = 'rgba(107,159,232,0.7)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width = '32px';
    ring.style.height = '32px';
    ring.style.borderColor = 'rgba(107,159,232,0.4)';
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => obs.observe(r));

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✓ Message Sent';
  btn.style.background = '#27ae60';
  btn.disabled = true;
}

// Nav scroll style
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.borderBottomColor = window.scrollY > 40 ? 'var(--border)' : 'transparent';
});