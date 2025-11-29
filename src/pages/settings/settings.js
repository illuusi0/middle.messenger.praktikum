import template from './settings.tmpl.js';
import { templator } from '../../utils/templator.js';
import { Avatar } from '../../components/avatar/avatar.js';
import { ArrowBackIcon, PersonIcon } from '../../components/icons/index.js';

const mockUser = {
  email: 'pochta@yandex.ru',
  login: 'ivanivanov',
  firstName: 'Ivan',
  secondName: 'Ivanov',
  displayName: 'Ivan',
  phone: '+7 (909) 967-30-30',
};

export function SettingsPage() {
  const avatar = Avatar({
    className: 'avatar--lg',
    initials: 'II',
    size: 120,
  });

  return templator(template, {
    avatar,
    arrowBackIcon: ArrowBackIcon,
    personIcon: PersonIcon,
    ...mockUser,
  });
}
