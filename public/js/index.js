const mobileHamburgerMenuButton = document.querySelector(
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
const desktopTasksTodo = document.querySelectorAll('.desktop-task-todo');
// const desktopTasksTodoList = document.querySelector('.desktop-tasks-todo-list');
const desktopTaskDetails = document.querySelector('.desktop-task-details');

const radioButtons = document.querySelectorAll('.category__radio-input');
const radioButtonsDesktop = document.querySelectorAll(
  '.desktop-form-category__radio-input'
);

const addTaskCategoryIcon = document.querySelector(
  '.add-task__category-icon img'
);
const addTaskCategoryIconDesktop = document.querySelector(
  '.desktop-form__category-icon img'
);

// LISTENERS FUNCTIONS

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
  desktopTaskDetails.classList.remove('show-details');
};
const showTaskDetails = (e) => {
  desktopTaskDetails.classList.add('show-details');
  desktopTodoAndDoneTasks.style.transform = 'translateX(0%)';
  desktopAddTaskComponent.classList.remove('show-add-task');

  let currentTask = e.target;
  let prevSibling = currentTask.previousElementSibling;
  let nextSibling = currentTask.nextElementSibling;

  while (nextSibling) {
    e.target.classList.add('active');
    nextSibling.classList.remove('active');
    nextSibling = nextSibling.nextElementSibling;
  }

  while (prevSibling) {
    e.target.classList.add('active');
    prevSibling.classList.remove('active');
    prevSibling = prevSibling.previousElementSibling;
  }

  // wyświetlanie szczegółowych danych wybranego zadania
  const displayTasksDetails = async () => {
    const tasks = await tasksFromDataBase();
    const taskId = currentTask.dataset.id;
    const [{ title, category }] = tasks.filter((task) => task.id === taskId);
    const taskTitleInDetailsElement = document.querySelector(
      '.desktop-task-details__task-title'
    );
    const taskCategoryInDetailsElement = document.querySelector(
      '.desktop-type-of-task__text'
    );
    const categoryFirstLetterCapitilized = category.charAt(0).toUpperCase();
    const dotElement = document.querySelector('.dot');

    // const taskCreateDateInDetailsElement = document.querySelector(
    //   '.desktop-type-of-task__date'
    // );
    // const taskTimeInDetailsElement = document.querySelector(
    //   '.desktop-type-of-task__time'
    // );

    taskTitleInDetailsElement.textContent = title;
    taskCategoryInDetailsElement.textContent =
      categoryFirstLetterCapitilized + category.slice(1);

    switch (category) {
      case 'rekreacja':
        dotElement.className = 'dot dot--orange';
        break;
      case 'technologia':
        dotElement.className = 'dot dot--yellow';
        break;
      case 'osobiste':
        dotElement.className = 'dot dot--red';
        break;
      case 'jedzenie':
        dotElement.className = 'dot dot--green';
        break;
    }
  };

  displayTasksDetails().catch((error) => console.error(error));
};

const hideAddTaskPage = () => addTaskPage.classList.remove('open');

// LISTENERS

mobileHamburgerMenuButton.addEventListener('click', toggleMobileMenu);

if (addTaskButton) addTaskButton.addEventListener('click', showAddTaskPage);
addTaskBackButton.addEventListener('click', hideAddTaskPage);

desktopAddTaskButton.addEventListener('click', showDesktopAddTaskPage);

desktopTasksTodo.forEach((element) => {
  element.addEventListener('click', showTaskDetails);
});

// Wyświetlanie odpowiedniej ikony w zależności od wyboru kategorii

const changeIcon = (radioButton, index, icon) => {
  radioButton.addEventListener('change', () => {
    switch (index) {
      case 0:
        icon.setAttribute('src', 'images/running-solid.svg');
        break;
      case 1:
        icon.setAttribute('src', 'images/laptop-code-solid.svg');
        break;
      case 2:
        icon.setAttribute('src', 'images/user-tie-solid.svg');
        break;
      case 3:
        icon.setAttribute('src', 'images/pizza-slice-solid.svg');
        break;
    }
  });
};

radioButtons.forEach((radioButton, index) => {
  changeIcon(radioButton, index, addTaskCategoryIcon);
});

radioButtonsDesktop.forEach((radioButton, index) => {
  changeIcon(radioButton, index, addTaskCategoryIconDesktop);
});

// Pobranie zadań w formacie json

const tasksFromDataBase = async () => {
  const fetchingData = await fetch('http://localhost:3000/tasks');
  return await fetchingData.json();
};
