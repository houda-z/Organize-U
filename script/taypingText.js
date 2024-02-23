/*export function taypingText(){
const div = document.querySelector('.text');
const text = ` Empower Your Priorities: Organize Your Time, Transform Your Life `;

function taping(){
    // Create a span for each letter with the desired class
    
    text.split('').forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.classList.add('taping-text');
      //Add a slight delay for visual effect
    
     setTimeout(() => {
        div.appendChild(span);
      }, index * 40); // Adjust delay as needed
    });
}
taping();
}*/