import '../../styles/main.css';
import { RegisterPage } from './RegisterPage';

const app = document.querySelector('#app');
if (app) {
  const page = new RegisterPage();
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

