import { rendertasks, todoList, saveButton} from './creatTasks.js';
import { dropdouns, options} from './dropdowns.js';
//import { taypingText } from './taypingText.js';
import { addNewTask } from './creatTasks.js';
import { visualMenu } from './menu.js';

rendertasks();
options();
dropdouns();

addNewTask();
visualMenu();
saveButton();
todoList();

//taypingText();