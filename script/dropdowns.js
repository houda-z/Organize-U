import { elements, optionsElement } from "../data/elements.js";

export function options () {
  let optionsHtml = '';
  optionsElement.forEach((options) => {
    optionsHtml += `
  <div class="option">
  <div class="${options.name}"></div>
  </div>
  `;
  });
  
  document.querySelector('.menu')
  .innerHTML = optionsHtml;
  }

export function dropdouns(){
  //Selecting 'dropdown' from the DOM
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdoun) => {

  // Selecting elements from the DOM
  const menu = dropdoun.querySelector('.menu');
  const options = dropdoun.querySelectorAll('.option');
  const selected = dropdoun.querySelector('.selected');
  const select = dropdoun.querySelector('.select');
  const caret = dropdoun.querySelector('.caret');
  // Adding a click event listener to the 'select' element
  select.addEventListener('click', () => {

     // Toggling classes to create visual effects when 'select' is clicked
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });
  
  options.forEach(option => {
   option.addEventListener('click', () => {
    // Setting the inner HTML of the 'selected' element to the clicked option's HTML
   const selectedOption =  selected.innerHTML = option.innerHTML;
   
   // Removing visual effects classes and closing the dropdown menu
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');

    // Removing the 'active' class from all options
    options.forEach( option => {
      option.classList.remove('active');
    });
    
    // Adding the 'active' class to the clicked option for visual indication
    option.classList.add('active');
   });
  
  }); 
}); 
}
 function selectOptions () {
   
  }