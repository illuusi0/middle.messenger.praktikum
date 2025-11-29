import './styles/main.css';
import { templator } from './utils/templator';

const template = `
<main class="layout-auth">
  <div class="auth-card">
    <div class="auth-header">
      <h1 class="auth-title">Messenger</h1>
      <p class="auth-subtitle">Навигация по страницам</p>
    </div>
    <nav>
      <ul class="nav-list">
        <li class="nav-item"><a href="/pages/login/" class="nav-link">Авторизация</a></li>
        <li class="nav-item"><a href="/pages/register/" class="nav-link">Регистрация</a></li>
        <li class="nav-item"><a href="/pages/chats/" class="nav-link">Чаты</a></li>
        <li class="nav-item"><a href="/pages/settings/" class="nav-link">Настройки профиля</a></li>
        <li class="nav-item"><a href="/pages/settings-edit/" class="nav-link">Редактирование профиля</a></li>
        <li class="nav-item"><a href="/pages/settings-password/" class="nav-link">Изменение пароля</a></li>
        <li class="nav-item"><a href="/pages/404/" class="nav-link">Страница 404</a></li>
        <li class="nav-item"><a href="/pages/500/" class="nav-link">Страница 500</a></li>
      </ul>
    </nav>
  </div>
</main>
`;

const styles = `
<style>
  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
  }
  .nav-item {
    display: block;
  }
  .nav-link {
    display: block;
    padding: 12px 16px;
    background-color: var(--color-bg-input);
    border-radius: var(--radius-md);
    color: var(--color-text-primary);
    text-decoration: none;
    transition: background-color var(--transition-fast);
  }
  .nav-link:hover {
    background-color: var(--color-bg-hover);
  }
</style>
`;

const app = document.querySelector('#app');
if (app) {
  app.innerHTML = styles + templator(template, {});
}

