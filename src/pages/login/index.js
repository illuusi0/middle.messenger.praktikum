import '../../styles/main.css';
import { LoginPage } from './login.js';

document.querySelector('#app').innerHTML = LoginPage();

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log('Login:', Object.fromEntries(formData));
  window.location.href = '/pages/chats/';
});
