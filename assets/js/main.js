document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function() {
      const isOpen = primaryNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }
  const pageUrlField = document.getElementById('page-url');
  if (pageUrlField) { pageUrlField.value = window.location.href; }
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.style.boxShadow = window.scrollY > 10 ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'var(--shadow-sm)';
    });
  }
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      if (primaryNav && primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });
});
