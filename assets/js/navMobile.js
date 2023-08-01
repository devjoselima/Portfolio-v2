const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

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