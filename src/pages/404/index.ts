import '../../styles/main.css';
import { Error404Page } from './Error404Page';

const app = document.querySelector('#app');
if (app) {
  const page = new Error404Page();
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

