const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  const closeNav = () => {
    nav.classList.remove('nav-active')
    burguer.classList.remove('toggle')
  };

  navLinks.forEach((link) => {
    link.style.opacity = '1';
    link.addEventListener('click', () => {
      burger.classList.toggle('toggle');
      closeNav()
    });
  })

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });

    burger.classList.toggle('toggle');
  });
}

navSlide();