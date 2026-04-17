// TODO: figure out how to use Resend in the client with a Resend custom template
// import { Resend } from 'https://cdn.jsdelivr.net/npm/resend@6.12.0/+esm';
// const resendCl = new Resend('re_HjdEVzPM_7k3x2NkhvoYMhPDF9MvnCiei');

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
// const themeToggle = document.getElementById('themeToggle');
// const body = document.body;

// Respect system preference on first load
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// const savedTheme = localStorage.getItem('nfd-theme');
// const initLight = savedTheme === 'light' || (!savedTheme && !prefersDark);

// if (initLight) {
//   body.classList.add('light');
//   themeToggle.textContent = '☾';
// }

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('light');
//   const isLight = body.classList.contains('light');
//   themeToggle.textContent = isLight ? '☾' : '☀';
//   localStorage.setItem('nfd-theme', isLight ? 'light' : 'dark');
// });

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

function buildEmailHtml(templatePath, variables) {
  let html = fs.readFileSync(templatePath, 'utf-8');
  for (const [key, value] of Object.entries(variables)) {
    html = html.replaceAll(`{{${key}}}`, value ?? '');
  }
  return html;
}

document.getElementById('contactForm').addEventListener('submit', sendContactFormEmail);

/* ── FORM SUBMIT ── */
async function sendContactFormEmail(e, formData) {
  e.preventDefault();
  const { firstName, lastName, businessName, businessEmail, businessType, message } = Object.fromEntries(new FormData(e.target));
 
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }) + ' CT';
 
  // const templatePath = path.resolve('./email-contact-form.html');
 
  // const html = buildEmailHtml(templatePath, {
  //   firstName,
  //   lastName,
  //   businessName,
  //   businessEmail,
  //   businessType,
  //   message,
  //   timestamp,
  // });
  
  // const { data, error } = await Resend.emails.send({
  //   from: 'NotFound Designs Inquiry <inquiry@notfounddesigns.com>',
  //   to: ['dev@notfounddesigns.com'],
  //   reply_to: businessEmail,
  //   subject: `[New Inquiry] ${businessName} — ${businessType}`,
  //   html,
  // });
 
  // if (error) {
  //   console.error('Resend error:', error);
  //   throw new Error(`Failed to send email: ${error.message}`);
  // }
  
  // console.log({ data });
  
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✓ Message Sent';
  btn.style.background = '#27ae60';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '#4a7fd4';
    btn.disabled = false;
  }, 3000)
}