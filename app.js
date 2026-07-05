  // Hamburger menu
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const ham = document.getElementById('hamburger');
    menu.classList.toggle('open');
    ham.classList.toggle('active');
  }
  function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current ? '#e8446a' : '';
    });
  });
