document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });