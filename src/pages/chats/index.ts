import '../../styles/main.css';
import { ChatsPage } from './ChatsPage';

const app = document.querySelector('#app');
if (app) {
  const page = new ChatsPage();
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

