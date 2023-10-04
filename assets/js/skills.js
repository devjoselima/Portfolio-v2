const btnFront = document.querySelector('.item-menu-front');
const btnBack = document.querySelector('.item-menu-back');
const btnTools = document.querySelector('.item-menu-tools');

const containerFront = document.querySelector('#container-front');
const containerBack = document.querySelector('#container-back');
const containerTools = document.querySelector('#container-tools');

btnFront.addEventListener('click', () => {
  containerFront.classList.remove('is-hidden')

  containerBack.classList.add('is-hidden');
  containerTools.classList.add('is-hidden')

  btnFront.classList.add('is-active');
  btnBack.classList.remove('is-active');
  btnTools.classList.remove('is-active');
})

btnBack.addEventListener('click', () => {
  containerBack.classList.remove('is-hidden');

  containerFront.classList.add('is-hidden');
  containerTools.classList.add('is-hidden');

  btnFront.classList.remove('is-active');
  btnBack.classList.add('is-active');
  btnTools.classList.remove('is-active');
})

btnTools.addEventListener('click', () => {
  containerTools.classList.remove('is-hidden');
  
  containerFront.classList.add('is-hidden');
  containerBack.classList.add('is-hidden');

  btnFront.classList.remove('is-active');
  btnBack.classList.remove('is-active');
  btnTools.classList.add('is-active');
})