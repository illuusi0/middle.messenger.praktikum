import template from './settings-edit.tmpl.js';
import { templator } from '../../utils/templator.js';
import { Avatar } from '../../components/avatar/avatar.js';
import { Input } from '../../components/input/input.js';
import { Button } from '../../components/button/button.js';
import { ArrowBackIcon } from '../../components/icons/index.js';

const mockUser = {
  email: 'pochta@yandex.ru',
  login: 'ivanivanov',
  firstName: 'Ivan',
  secondName: 'Ivanov',
  displayName: 'Ivan',
  phone: '+7 (909) 967-30-30',
};

export function SettingsEditPage() {
  const avatar = Avatar({
    className: 'avatar--lg',
    initials: 'II',
    size: 120,
  });

  const emailInput = Input({
    name: 'email',
    label: 'Почта',
    type: 'email',
    value: mockUser.email,
    className: 'input--profile',
  });

  const loginInput = Input({
    name: 'login',
    label: 'Логин',
    type: 'text',
    value: mockUser.login,
    className: 'input--profile',
  });

  const firstNameInput = Input({
    name: 'first_name',
    label: 'Имя',
    type: 'text',
    value: mockUser.firstName,
    className: 'input--profile',
  });

  const secondNameInput = Input({
    name: 'second_name',
    label: 'Фамилия',
    type: 'text',
    value: mockUser.secondName,
    className: 'input--profile',
  });

  const displayNameInput = Input({
    name: 'display_name',
    label: 'Имя в чате',
    type: 'text',
    value: mockUser.displayName,
    className: 'input--profile',
  });

  const phoneInput = Input({
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
    value: mockUser.phone,
    className: 'input--profile',
  });

  const submitButton = Button({
    className: 'button button--primary button--full',
    type: 'submit',
    text: 'Сохранить',
  });

  return templator(template, {
    avatar,
    arrowBackIcon: ArrowBackIcon,
    emailInput,
    loginInput,
    firstNameInput,
    secondNameInput,
    displayNameInput,
    phoneInput,
    submitButton,
  });
}
