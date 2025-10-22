// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
  
  // Update active nav link
  updateActiveNavLink();
});

// ==================== ACTIVE NAV LINK ====================
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
      }
  });
  
  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
      }
  });
}

// ==================== FLIP CARDS CLICK EVENT ====================
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
      this.classList.toggle('flipped');
  });
});

// ==================== CONTACT FORM SUBMISSION ====================
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
  
  // Reset form
  this.reset();
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animated');
      }
  });
}, observerOptions);

// Observe all flip cards and sections
document.querySelectorAll('.flip-card, .section-padding').forEach(el => {
  el.classList.add('animate-on-scroll');
  observer.observe(el);
});

// ==================== CAROUSEL AUTO PLAY ====================
const carousel = document.querySelector('#projectsCarousel');
if (carousel) {
  const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 5000,
      wrap: true
  });
}

// ==================== MOBILE MENU CLOSE ON CLICK ====================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
      }
  });
});

// ==================== PREVENT FLIP CARD DOUBLE FLIP ====================
let flipTimeout;
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
      clearTimeout(flipTimeout);
      flipTimeout = setTimeout(() => {
          // Optional: Auto flip back after 5 seconds
      }, 5000);
  });
});

/// ===== TAB SWITCHING =====

document.querySelectorAll('.credentials-tabs .nav-link').forEach(tab => {
  tab.addEventListener('click', function (e) {
      // Remove active state from all tabs
      document.querySelectorAll('.credentials-tabs .nav-link').forEach(t => t.classList.remove('active'));
      // Add active to clicked tab
      this.classList.add('active');
      // Show corresponding tab-pane, hide others
      const targetTab = this.getAttribute('data-bs-target');
      document.querySelectorAll('.tab-pane').forEach(pane => {
          if ('#' + pane.id === targetTab) {
              pane.classList.add('show', 'active');
          } else {
              pane.classList.remove('show', 'active');
          }
      });
  });
});

