import { View } from '../../core/View';
import { Avatar } from '../../components/avatar';
import { ArrowBackIcon, PersonIcon } from '../../components/icons/index';
import template from './settings.tmpl';
import { templator } from '../../utils/templator';

const mockUser = {
  email: 'pochta@yandex.ru',
  login: 'ivanivanov',
  firstName: 'Ivan',
  secondName: 'Ivanov',
  displayName: 'Ivan',
  phone: '+7 (909) 967-30-30',
};

export class SettingsPage extends View {
  private avatar!: Avatar;

  constructor() {
    super({});
    this.avatar = new Avatar({
      className: 'avatar--lg',
      initials: 'II',
      size: 120,
    });
    this.children = {
      avatar: this.avatar,
    };
  }

  protected render(): string {
    return templator(template, {
      arrowBackIcon: ArrowBackIcon,
      personIcon: PersonIcon,
      ...mockUser,
    });
  }

  componentDidMount(): void {
    const avatarContainer = this.getContent()?.querySelector('[data-component="avatar"]');
    if (avatarContainer && this.avatar.getContent()) {
      avatarContainer.appendChild(this.avatar.getContent()!);
    }
  }
}

