// Nav Toggle Controls
const navToggle = document.querySelector('.main-nav__toggle')
const navMenu = document.querySelector('.main-nav__menu')
navToggle.addEventListener('click', function () {
  navMenu.classList.toggle('main-nav__mobile--active')
})
// Clear Projects Div and Populate
const projectsDiv = document.querySelector('.section__projects')
const projectsHeader = document.createElement('h3')
const projectsContainer = document.createElement('div')

function clearProjects() {
  projectsDiv.innerHTML = "";
  populateProjects()
}
function populateProjects() {
  projectsHeader.classList.add('projects__header')
  projectsContainer.classList.add('projects__container')
  // projectsDiv.appendChild(projectsHeader)
  projectsDiv.appendChild(projectsContainer)
}
// Projects Object
const projects = [
  {
    title: "Project 1",
    image: '',
    description: "Some project description here...",
    site: '',
    code: ''
  },
  {
    title: "Project 2",
    image: '',
    description: "Some project description here...",
    site: '',
    code: ''
  },
  {
    title: "Project 3",
    image: '',
    description: "Some project description here...",
    site: '',
    code: ''
  }
]

function createCard(cardObject) {
  let card = document.createElement('div')
  card.classList.add('card')
  let cardPreview = document.createElement('div')
  cardPreview.classList.add('card__preview')
  if (cardObject.image === "") cardPreview.classList.add('card__preview--no-img')
  let cardBody = document.createElement('div')
  cardBody.classList.add('card__body')
  let cardTitle = document.createElement('h5')
  cardTitle.classList.add('card__title')
  let cardText = document.createElement('p')
  cardText.classList.add('card__text')
  let cardLinks = document.createElement('div')
  cardLinks.classList.add('card__links')
  let cardViewSite = document.createElement('a')
  cardViewSite.classList.add('card__view-site')
  let cardViewCode = document.createElement('a')
  cardViewCode.classList.add('card__view-code')

  card.appendChild(cardPreview)
  card.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText)
  cardBody.appendChild(cardLinks)
  cardLinks.appendChild(cardViewSite)
  cardLinks.appendChild(cardViewCode)
  projectsContainer.appendChild(card)

  cardTitle.innerHTML = cardObject.title
  // set the href for the image
  cardText.innerHTML = cardObject.description
  // set the href for site
  // set the href for code
}

clearProjects()
projects.forEach(project => createCard(project))
