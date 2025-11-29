export default `
<main class="layout-auth">
  <div class="auth-card">
    <div class="auth-header">
      <h1 class="auth-title">Вход</h1>
      <p class="auth-subtitle">Войдите в свой аккаунт</p>
    </div>
    <form class="form" id="login-form">
      {{{loginInput}}}
      {{{passwordInput}}}
      <div class="form-actions">
        {{{submitButton}}}
      </div>
    </form>
    <div class="auth-footer">
      <a href="/pages/register/" class="link">Нет аккаунта?</a>
    </div>
  </div>
</main>
`;
