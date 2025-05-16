
// GSAP animaciones
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".hero .btn-primary", { duration: 1, scale: 0, opacity: 0, delay: 1 });

// Formulario (puedes conectar con Formspree o similar si deseas)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensaje enviado. Gracias por contactarnos.");
  this.reset();
});
AOS.init({
  duration: 1200,
  once: true
});

const hero = document.querySelector('.hero');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Opcional: cerrar menú al hacer click en un link
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('active');
  })
);
