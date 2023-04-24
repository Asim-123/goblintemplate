const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('nav');
const closeButton = document.createElement('span');
closeButton.classList.add('close-button');
closeButton.innerHTML = '&times;';

const hamburgerMenu = () => {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    nav.appendChild(closeButton);
  })
  
  closeButton.addEventListener('click', () => {
    nav.classList.remove('active');
    nav.removeChild(closeButton);
  })
}

hamburgerMenu();
