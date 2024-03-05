import {elements} from '../data/elements.js';
import { tasks } from '../data/elements.js';

export function addNewTask() {
  const creatTaskButton = document.querySelector('.js-creat-button');
  const creatTask = document.querySelector('.js-add-task-container');

 // Store the state of the creat section for toggling:
  let isAddTaskOpen = false;

  creatTaskButton.addEventListener('click', () => {
    if(isAddTaskOpen) { 
      // creat section is already open, so close it:
      creatTask.classList.remove('add-new-task');
    }else{
       // creat section is closed, so open it:
      creatTask.classList.add('add-new-task');
    }
    isAddTaskOpen = !isAddTaskOpen
  });
  const cancel = document.querySelector('.js-cancel-button');
  cancel.addEventListener('click', () => {
   creatTask.classList.remove('add-new-task');
  });
}
export function saveButton () {
  document.querySelector('.js-save-button')
  .addEventListener('click', () => {
    saveToButton();
    todoList();
  });
document.body.addEventListener( 'keydown', (event) =>{
  if(event.key === 'Enter'){
    saveToButton();
    todoList();
  }
  });
}

export function todoList() {
  let totaleTodoList = '';
 tasks.forEach((task) => {
   const title = task.title;
   totaleTodoList +=`
   <div class="task-container js-task-conatiner">
   <div class="task-title js-task-title"> ${title} </div>
   <div class="check-task" id="check-task"></div>
  </div>
   `;
  });
   document.querySelector(`.js-all-tasks`)
   .innerHTML = totaleTodoList;
}
function saveToButton () {
const titleInput = document.querySelector('.js-title-input');
const title = titleInput.value;

  tasks.push({
 title: title
});
titleInput.value = '';
}
export function rendertasks() {
  let html ='';
  elements.forEach((element) => {
   html +=`
   <div class="sections-is" id="${element.id}" >
     <div class="name-dot">
      <div class="dot" id="dot"></div>
      <div class="name" id="name">${element.name}</div>
        </div>
      <div class="all-tasks js-all-tasks"></div>
    </div>`;
  });
  document.querySelector('.js-todo-grid')
  .innerHTML = html;
}
