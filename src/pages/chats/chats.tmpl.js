export default `
<div class="layout-chat">
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="burger-menu">
        <button class="icon-btn burger-btn" type="button">
          {{{menuIcon}}}
        </button>
        <div class="burger-dropdown">
          <div class="burger-dropdown-header">
            {{{userAvatar}}}
            <div class="burger-dropdown-user">
              <span class="burger-dropdown-name">{{userName}}</span>
            </div>
          </div>
          <div class="burger-dropdown-divider"></div>
          <a href="/pages/settings/" class="burger-dropdown-item">
            {{{personIcon}}}
            <span>Мой профиль</span>
          </a>
          <a href="#" class="burger-dropdown-item">
            {{{contactsIcon}}}
            <span>Контакты</span>
          </a>
          <a href="/pages/settings/" class="burger-dropdown-item">
            {{{settingsIcon}}}
            <span>Настройки</span>
          </a>
          <div class="burger-dropdown-divider"></div>
          <a href="/pages/login/" class="burger-dropdown-item burger-dropdown-item--danger">
            {{{logoutIcon}}}
            <span>Выйти</span>
          </a>
        </div>
      </div>
      <div class="sidebar-search">
        <input type="text" class="sidebar-search-input" placeholder="Поиск" />
      </div>
    </div>
    <div class="sidebar-tabs">
      <button class="sidebar-tab sidebar-tab--active" type="button">Все чаты</button>
      <button class="sidebar-tab" type="button">Проекты</button>
      <button class="sidebar-tab" type="button">Важные</button>
    </div>
    <ul class="chat-list">
      {{{chatItems}}}
    </ul>
  </aside>
  <main class="chat-main">
    {{#if selectedChat}}
    <div class="chat-header">
      <div class="chat-header-info">
        {{{selectedChatAvatar}}}
        <span class="chat-header-title">{{selectedChatName}}</span>
      </div>
      <div class="chat-header-actions">
        <button class="icon-btn" type="button">
          {{{searchIcon}}}
        </button>
        <button class="icon-btn" type="button">
          {{{moreIcon}}}
        </button>
      </div>
    </div>
    <div class="chat-messages">
      {{{messages}}}
    </div>
    <div class="chat-input-area">
      <form class="chat-input-wrapper" id="message-form">
        <button class="chat-input-btn" type="button">
          {{{attachIcon}}}
        </button>
        <input type="text" name="message" class="chat-input" placeholder="Написать сообщение..." />
        <button class="chat-input-btn" type="button">
          {{{emojiIcon}}}
        </button>
        <button class="chat-input-btn" type="submit">
          {{{sendIcon}}}
        </button>
      </form>
    </div>
    {{else}}
    <div class="chat-empty">
      <p>Выберите чат для начала переписки</p>
    </div>
    {{/if}}
  </main>
</div>
`;
