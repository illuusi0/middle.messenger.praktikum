import template from './register.tmpl.js';
import { templator } from '../../utils/templator.js';
import { Input } from '../../components/input/input.js';
import { Button } from '../../components/button/button.js';

export function RegisterPage() {
  const emailInput = Input({
    name: 'email',
    label: 'Почта',
    type: 'email',
    placeholder: 'Введите почту',
    required: true,
  });

  const loginInput = Input({
    name: 'login',
    label: 'Логин',
    type: 'text',
    placeholder: 'Введите логин',
    required: true,
  });

  const firstNameInput = Input({
    name: 'first_name',
    label: 'Имя',
    type: 'text',
    placeholder: 'Введите имя',
    required: true,
  });

  const secondNameInput = Input({
    name: 'second_name',
    label: 'Фамилия',
    type: 'text',
    placeholder: 'Введите фамилию',
    required: true,
  });

  const phoneInput = Input({
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
    placeholder: '+7 (999) 999-99-99',
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
    text: 'Зарегистрироваться',
  });

  return templator(template, {
    emailInput,
    loginInput,
    firstNameInput,
    secondNameInput,
    phoneInput,
    passwordInput,
    submitButton,
  });
}

