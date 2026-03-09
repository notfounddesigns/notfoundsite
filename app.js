/* ── CUSTOM CURSOR (pointer devices only) ── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

if (window.matchMedia('(hover: hover)').matches && cursor && ring) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
  });

  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
    requestAnimationFrame(animRing);
  }
  animRing();

  document.querySelectorAll('a, button, .faq-item, .portfolio-card, .pricing-card').forEach(el => {
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
}

/* ── LIGHT / DARK TOGGLE ── */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Respect system preference on first load
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('nfd-theme');
const initLight = savedTheme === 'light' || (!savedTheme && !prefersDark);

if (initLight) {
  body.classList.add('light');
  themeToggle.textContent = '☾';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  themeToggle.textContent = isLight ? '☾' : '☀';
  localStorage.setItem('nfd-theme', isLight ? 'light' : 'dark');
});

/* ── MOBILE HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('navDrawer');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navDrawer.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  navDrawer.setAttribute('aria-hidden', !isOpen);
});

// Close drawer on link click
navDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navDrawer.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navDrawer.setAttribute('aria-hidden', 'true');
  });
});

// Close drawer on outside click
document.addEventListener('click', e => {
  if (!navDrawer.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove('open');
    navDrawer.classList.remove('open');
  }
});

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 90);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(r => revealObs.observe(r));

/* ── BACK TO TOP ── */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  // Nav border
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('scrolled', window.scrollY > 40);

  // Back to top visibility
  backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── FORM SUBMIT ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✓ Message Sent';
  btn.style.background = '#27ae60';
  btn.disabled = true;
}