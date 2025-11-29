import '../../styles/main.css';
import { SettingsPasswordPage } from './SettingsPasswordPage';

const app = document.querySelector('#app');
if (app) {
  const page = new SettingsPasswordPage();
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

