import { View } from '../../core/View';
import { Block } from '../../core/Block';
import { Avatar } from '../../components/avatar';
import { Validator } from '../../core/Validation';
import template from './chats.tmpl';
import { templator } from '../../utils/templator';
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
} from '../../components/icons/index';

interface Chat {
  id: number;
  name: string;
  message: string;
  time: string;
  isBookmark?: boolean;
  initials?: string;
  unread?: number;
}

interface MessageData {
  text: string;
  time: string;
  isOwn: boolean;
}

export class ChatsPage extends View {
  private selectedChatId = 3;
  private userAvatar!: Avatar;
  private selectedChatAvatar!: Avatar;
  private validator!: Validator;
  private mockChats: Chat[];
  private mockMessages: MessageData[];

  constructor() {
    super({});

    this.mockChats = [
      { id: 1, name: 'Избранное', message: 'документ.pdf', time: '21:54', isBookmark: true },
      { id: 2, name: 'Дизайнеры', message: 'Вы: Как дела?', time: '16:27', initials: 'Д', unread: 0 },
      { id: 3, name: 'Алексей Петров', message: 'Хорошо, тогда до встречи!', time: '10:12', initials: 'АП' },
      { id: 4, name: 'Мария Иванова', message: 'Видео', time: 'Вт', initials: 'МИ', unread: 1 },
      { id: 5, name: 'Сергей Козлов', message: 'Хорошо, договорились', time: 'Вт', initials: 'СК' },
      { id: 6, name: 'Рабочий чат', message: 'Вы: Фото', time: 'Пн', initials: 'РЧ' },
      { id: 7, name: 'Дмитрий Смирнов', message: 'Жду ответа', time: 'Вс', initials: 'ДС' },
      { id: 8, name: 'Новости компании', message: 'Завтра состоится собрание...', time: 'Сб', initials: 'НК', unread: 1 },
    ];

    this.mockMessages = [
      { text: 'Привет! Ты сегодня свободен?', time: '09:45', isOwn: false },
      { text: 'Привет! Да, а что?', time: '09:50', isOwn: true },
      { text: 'Давай встретимся в кафе в 12:00', time: '09:55', isOwn: false },
      { text: 'Отлично, договорились!', time: '10:00', isOwn: true },
      { text: 'Хорошо, тогда до встречи!', time: '10:12', isOwn: false },
    ];

    this.validator = new Validator();
    this.initComponents();

    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  init(): void {
  }

  private initComponents(): void {
    this.userAvatar = new Avatar({
      initials: 'ИИ',
      size: 48,
    });

    const selectedChat = this.mockChats.find(chat => chat.id === this.selectedChatId);
    this.selectedChatAvatar = new Avatar({
      initials: selectedChat?.initials || '',
      size: 40,
    });

    this.children = {
      userAvatar: this.userAvatar,
      selectedChatAvatar: this.selectedChatAvatar,
    };
  }

  private renderChatItem(chat: Chat): string {
    let avatarHtml: string;

    if (chat.isBookmark) {
      avatarHtml = `<div class="chat-item-avatar chat-item-avatar--bookmark">${BookmarkIcon}</div>`;
    } else {
      avatarHtml = `<div class="avatar" style="width: 48px; height: 48px;"><div class="avatar-placeholder"><span class="avatar-initials">${chat.initials || ''}</span></div></div>`;
    }

    const unreadBadge = chat.unread ? `<span class="chat-item-badge">${chat.unread}</span>` : '';
    const activeClass = chat.id === this.selectedChatId ? 'chat-item--active' : '';

    return `<li class="chat-item ${activeClass}">${avatarHtml}<div class="chat-item-content"><div class="chat-item-header"><span class="chat-item-name">${chat.name}</span><span class="chat-item-time">${chat.time}</span></div><div class="chat-item-preview"><span class="chat-item-message">${chat.message}</span>${unreadBadge}</div></div></li>`;
  }

  private renderMessage(msg: MessageData): string {
    return `
      <div class="message ${msg.isOwn ? 'message--own' : 'message--other'}">
        <div class="message-text">${msg.text}</div>
        <div class="message-time">${msg.time}</div>
      </div>
    `;
  }

  protected render(): string {
    try {
      const chats = this.mockChats || [];
      const messages = this.mockMessages || [];

      if (chats.length === 0) {
        console.warn('No chats available');
        return templator(template, {
          chatItems: '',
          messages: '',
          selectedChat: false,
          selectedChatName: '',
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

      const chatItems = chats.map((chat: Chat) => this.renderChatItem(chat)).join('');
      const messagesHtml = messages.map((msg: MessageData) => this.renderMessage(msg)).join('');

      const selectedChat = chats.find((chat: Chat) => chat.id === this.selectedChatId);

      return templator(template, {
        chatItems,
        messages: messagesHtml,
        selectedChat: true,
        selectedChatName: selectedChat?.name || '',
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
    } catch (error) {
      console.error('Error rendering ChatsPage:', error);
      return '';
    }
  }

  componentDidMount(): void {
    const form = this.getContent()?.querySelector('#message-form') as HTMLFormElement;
    if (form) {
      const messageInput = form.querySelector('input[name="message"]') as HTMLInputElement;

      if (messageInput) {
        messageInput.addEventListener('blur', this.handleMessageBlur.bind(this));
      }

      form.addEventListener('submit', this.handleMessageSubmit.bind(this));
    }

    const burgerBtn = this.getContent()?.querySelector('.burger-btn') as HTMLButtonElement;
    if (burgerBtn) {
      burgerBtn.addEventListener('click', () => {
        const burgerMenu = burgerBtn.parentElement;
        if (burgerMenu) {
          burgerMenu.classList.toggle('burger-menu--open');
        }
      });
    }

    document.addEventListener('click', (e) => {
      const burgerMenu = this.getContent()?.querySelector('.burger-menu');
      if (burgerMenu && !burgerMenu.contains(e.target as Node)) {
        burgerMenu.classList.remove('burger-menu--open');
      }
    });
  }

  private handleMessageBlur(_e: Event): void {
  }

  private handleMessageSubmit(e: Event): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const messageValue = formData.get('message') as string;

    const error = this.validator.validateField('message', messageValue);
    if (error) {
      return;
    }

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        data[key] = value;
      }
    }

    console.log('Message form data:', data);

    const messageInput = form.querySelector('input[name="message"]') as HTMLInputElement;
    if (messageInput) {
      messageInput.value = '';
    }
  }
}

