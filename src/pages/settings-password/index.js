import '../../styles/main.css';
import { SettingsPasswordPage } from './settings-password.js';

document.querySelector('#app').innerHTML = SettingsPasswordPage();

document.getElementById('settings-password-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log('Password Change:', Object.fromEntries(formData));
  window.location.href = '/pages/settings/';
});
