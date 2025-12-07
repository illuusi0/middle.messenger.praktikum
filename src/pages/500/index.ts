import '../../styles/main.css';
import { Error500Page } from './Error500Page';

const app = document.querySelector('#app');
if (app) {
  const page = new Error500Page();
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

