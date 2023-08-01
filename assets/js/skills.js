let skills = document.querySelectorAll('.container-techs img');
const skillName = document.querySelector('.name-skill');
const skillContent = document.querySelector('.content-skill');
const skillLevel = document.querySelector('.level-skill');

const mySkills = [
  {
    title: 'HTML5',
    content: 'O HTML é uma linguagem de marcação para desenvolvimento de aplicações web, possuo conhecimento avançado na linguagem utilizando de tags semânticas e acessibiliidade.',
    level: 'Nível: avançado'
  },
  {
    title: 'CSS',
    content: 'O CSS é uma linguagem de estilo mundialmente conhecida, possuo conhecimento em tópicos como animações,grid, flexbox, responsividade, animações e entre outros.',
    level: 'Nível: avançado'
  },
  {
    title: 'Javascript',
    content: 'O Javascript foi uma das primeiras linguagens de programação que comecei a estudar e hoje posso dizer que possuo conhecimento em diversos assuntos importantes como DOM,ES6,AJAX e entre outros.',
    level: 'Nível: avançado'
  },
  {
    title: 'Bootstrap',
    content: 'O Bootstrap é uma biblioteca de css na qual nos facilita o desenvolvimento de páginas responsivas por meio de um conjunto de classes predefinidos pela biblioteca',
    level: 'Nível: avançado'
  },
  {
    title: 'Jquery',
    content: 'lorem',
    level: 'Nível: avançado'
  },
  {
    title: 'Typescript',
    content: 'O typescript é um superset do javascript, fornecendo recursos como tipagem estática, interface permitindo a criação de um código mais escalável e de qualidade.',
    level: 'Nível: intermediário'
  },
  {
    title: 'React',
    content: 'O React é uma biblioteca muito usada para construção de SPAs, possuo um ótimo conhecimento em react e procuro me aprimorar mais e mais a cada dia, caso tenha interesse tenho diversos projetos utilizando este biblioteca em meu github.',
    level: 'Nível: intermediário'
  },
  {
    title: 'Redux',
    content: 'O redux é uma biblioteca para gerenciamento do estado global de uma aplicação, com ela é possivel gerenciar os estados de um componente de maneira mais eficiente e escalável.',
    level: 'Nível: básico/intermediário'
  },
  {
    title: 'Styled-components',
    content: 'é uma biblioteca para estilização de components, uma das suas principais características é o CSS-in-JS permitindo escrever códigos JavaScript juntamente de um código CSS, uma das minhas bibliotecas favoritas',
    level: 'Nível: avançado'
  },
  {
    title: 'Git',
    content: 'lorem',
    level: 'Nível: avançado'
  },
  {
    title: 'Github',
    content: 'lorem',
    level: 'Nível: avançado'
  },
];

const setSkill = (title, content, level) => {
  skillName.textContent = title
  skillContent.textContent = content
  skillLevel.textContent = level
}

const clearInfo = () => {
  skillName.textContent = '/* Passe o mouse ou clique em alguma tech para ver mais sobre ela */'
  skillContent.textContent = ''
  skillLevel.textContent = ''
}

mySkills.forEach((skillInfo, index) => {
  const currentSkill = skills[index];

  currentSkill.addEventListener('mouseover', () => {
    setSkill(skillInfo.title, skillInfo.content, skillInfo.level)
  })

  currentSkill.addEventListener('mouseout', () => {
    clearInfo()
  })
})