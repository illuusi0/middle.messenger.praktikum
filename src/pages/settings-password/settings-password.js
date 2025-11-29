import template from './settings-password.tmpl.js';
import { templator } from '../../utils/templator.js';
import { Avatar } from '../../components/avatar/avatar.js';
import { Input } from '../../components/input/input.js';
import { Button } from '../../components/button/button.js';
import { ArrowBackIcon } from '../../components/icons/index.js';

export function SettingsPasswordPage() {
  const avatar = Avatar({
    className: 'avatar--lg',
    initials: 'II',
    size: 120,
  });

  const oldPasswordInput = Input({
    name: 'old_password',
    label: 'Старый пароль',
    type: 'password',
    placeholder: 'Введите старый пароль',
    className: 'input--profile',
  });

  const newPasswordInput = Input({
    name: 'new_password',
    label: 'Новый пароль',
    type: 'password',
    placeholder: 'Введите новый пароль',
    className: 'input--profile',
  });

  const confirmPasswordInput = Input({
    name: 'new_password_confirm',
    label: 'Повторите новый пароль',
    type: 'password',
    placeholder: 'Повторите новый пароль',
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
    oldPasswordInput,
    newPasswordInput,
    confirmPasswordInput,
    submitButton,
  });
}
