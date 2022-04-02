//TODO Uwzględnić jak nie będzie zadań!

const tasksList = document.querySelector('ul') as HTMLUListElement;
const container = document.querySelector('.container') as HTMLDivElement;
const modalDeleteTask = document.querySelector(
  '.modal-delete-task'
) as HTMLButtonElement;
const modalModifyTask = document.querySelector(
  '.modal-modify-task'
) as HTMLButtonElement;
const modalCard = document.querySelector('.modal__card') as HTMLDivElement;

const switchTask = async (task: HTMLElement) => {
  const { id, title, category, createdAt } = task.dataset;
  const newTask = {
    id,
    title,
    createdAt,
    category,
  };

  console.log(id);

  task.dataset.isDone = task.dataset.isDone === '0' ? '1' : '0';

  await fetch(
    `http://localhost:3000/api/tasks/${id}?_method=PATCH&isDone=${task.dataset.isDone}`,
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify(newTask),
    }
  );

  window.location.reload();
};

const taskOperations = async (event: Event) => {
  const {
    className,
    id,
    parentElement: task,
  } = event.target as HTMLInputElement;

  if (id === 'task-done') {
    await switchTask(task.parentElement);
  }

  if (className === 'delete-task-btn') {
    showConfirmDeleteTaskModal(task);
  }

  if (className === 'update-task-btn') {
    showModifyTaskModal(task);
  }
};

const showModifyTaskModal = (task: HTMLElement) => {
  const { id, title, category, isDone } = task.dataset;
  const inputTitle = document.querySelector('.modal input') as HTMLInputElement;
  const inputCategory = document.querySelector(
    '.modal form select'
  ) as HTMLInputElement;
  const actionProperty = document.querySelector(
    '.modal-modify-task .modal__card form'
  ) as HTMLFormElement;

  inputTitle.value = title;
  inputCategory.value = category;
  modalModifyTask.classList.add('is-visible');

  actionProperty.action = `http://localhost:3000/api/tasks/${id}?_method=PATCH&isDone=${isDone}`;
};

const showConfirmDeleteTaskModal = (task: HTMLElement) => {
  const { id } = task.dataset as DOMStringMap;
  const actionProperty = document.querySelector(
    '.modal-delete-task .modal__card form'
  ) as HTMLFormElement;

  actionProperty.action = `http://localhost:3000/api/tasks/${id}?_method=DELETE`;
  modalDeleteTask.classList.add('is-visible');
};

const closeModals = (event: Event) => {
  const { className } = event.target as HTMLInputElement;

  if (className.includes('modal modal-delete-task')) {
    modalDeleteTask.classList.remove('is-visible');
  }
  if (className.includes('modal modal-modify-task')) {
    modalModifyTask.classList.remove('is-visible');
  }
};

const modalClick = (event: Event) => {
  event.stopImmediatePropagation();
};

tasksList.addEventListener('click', (event) => taskOperations(event));
container.addEventListener('click', closeModals);
modalCard.addEventListener('click', modalClick);
