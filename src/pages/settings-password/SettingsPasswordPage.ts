import { View } from '../../core/View';
import { Avatar } from '../../components/avatar';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Validator } from '../../core/Validation';
import { ArrowBackIcon } from '../../components/icons/index';
import template from './settings-password.tmpl';
import { templator } from '../../utils/templator';

export class SettingsPasswordPage extends View {
  private avatar!: Avatar;
  private oldPasswordInput!: Input;
  private newPasswordInput!: Input;
  private confirmPasswordInput!: Input;
  private submitButton!: Button;
  private validator!: Validator;

  constructor() {
    super({});
    this.validator = new Validator();
    this.initComponents();
  }

  private initComponents(): void {
    this.avatar = new Avatar({
      className: 'avatar--lg',
      initials: 'II',
      size: 120,
    });

    this.oldPasswordInput = new Input({
      name: 'old_password',
      label: 'Старый пароль',
      type: 'password',
      placeholder: 'Введите старый пароль',
      className: 'input--profile',
      events: {
        blur: this.handleOldPasswordBlur.bind(this),
      },
    });

    this.newPasswordInput = new Input({
      name: 'new_password',
      label: 'Новый пароль',
      type: 'password',
      placeholder: 'Введите новый пароль',
      className: 'input--profile',
      events: {
        blur: this.handleNewPasswordBlur.bind(this),
      },
    });

    this.confirmPasswordInput = new Input({
      name: 'new_password_confirm',
      label: 'Повторите новый пароль',
      type: 'password',
      placeholder: 'Повторите новый пароль',
      className: 'input--profile',
      events: {
        blur: this.handleConfirmPasswordBlur.bind(this),
      },
    });

    this.submitButton = new Button({
      className: 'button button--primary button--full',
      type: 'submit',
      text: 'Сохранить',
    });

    this.children = {
      avatar: this.avatar,
      oldPasswordInput: this.oldPasswordInput,
      newPasswordInput: this.newPasswordInput,
      confirmPasswordInput: this.confirmPasswordInput,
      submitButton: this.submitButton,
    };
  }

  private handleOldPasswordBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('password', target.value);
    this.oldPasswordInput.setError(error);
  }

  private handleNewPasswordBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('password', target.value);
    this.newPasswordInput.setError(error);
  }

  private handleConfirmPasswordBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const newPasswordValue = this.newPasswordInput.getValue();
    const confirmPasswordValue = target.value;

    if (newPasswordValue !== confirmPasswordValue) {
      this.confirmPasswordInput.setError('Пароли не совпадают');
      return;
    }

    const error = this.validator.validateField('password', confirmPasswordValue);
    this.confirmPasswordInput.setError(error);
  }

  protected render(): string {
    return templator(template, {
      arrowBackIcon: ArrowBackIcon,
    });
  }

  componentDidMount(): void {
    const form = this.getContent()?.querySelector('#settings-password-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    const avatarContainer = this.getContent()?.querySelector('[data-component="avatar"]');
    const oldPasswordInputContainer = this.getContent()?.querySelector('[data-component="oldPasswordInput"]');
    const newPasswordInputContainer = this.getContent()?.querySelector('[data-component="newPasswordInput"]');
    const confirmPasswordInputContainer = this.getContent()?.querySelector('[data-component="confirmPasswordInput"]');
    const submitButtonContainer = this.getContent()?.querySelector('[data-component="submitButton"]');

    if (avatarContainer && this.avatar.getContent()) {
      avatarContainer.appendChild(this.avatar.getContent()!);
    }
    if (oldPasswordInputContainer && this.oldPasswordInput.getContent()) {
      oldPasswordInputContainer.appendChild(this.oldPasswordInput.getContent()!);
    }
    if (newPasswordInputContainer && this.newPasswordInput.getContent()) {
      newPasswordInputContainer.appendChild(this.newPasswordInput.getContent()!);
    }
    if (confirmPasswordInputContainer && this.confirmPasswordInput.getContent()) {
      confirmPasswordInputContainer.appendChild(this.confirmPasswordInput.getContent()!);
    }
    if (submitButtonContainer && this.submitButton.getContent()) {
      submitButtonContainer.appendChild(this.submitButton.getContent()!);
    }
  }

  private handleSubmit(e: Event): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const oldPasswordValue = this.oldPasswordInput.getValue();
    const newPasswordValue = this.newPasswordInput.getValue();
    const confirmPasswordValue = this.confirmPasswordInput.getValue();

    const oldPasswordError = this.validator.validateField('password', oldPasswordValue);
    const newPasswordError = this.validator.validateField('password', newPasswordValue);
    
    let confirmPasswordError = '';
    if (newPasswordValue !== confirmPasswordValue) {
      confirmPasswordError = 'Пароли не совпадают';
    } else {
      confirmPasswordError = this.validator.validateField('password', confirmPasswordValue);
    }

    this.oldPasswordInput.setError(oldPasswordError);
    this.newPasswordInput.setError(newPasswordError);
    this.confirmPasswordInput.setError(confirmPasswordError);

    if (oldPasswordError || newPasswordError || confirmPasswordError) {
      return;
    }

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        data[key] = value;
      }
    }

    console.log('Settings password form data:', data);
  }
}

