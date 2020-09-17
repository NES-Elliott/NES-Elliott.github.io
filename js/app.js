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
  projectsDiv.appendChild(projectsHeader)
  projectsDiv.appendChild(projectsContainer)
}
// Projects Object
const projects = [
  {
    title: "Dinero",
    image: 'demo-dinero.png',
    description: "A full-stack finance tracking app to track expenses and incomes.",
    site: 'https://dinero-mern.herokuapp.com/',
    code: 'https://github.com/NES-Elliott/Dinero'
  },
  {
    title: "Sorting Algorithm Visualizer",
    image: 'demo-sortingalg.png',
    description: "A tool that allows for the visualization of popular sorting algorithms.",
    site: 'https://nes-elliott.github.io/Sorting-Algorithm-Visualization-Tool/',
    code: 'https://github.com/NES-Elliott/Sorting-Algorithm-Visualization-Tool'
  },
  {
    title: "Crypto Catalog",
    image: 'demo-cryptocat.png',
    description: "A CLI app that uses an API to keep track of cryptocurrencies.",
    site: '',
    code: 'https://github.com/NES-Elliott/CryptoCat'
  }
]

function createCard(cardObject) {
  let card = document.createElement('div')
  card.classList.add('card')
  let cardPreview = document.createElement('div')
  cardPreview.classList.add('card__preview')
  let cardImg = document.createElement('img')
  cardImg.classList.add('card__img')
  if (cardObject.image === '') cardPreview.classList.add('card__preview--no-img')
  let cardBody = document.createElement('div')
  cardBody.classList.add('card__body')
  let cardTitle = document.createElement('h5')
  cardTitle.classList.add('card__title')
  let cardText = document.createElement('p')
  cardText.classList.add('card__text')
  let cardLinks = document.createElement('div')
  cardLinks.classList.add('card__links')
  let cardViewSite = document.createElement('a')
  if (cardObject.site != '') cardViewSite.classList.add('card__view-site')
  let cardViewCode = document.createElement('a')
  cardViewCode.classList.add('card__view-code')  

  card.appendChild(cardPreview)
  if (cardObject.image != '') cardPreview.appendChild(cardImg)
  card.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText)
  cardBody.appendChild(cardLinks)
  if (cardObject.site != '') cardLinks.appendChild(cardViewSite)
  cardLinks.appendChild(cardViewCode)
  projectsContainer.appendChild(card)

  cardTitle.innerHTML = cardObject.title
  cardImg.src = `media/images/${cardObject.image}`
  cardText.innerHTML = cardObject.description
  cardViewSite.href = cardObject.site
  cardViewSite.setAttribute('target', '_blank')
  cardViewCode.href = cardObject.code
  cardViewCode.setAttribute('target', '_blank')
}

clearProjects()
projects.forEach(project => createCard(project))
