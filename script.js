// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      toggle.classList.toggle('open');
    });
  }

  // Validation simple du formulaire
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      if (!name.value.trim() || !email.value.trim()) {
        e.preventDefault();
        alert('Merci de renseigner au minimum votre nom et votre email.');
      }
    });
  }
});
