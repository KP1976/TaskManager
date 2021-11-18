const mmobileHamburgerMenuButton = document.querySelector(
  '.mobile-hamburger-menu'
);
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerMenuBars = document.querySelectorAll(
  '.mobile-hamburger-menu__bar'
);
const hamburgerMenuShortBar = document.querySelector(
  '.mobile-hamburger-menu__bar--short'
);
const addTaskPage = document.querySelector('.add-task');
const addTaskButton = document.querySelector('.add-task-button');
const addTaskBackButton = document.querySelector('.add-task__back-button');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('menu-open');
  hamburgerMenuShortBar.classList.toggle('not-visible');
  hamburgerMenuBars[0].classList.toggle('rotate-right');
  hamburgerMenuBars[2].classList.toggle('rotate-left');
};

const showAddTaskPage = () => addTaskPage.classList.add('open');
const hideAddTaskPage = () => addTaskPage.classList.remove('open');

mmobileHamburgerMenuButton.addEventListener('click', toggleMobileMenu);
addTaskButton.addEventListener('click', showAddTaskPage);
addTaskBackButton.addEventListener('click', hideAddTaskPage);
