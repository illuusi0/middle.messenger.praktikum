import template from './chats.tmpl.js';
import { templator } from '../../utils/templator.js';
import { Avatar } from '../../components/avatar/avatar.js';
import {
  MenuIcon,
  PersonIcon,
  ContactsIcon,
  SettingsIcon,
  LogoutIcon,
  SearchIcon,
  MoreIcon,
  AttachIcon,
  EmojiIcon,
  SendIcon,
  BookmarkIcon,
} from '../../components/icons/index.js';

const selectedChatId = 3;

const mockChats = [
  { id: 1, name: 'Избранное', message: 'документ.pdf', time: '21:54', isBookmark: true },
  { id: 2, name: 'Дизайнеры', message: 'Вы: Как дела?', time: '16:27', initials: 'Д', unread: 0 },
  { id: 3, name: 'Алексей Петров', message: 'Хорошо, тогда до встречи!', time: '10:12', initials: 'АП' },
  { id: 4, name: 'Мария Иванова', message: 'Видео', time: 'Вт', initials: 'МИ', unread: 1 },
  { id: 5, name: 'Сергей Козлов', message: 'Хорошо, договорились', time: 'Вт', initials: 'СК' },
  { id: 6, name: 'Рабочий чат', message: 'Вы: Фото', time: 'Пн', initials: 'РЧ' },
  { id: 7, name: 'Дмитрий Смирнов', message: 'Жду ответа', time: 'Вс', initials: 'ДС' },
  { id: 8, name: 'Новости компании', message: 'Завтра состоится собрание...', time: 'Сб', initials: 'НК', unread: 1 },
];

const mockMessages = [
  { text: 'Привет! Ты сегодня свободен?', time: '09:45', isOwn: false },
  { text: 'Привет! Да, а что?', time: '09:50', isOwn: true },
  { text: 'Давай встретимся в кафе в 12:00', time: '09:55', isOwn: false },
  { text: 'Отлично, договорились!', time: '10:00', isOwn: true },
  { text: 'Хорошо, тогда до встречи!', time: '10:12', isOwn: false },
];

function renderChatItem(chat) {
  let avatarHtml;
  
  if (chat.isBookmark) {
    avatarHtml = `<div class="chat-item-avatar chat-item-avatar--bookmark">${BookmarkIcon}</div>`;
  } else {
    avatarHtml = Avatar({
      initials: chat.initials,
      size: 48,
    });
  }

  return `
    <li class="chat-item ${chat.id === selectedChatId ? 'chat-item--active' : ''}">
      ${avatarHtml}
      <div class="chat-item-content">
        <div class="chat-item-header">
          <span class="chat-item-name">${chat.name}</span>
          <span class="chat-item-time">${chat.time}</span>
        </div>
        <div class="chat-item-preview">
          <span class="chat-item-message">${chat.message}</span>
          ${chat.unread ? `<span class="chat-item-badge">${chat.unread}</span>` : ''}
        </div>
      </div>
    </li>
  `;
}

function renderMessage(msg) {
  return `
    <div class="message ${msg.isOwn ? 'message--own' : 'message--other'}">
      <div class="message-text">${msg.isLink ? `<a href="${msg.text}" target="_blank">${msg.text}</a>` : msg.text}</div>
      <div class="message-time">${msg.time}</div>
    </div>
  `;
}

export function ChatsPage() {
  const chatItems = mockChats.map(renderChatItem).join('');
  const messages = mockMessages.map(renderMessage).join('');
  
  const selectedChat = mockChats.find(chat => chat.id === selectedChatId);
  
  const selectedChatAvatar = Avatar({
    initials: selectedChat.initials,
    size: 40,
  });

  const userAvatar = Avatar({
    initials: 'ИИ',
    size: 48,
  });

  return templator(template, {
    chatItems,
    messages,
    selectedChat: true,
    selectedChatName: selectedChat.name,
    selectedChatAvatar,
    userAvatar,
    userName: 'Иван Иванов',
    menuIcon: MenuIcon,
    personIcon: PersonIcon,
    contactsIcon: ContactsIcon,
    settingsIcon: SettingsIcon,
    logoutIcon: LogoutIcon,
    searchIcon: SearchIcon,
    moreIcon: MoreIcon,
    attachIcon: AttachIcon,
    emojiIcon: EmojiIcon,
    sendIcon: SendIcon,
    bookmarkIcon: BookmarkIcon,
  });
}
