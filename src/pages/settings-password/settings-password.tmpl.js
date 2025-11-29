export default `
<main class="layout-settings">
  <div class="settings-back">
    <a href="/pages/settings/" class="settings-back-btn">
      {{{arrowBackIcon}}}
    </a>
  </div>
  <div class="settings-content">
    <div class="settings-avatar">
      {{{avatar}}}
    </div>
    <h1 class="settings-name">Изменить пароль</h1>
    <div class="settings-form">
      <form class="form" id="settings-password-form">
        {{{oldPasswordInput}}}
        {{{newPasswordInput}}}
        {{{confirmPasswordInput}}}
        <div class="settings-actions">
          {{{submitButton}}}
        </div>
      </form>
    </div>
  </div>
</main>
`;
