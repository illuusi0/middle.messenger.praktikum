export default `
<main class="layout-settings">
  <div class="settings-back">
    <a href="/pages/chats/" class="settings-back-btn">
      {{{arrowBackIcon}}}
    </a>
  </div>
  <div class="settings-content">
    <div class="settings-avatar">
      <div data-component="avatar"></div>
    </div>
    <h1 class="settings-name">{{displayName}}</h1>
    <div class="settings-form">
      <div class="settings-section">
        <div class="profile-field">
          <span class="profile-field-label">Почта</span>
          <span class="profile-field-value">{{email}}</span>
        </div>
        <div class="profile-field">
          <span class="profile-field-label">Логин</span>
          <span class="profile-field-value">{{login}}</span>
        </div>
        <div class="profile-field">
          <span class="profile-field-label">Имя</span>
          <span class="profile-field-value">{{firstName}}</span>
        </div>
        <div class="profile-field">
          <span class="profile-field-label">Фамилия</span>
          <span class="profile-field-value">{{secondName}}</span>
        </div>
        <div class="profile-field">
          <span class="profile-field-label">Имя в чате</span>
          <span class="profile-field-value">{{displayName}}</span>
        </div>
        <div class="profile-field">
          <span class="profile-field-label">Телефон</span>
          <span class="profile-field-value">{{phone}}</span>
        </div>
      </div>
      <div class="settings-actions">
        <a href="/pages/settings-edit/" class="button button--secondary button--full">Изменить данные</a>
        <a href="/pages/settings-password/" class="button button--secondary button--full">Изменить пароль</a>
        <a href="/pages/login/" class="button button--danger button--full">Выйти</a>
      </div>
    </div>
  </div>
</main>
`;

