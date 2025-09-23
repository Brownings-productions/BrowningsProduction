// Mobile menu toggle with a11y
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', String(open));
});

// Close menu when a link is clicked (mobile)
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  })
);

// Animate skill bars (only on pages that have them)
const bars = document.querySelectorAll('.bar > span');
const reveal = (el) => (el.style.width = el.dataset.width);
if (bars.length) {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      for (const e of entries) if (e.isIntersecting) { reveal(e.target); obs.unobserve(e.target); }
    }, { threshold: 0.35 });
    bars.forEach(b => io.observe(b));
  } else { bars.forEach(reveal); }
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
