let $todoInput; // miejsce, gdzie użytkownik wpisuje treść
let $addBtn; // przycisk ADD - dodaje nowe elementy do listy
let $alertInfo; // info o braku zadań / konieczności dodania tekstu

let $ulList; // nasza lista zadań, tagi <ul></ul>
let $newTask; // nowo dodany LI, nowe zadanie
let $allTasks; // lista wszystkich dodanych LI
let $idNumber = 0; // ID dodawane do każdego nowego zadania

let $popup; //pobrany popup
let $popupInfo; // alert w popupie, jak się doda pusty tekst
let $editedTodo; // edytowany Todo
let $popupInput; //tekst wpisywany w inputa w popup'ie
let $addPopupBtn; // przycisk "zatwierdź" w popup'ie
let $closeTodoBtn //przycisk od zamykania popup'a



const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.header__todo-input');
    $addBtn = document.querySelector('.header__add-btn');
    $alertInfo = document.querySelector('.todo-list__alert-info');

    $ulList = document.querySelector('.todo-list ul');
    $allTasks = document.getElementsByTagName('li');

    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popup__popup-info');
    $popupInput = document.querySelector('.popup__popup-input');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
}




const addNewTask = () => {
    if ($todoInput.value === '') {
        $alertInfo.textContent = 'wpisz treść zadania';

    } else {
        $newTask = document.createElement('li');
        $newTask.textContent = $todoInput.value;
        $ulList.appendChild($newTask)
        createToolsArea();
        reset()
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











document.addEventListener('DOMContentLoaded', main);