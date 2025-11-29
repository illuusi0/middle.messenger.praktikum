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
    <h1 class="settings-name">Изменить данные</h1>
    <div class="settings-form">
      <form class="form" id="settings-edit-form">
        <div class="settings-section">
          <div data-component="emailInput"></div>
          <div data-component="loginInput"></div>
          <div data-component="firstNameInput"></div>
          <div data-component="secondNameInput"></div>
          <div data-component="displayNameInput"></div>
          <div data-component="phoneInput"></div>
        </div>
        <div class="settings-actions">
          <div data-component="submitButton"></div>
        </div>
      </form>
    </div>
  </div>
</main>
`;

