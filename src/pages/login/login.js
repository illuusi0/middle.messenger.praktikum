import template from './login.tmpl.js';
import { templator } from '../../utils/templator.js';
import { Input } from '../../components/input/input.js';
import { Button } from '../../components/button/button.js';

export function LoginPage() {
  const loginInput = Input({
    name: 'login',
    label: 'Логин',
    type: 'text',
    placeholder: 'Введите логин',
    required: true,
  });

  const passwordInput = Input({
    name: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder: 'Введите пароль',
    required: true,
  });

  const submitButton = Button({
    className: 'button button--primary button--full',
    type: 'submit',
    text: 'Войти',
  });

  return templator(template, {
    loginInput,
    passwordInput,
    submitButton,
  });
}

