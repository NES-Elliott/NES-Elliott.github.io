const navToggle = document.querySelector('.main-nav__toggle')
const navMenu = document.querySelector('.main-nav__menu')

navToggle.addEventListener('click', function () {
  navMenu.classList.toggle('main-nav__mobile--active')
})

const projectsDiv = document.querySelector('.section-projects')
projectsDiv.innerHTML = "";
