export default `
<main class="layout-auth">
  <div class="auth-card">
    <div class="auth-header">
      <h1 class="auth-title">Вход</h1>
      <p class="auth-subtitle">Войдите в свой аккаунт</p>
    </div>
    <form class="form" id="login-form">
      <div data-component="loginInput"></div>
      <div data-component="passwordInput"></div>
      <div class="form-actions">
        <div data-component="submitButton"></div>
      </div>
    </form>
    <div class="auth-footer">
      <a href="/pages/register/" class="link">Нет аккаунта?</a>
    </div>
  </div>
</main>
`;

