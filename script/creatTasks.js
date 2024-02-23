import {elements} from '../data/elements.js';

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
export function rendertasks() {
  let html ='';
  elements.forEach((tasksElement) => {
   html +=`
   <div id="${tasksElement.id}" >
     <div class="name-dot">
      <div class="dot" id="dot"></div>
      <div class="name" id="name">${tasksElement.name}</div>
        </div>
      <div class="all-tasks" > 
     <div class="task-container js-task-conatiner">
   <div class="task-title">  fix the routine </div>
   <div class="check-task" id="check-task"></div>
  </div>
      </div>
    </div>`;
  });
  document.querySelector('.js-todo-grid')
  .innerHTML = html;
}
