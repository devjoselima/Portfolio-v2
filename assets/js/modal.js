const closeButton = document.querySelector('.close-button');
const modal = document.querySelector('.modal');
let projectImage = document.querySelectorAll('.project-image');
let modalTitle = document.querySelector('.modal-title');
let modalDescription = document.querySelector('.modal-text');
let modalImage = document.querySelector('.modal-img-project');
let linkButton = document.querySelector('.link-modal-button'); 
let githubButton = document.querySelector('.github-modal-button');

const projects = [
  {
    title: 'EPlay',
    src: './assets/img/imagesModal/fundo-eplay.png',
    text: 'E-commerce de uma loja de games desenvolvido com ts e react',
    deploy: 'https://eplay-1-tan.vercel.app/',
    github: 'https://github.com/devjoselima/eplay'
  },
  {
    title: 'EFood',
    src: './assets/img/imagesModal/fundo-efood.png',
    text: 'E-commerce de um restaurante desenvolvido com ts e react',
    deploy: 'https://efood-rho.vercel.app/',
    github: 'https://github.com/devjoselima/efood'
  },
]

const openModal = () => {
  // modal.style.display = 'flex';
  modal.classList.add('modal-visible')
}

const closeModal = () => {
  modal.classList.remove('modal-visible')
}

const setProject = (src, title, text, linkDeploy, linkGithub) => {
  modalImage.src = src
  modalTitle.textContent = title
  modalDescription.textContent = text
  linkButton.href = linkDeploy
  githubButton.href = linkGithub
}

projectImage.forEach((project, index) => {
  const currentProject = projects[index];

  project.addEventListener('click', () => {
    setProject(
      currentProject.src, 
      currentProject.title, 
      currentProject.text, 
      currentProject.deploy, 
      currentProject.github
    )
    openModal()
  })
})

closeButton.addEventListener('click', () => {
  closeModal()
})
