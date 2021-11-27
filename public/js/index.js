const mmobileHamburgerMenuButton = document.querySelector(
  '.mobile-hamburger-menu'
);
const mobileMenu = document.querySelector('.menu');
const hamburgerMenuBars = document.querySelectorAll(
  '.mobile-hamburger-menu__bar'
);
const hamburgerMenuShortBar = document.querySelector(
  '.mobile-hamburger-menu__bar--short'
);

const addTaskPage = document.querySelector('.add-task');
const addTaskButton = document.querySelector('.add-task-button');
const addTaskBackButton = document.querySelector('.add-task__back-button');

const desktopAddTaskButton = document.querySelector('.desktop-add-task-button');
const desktopAddTaskComponent = document.querySelector('.desktop-add-task');
const desktopTodoAndDoneTasks = document.querySelector(
  '.desktop-tasks-todo-and-done'
);

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('menu-open');
  hamburgerMenuShortBar.classList.toggle('not-visible');
  hamburgerMenuBars[0].classList.toggle('rotate-right');
  hamburgerMenuBars[2].classList.toggle('rotate-left');
};

const showAddTaskPage = () => addTaskPage.classList.add('open');
const showDesktopAddTaskPage = () => {
  desktopAddTaskComponent.classList.add('show-add-task');
  desktopTodoAndDoneTasks.style.transform = 'translateX(0%)';
};

const hideAddTaskPage = () => addTaskPage.classList.remove('open');

mmobileHamburgerMenuButton.addEventListener('click', toggleMobileMenu);

if (addTaskButton) addTaskButton.addEventListener('click', showAddTaskPage);
addTaskBackButton.addEventListener('click', hideAddTaskPage);

desktopAddTaskButton.addEventListener('click', showDesktopAddTaskPage);
