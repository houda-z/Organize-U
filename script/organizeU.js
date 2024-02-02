import {elements} from '../data/elements.js';


 function rendertasks() {
  let html ='';
  elements.forEach((tasksElement) => {
   const id = tasksElement.id;
   const name = tasksElement.name;
 
   html +=`
   <div class="do-first-tasks" id="${id}">
     <div class="name-dot">
      <div class="dot" id="dot"></div>
      <div class="name" id="name">${name}</div>
     </div>
     <div class="task-container"> 
      <div class="task-title"> take a javaScript cours </div>
      <div class="check-task" id="check-task"></div>
     </div>
    </div>`;
  });
  document.querySelector('.js-todo-grid')
  .innerHTML = html;
}
rendertasks();