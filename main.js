let $todoInput; // miejsce, gdzie użytkownik wpisuje treść
let $addBtn; // przycisk ADD - dodaje nowe elementy do listy
let $alertInfo; // info o braku zadań / konieczności dodania tekstu

let $ulList; // nasza lista zadań, tagi <ul></ul>
let $newTask; // nowo dodany LI, nowe zadanie

let $popup; //pobrany popup
let $popupInfo; // alert w popupie, jak się doda pusty tekst
let $popupInput; //tekst wpisywany w inputa w popup'ie
let $addPopupBtn; // przycisk "zatwierdź" w popup'ie
let $closeTodoBtn //przycisk od zamykania popup'a

let $editedTodo; // edytowany Todo
let $idNumber = 0; // ID dodawane do każdego nowego zadania
let $allTasks; // lista wszystkich dodanych LI


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.header__todo-input');
    $addBtn = document.querySelector('.header__add-btn');
    $alertInfo = document.querySelector('.todo-list__alert-info');

    $ulList = document.querySelector('.todo-list ul');
    $allTasks = $ulList.getElementsByTagName('li');

    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popup__popup-info');
    $popupInput = document.querySelector('.popup__popup-input');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');

}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo)
    $todoInput.addEventListener('keyup', enterAdd)
}

const addNewTask = () => {
    if ($todoInput.value === '') {
        $alertInfo.textContent = 'Enter the task content';


    } else {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.textContent = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`);
        $ulList.appendChild($newTask);

        createToolsArea();
        reset()
    }
}

const enterAdd = () => {

    if (event.keyCode === 13) {
        addNewTask()

    }

}

const reset = () => {
    $todoInput.value = '';
    $alertInfo.textContent = ''

}

const createToolsArea = () => {

    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('todo-list__tools');
    $newTask.appendChild(toolsPanel);


    const completeBtn = document.createElement('button');
    completeBtn.classList.add('todo-list__complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('todo-list__edit');
    editBtn.textContent = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-list__delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';


    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);


}


const checkClick = (e) => {

    if (e.target.closest('button').classList.contains('todo-list__complete')) {

        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed')

    } else if (e.target.closest('button').classList.contains('todo-list__edit')) {

        editTask(e)

    } else if (e.target.closest('button').classList.contains('todo-list__delete')) {

        deleteTask(e)

    }

}

const editTask = (e) => {

    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popup.style.display = 'flex'

}

const changeTodo = () => {
    if ($popupInput.value !== '') {
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = "none"
    } else {
        $popupInfo.innerText = "Enter the task content"
    }
}

const closePopup = () => {
    $popup.style.display = "none";
    $popupInfo.innerText = ''
}

const deleteTask = (e) => {

    const removeTask = e.target.closest('li')
    removeTask.remove();

    if ($allTasks.length === 0) {
        $alertInfo.innerText = 'no tasks on the list'
    }

}

document.addEventListener('DOMContentLoaded', main);