const header = document.querySelector('.header')

const home = document.querySelector('.home')





window.addEventListener('scroll', () => {
  const currentPosition = window.scrollY;

  if (currentPosition < 20) {
    header.classList.add('is-hidden')
  } else {
    header.classList.remove('is-hidden')

  }

  console.log(currentPosition)
})

