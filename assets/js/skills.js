let skills = document.querySelectorAll('.container-techs img');
const skillName = document.querySelector('.name-skill');
const skillContent = document.querySelector('.content-skill');
const skillLevel = document.querySelector('.level-skill');

const mySkills = [
  {
    title: 'HTML5',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis, veritatis beatae non velit sapiente voluptatem delectus fugit nostrum dolorem hic voluptas animi cum nam, nobis deserunt aut harum! Sit!',
    level: 'Nível: avançado'
  },
  {
    title: 'CSS',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis, veritatis beatae non velit sapiente voluptatem delectus fugit nostrum dolorem hic voluptas animi cum nam, nobis deserunt aut harum! Sit!',
    level: 'Nível: avançado'
  },
  {
    title: 'Javascript',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis, veritatis beatae non velit sapiente voluptatem delectus fugit nostrum dolorem hic voluptas animi cum nam, nobis deserunt aut harum! Sit!',
    level: 'Nível: avançado'
  },
  {
    title: 'Typescript',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis, veritatis beatae non velit sapiente voluptatem delectus fugit nostrum dolorem hic voluptas animi cum nam, nobis deserunt aut harum! Sit!',
    level: 'Nível: intermediário'
  },
  {
    title: 'React',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis, veritatis beatae non velit sapiente voluptatem delectus fugit nostrum dolorem hic voluptas animi cum nam, nobis deserunt aut harum! Sit!',
    level: 'Nível: avançado'
  },
  {
    title: 'Redux',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis, veritatis beatae non velit sapiente voluptatem delectus fugit nostrum dolorem hic voluptas animi cum nam, nobis deserunt aut harum! Sit!',
    level: 'Nível: intermediário'
  },
  {
    title: 'Styled-components',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis, veritatis beatae non velit sapiente voluptatem delectus fugit nostrum dolorem hic voluptas animi cum nam, nobis deserunt aut harum! Sit!',
    level: 'Nível: avançado'
  }
];

const setSkill = (title, content, level) => {
  skillName.textContent = title
  skillContent.textContent = content
  skillLevel.textContent = level
}

const clearInfo = () => {
  skillName.textContent = ''
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