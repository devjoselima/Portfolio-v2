function hideHeader() {
  const header = document.querySelector('.header');
  const currentPosition = window.scrollY;

  if (currentPosition < 20) {
    header.classList.add('is-hidden')
  } else {
    header.classList.remove('is-hidden')

  }

}

window.addEventListener('scroll', hideHeader)


