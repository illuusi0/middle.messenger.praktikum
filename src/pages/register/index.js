import '../../styles/main.css';
import { RegisterPage } from './register.js';

document.querySelector('#app').innerHTML = RegisterPage();

document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log('Register:', Object.fromEntries(formData));
  window.location.href = '/pages/chats/';
});
