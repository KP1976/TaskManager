//TODO Uwzględnić jak nie będzie zadań!
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const tasksList = document.querySelector('ul');
const container = document.querySelector('.container');
const modalDeleteTask = document.querySelector('.modal-delete-task');
const modalModifyTask = document.querySelector('.modal-modify-task');
const modalCard = document.querySelector('.modal__card');
const switchTask = (task) => __awaiter(this, void 0, void 0, function* () {
    const { id, title, category, createdAt } = task.dataset;
    const newTask = {
        id,
        title,
        createdAt,
        category,
    };
    console.log(id);
    task.dataset.isDone = task.dataset.isDone === '0' ? '1' : '0';
    yield fetch(`http://localhost:3000/api/tasks/${id}?_method=PATCH&isDone=${task.dataset.isDone}`, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify(newTask),
    });
    window.location.reload();
});
const taskOperations = (event) => __awaiter(this, void 0, void 0, function* () {
    const { className, id, parentElement: task } = event.target;
    if (id === 'task-done') {
        yield switchTask(task.parentElement);
    }
    if (className === 'delete-task-btn') {
        showConfirmDeleteTaskModal(task);
    }
    if (className === 'update-task-btn') {
        showModifyTaskModal(task);
    }
});
const showModifyTaskModal = (task) => {
    const { id, title, category, isDone } = task.dataset;
    const inputTitle = document.querySelector('.modal input');
    const inputCategory = document.querySelector('.modal form select');
    const actionProperty = document.querySelector('.modal-modify-task .modal__card form');
    inputTitle.value = title;
    inputCategory.value = category;
    modalModifyTask.classList.add('is-visible');
    actionProperty.action = `http://localhost:3000/api/tasks/${id}?_method=PATCH&isDone=${isDone}`;
};
const showConfirmDeleteTaskModal = (task) => {
    const { id } = task.dataset;
    const actionProperty = document.querySelector('.modal-delete-task .modal__card form');
    actionProperty.action = `http://localhost:3000/api/tasks/${id}?_method=DELETE`;
    modalDeleteTask.classList.add('is-visible');
};
const closeModals = (event) => {
    const { className } = event.target;
    if (className.includes('modal modal-delete-task')) {
        modalDeleteTask.classList.remove('is-visible');
    }
    if (className.includes('modal modal-modify-task')) {
        modalModifyTask.classList.remove('is-visible');
    }
};
const modalClick = (event) => {
    event.stopImmediatePropagation();
};
tasksList.addEventListener('click', (event) => taskOperations(event));
container.addEventListener('click', closeModals);
modalCard.addEventListener('click', modalClick);
