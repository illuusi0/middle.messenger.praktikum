import '../../styles/main.css';
import { LoginPage } from './LoginPage';

const app = document.querySelector('#app');
if (app) {
  const page = new LoginPage();
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

