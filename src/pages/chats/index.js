import '../../styles/main.css';
import { ChatsPage } from './chats.js';

document.querySelector('#app').innerHTML = ChatsPage();

// Burger menu toggle
document.querySelector('.burger-btn')?.addEventListener('click', function() {
  this.parentElement.classList.toggle('burger-menu--open');
});

// Close burger menu when clicking outside
document.addEventListener('click', (e) => {
  const burgerMenu = document.querySelector('.burger-menu');
  if (burgerMenu && !burgerMenu.contains(e.target)) {
    burgerMenu.classList.remove('burger-menu--open');
  }
});

// Message form handler
document.getElementById('message-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log('Message:', Object.fromEntries(formData));
  e.target.reset();
});

