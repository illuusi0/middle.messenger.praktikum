import '../../styles/main.css';
import { SettingsEditPage } from './settings-edit.js';

document.querySelector('#app').innerHTML = SettingsEditPage();

document.getElementById('settings-edit-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log('Settings Edit:', Object.fromEntries(formData));
  window.location.href = '/pages/settings/';
});
