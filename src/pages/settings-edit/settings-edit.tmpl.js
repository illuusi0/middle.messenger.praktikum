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
    <h1 class="settings-name">Изменить данные</h1>
    <div class="settings-form">
      <form class="form" id="settings-edit-form">
        {{{emailInput}}}
        {{{loginInput}}}
        {{{firstNameInput}}}
        {{{secondNameInput}}}
        {{{displayNameInput}}}
        {{{phoneInput}}}
        <div class="settings-actions">
          {{{submitButton}}}
        </div>
      </form>
    </div>
  </div>
</main>
`;
