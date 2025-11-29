export default `
<main class="layout-auth">
  <div class="auth-card">
    <div class="auth-header">
      <h1 class="auth-title">Регистрация</h1>
      <p class="auth-subtitle">Создайте новый аккаунт</p>
    </div>
    <form class="form" id="register-form">
      <div data-component="emailInput"></div>
      <div data-component="loginInput"></div>
      <div data-component="firstNameInput"></div>
      <div data-component="secondNameInput"></div>
      <div data-component="phoneInput"></div>
      <div data-component="passwordInput"></div>
      <div class="form-actions">
        <div data-component="submitButton"></div>
      </div>
    </form>
    <div class="auth-footer">
      <a href="/pages/login/" class="link">Уже есть аккаунт?</a>
    </div>
  </div>
</main>
`;

