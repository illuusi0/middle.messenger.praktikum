export default `
<main class="layout-auth">
  <div class="auth-card">
    <div class="auth-header">
      <h1 class="auth-title">Регистрация</h1>
      <p class="auth-subtitle">Создайте новый аккаунт</p>
    </div>
    <form class="form" id="register-form">
      {{{emailInput}}}
      {{{loginInput}}}
      {{{firstNameInput}}}
      {{{secondNameInput}}}
      {{{phoneInput}}}
      {{{passwordInput}}}
      <div class="form-actions">
        {{{submitButton}}}
      </div>
    </form>
    <div class="auth-footer">
      <a href="/pages/login/" class="link">Войти</a>
    </div>
  </div>
</main>
`;
