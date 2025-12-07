export default `
<main class="layout-settings">
  <div class="settings-back">
    <a href="/pages/settings/" class="settings-back-btn">
      {{{arrowBackIcon}}}
    </a>
  </div>
  <div class="settings-content">
    <div class="settings-avatar">
      <div data-component="avatar"></div>
    </div>
    <h1 class="settings-name">Изменить пароль</h1>
    <div class="settings-form">
      <form class="form" id="settings-password-form">
        <div class="settings-section">
          <div data-component="oldPasswordInput"></div>
          <div data-component="newPasswordInput"></div>
          <div data-component="confirmPasswordInput"></div>
        </div>
        <div class="settings-actions">
          <div data-component="submitButton"></div>
        </div>
      </form>
    </div>
  </div>
</main>
`;

