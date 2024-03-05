export function visualMenu() {
  const menu = document.querySelector('.js-menu-icon-container');
  const menuList = document.querySelectorAll('.js-list');
  const header = document.querySelector('.js-header');
  const main = document.querySelector('.js-main');
  const sidebr = document.querySelector('.js-sidebr');
  const todoGrid = document.querySelector('.js-todo-grid');

  // Store the state of the menu for toggling:
  let isMenuOpen = false;

  menu.addEventListener('click', () => {
    if (isMenuOpen) {
      // Menu is already open, so close it:
      main.classList.remove('update-main');
      sidebr.classList.remove('visual-sidebr');
      header.classList.remove('update-header');
      todoGrid.classList.remove('update-todo-grid');
      sidebr.classList.add('class');
      main.classList.add('menu-remove');
      header.classList.add('Menu-remove');
     
      menuList.forEach((list) => {
        list.style.display = 'none'; // Hidden
        list.style.opacity = 0; // Transparent
      });
    } else {
      // Menu is closed, so open it:
      main.classList.add('update-main');
      header.classList.add('update-header');
      sidebr.classList.add('visual-sidebr');
      todoGrid.classList.add('update-todo-grid');
      sidebr.classList.remove('class');
      main.classList.remove('menu-remove');
      header.classList.remove('Menu-remove');

      setTimeout(() => {
        menuList.forEach((list) => {
          list.style.display = 'flex'; // Visible
          list.style.opacity = 1; // Opaque
        });
      }, 500);
    }
   
    // Toggle the state for the next click:
    isMenuOpen = !isMenuOpen;
  });
}

visualMenu(); // Call the function initially to create the menu state
