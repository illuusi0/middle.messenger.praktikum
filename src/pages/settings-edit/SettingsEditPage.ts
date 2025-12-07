import { View } from '../../core/View';
import { Avatar } from '../../components/avatar';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Validator } from '../../core/Validation';
import { ArrowBackIcon } from '../../components/icons/index';
import template from './settings-edit.tmpl';
import { templator } from '../../utils/templator';

const mockUser = {
  email: 'pochta@yandex.ru',
  login: 'ivanivanov',
  firstName: 'Ivan',
  secondName: 'Ivanov',
  displayName: 'Ivan',
  phone: '+7 (909) 967-30-30',
};

export class SettingsEditPage extends View {
  private avatar!: Avatar;
  private emailInput!: Input;
  private loginInput!: Input;
  private firstNameInput!: Input;
  private secondNameInput!: Input;
  private displayNameInput!: Input;
  private phoneInput!: Input;
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

    this.emailInput = new Input({
      name: 'email',
      label: 'Почта',
      type: 'email',
      value: mockUser.email,
      className: 'input--profile',
      events: {
        blur: this.handleEmailBlur.bind(this),
      },
    });

    this.loginInput = new Input({
      name: 'login',
      label: 'Логин',
      type: 'text',
      value: mockUser.login,
      className: 'input--profile',
      events: {
        blur: this.handleLoginBlur.bind(this),
      },
    });

    this.firstNameInput = new Input({
      name: 'first_name',
      label: 'Имя',
      type: 'text',
      value: mockUser.firstName,
      className: 'input--profile',
      events: {
        blur: this.handleFirstNameBlur.bind(this),
      },
    });

    this.secondNameInput = new Input({
      name: 'second_name',
      label: 'Фамилия',
      type: 'text',
      value: mockUser.secondName,
      className: 'input--profile',
      events: {
        blur: this.handleSecondNameBlur.bind(this),
      },
    });

    this.displayNameInput = new Input({
      name: 'display_name',
      label: 'Имя в чате',
      type: 'text',
      value: mockUser.displayName,
      className: 'input--profile',
    });

    this.phoneInput = new Input({
      name: 'phone',
      label: 'Телефон',
      type: 'tel',
      value: mockUser.phone,
      className: 'input--profile',
      events: {
        blur: this.handlePhoneBlur.bind(this),
      },
    });

    this.submitButton = new Button({
      className: 'button button--primary button--full',
      type: 'submit',
      text: 'Сохранить',
    });

    this.children = {
      avatar: this.avatar,
      emailInput: this.emailInput,
      loginInput: this.loginInput,
      firstNameInput: this.firstNameInput,
      secondNameInput: this.secondNameInput,
      displayNameInput: this.displayNameInput,
      phoneInput: this.phoneInput,
      submitButton: this.submitButton,
    };
  }

  private handleEmailBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('email', target.value);
    this.emailInput.setError(error);
  }

  private handleLoginBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('login', target.value);
    this.loginInput.setError(error);
  }

  private handleFirstNameBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('first_name', target.value);
    this.firstNameInput.setError(error);
  }

  private handleSecondNameBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('second_name', target.value);
    this.secondNameInput.setError(error);
  }

  private handlePhoneBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('phone', target.value);
    this.phoneInput.setError(error);
  }

  protected render(): string {
    return templator(template, {
      arrowBackIcon: ArrowBackIcon,
    });
  }

  componentDidMount(): void {
    const form = this.getContent()?.querySelector('#settings-edit-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    const avatarContainer = this.getContent()?.querySelector('[data-component="avatar"]');
    const emailInputContainer = this.getContent()?.querySelector('[data-component="emailInput"]');
    const loginInputContainer = this.getContent()?.querySelector('[data-component="loginInput"]');
    const firstNameInputContainer = this.getContent()?.querySelector('[data-component="firstNameInput"]');
    const secondNameInputContainer = this.getContent()?.querySelector('[data-component="secondNameInput"]');
    const displayNameInputContainer = this.getContent()?.querySelector('[data-component="displayNameInput"]');
    const phoneInputContainer = this.getContent()?.querySelector('[data-component="phoneInput"]');
    const submitButtonContainer = this.getContent()?.querySelector('[data-component="submitButton"]');

    if (avatarContainer && this.avatar.getContent()) {
      avatarContainer.appendChild(this.avatar.getContent()!);
    }
    if (emailInputContainer && this.emailInput.getContent()) {
      emailInputContainer.appendChild(this.emailInput.getContent()!);
    }
    if (loginInputContainer && this.loginInput.getContent()) {
      loginInputContainer.appendChild(this.loginInput.getContent()!);
    }
    if (firstNameInputContainer && this.firstNameInput.getContent()) {
      firstNameInputContainer.appendChild(this.firstNameInput.getContent()!);
    }
    if (secondNameInputContainer && this.secondNameInput.getContent()) {
      secondNameInputContainer.appendChild(this.secondNameInput.getContent()!);
    }
    if (displayNameInputContainer && this.displayNameInput.getContent()) {
      displayNameInputContainer.appendChild(this.displayNameInput.getContent()!);
    }
    if (phoneInputContainer && this.phoneInput.getContent()) {
      phoneInputContainer.appendChild(this.phoneInput.getContent()!);
    }
    if (submitButtonContainer && this.submitButton.getContent()) {
      submitButtonContainer.appendChild(this.submitButton.getContent()!);
    }
  }

  private handleSubmit(e: Event): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const emailValue = this.emailInput.getValue();
    const loginValue = this.loginInput.getValue();
    const firstNameValue = this.firstNameInput.getValue();
    const secondNameValue = this.secondNameInput.getValue();
    const phoneValue = this.phoneInput.getValue();

    const emailError = this.validator.validateField('email', emailValue);
    const loginError = this.validator.validateField('login', loginValue);
    const firstNameError = this.validator.validateField('first_name', firstNameValue);
    const secondNameError = this.validator.validateField('second_name', secondNameValue);
    const phoneError = this.validator.validateField('phone', phoneValue);

    this.emailInput.setError(emailError);
    this.loginInput.setError(loginError);
    this.firstNameInput.setError(firstNameError);
    this.secondNameInput.setError(secondNameError);
    this.phoneInput.setError(phoneError);

    if (emailError || loginError || firstNameError || secondNameError || phoneError) {
      return;
    }

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        data[key] = value;
      }
    }

    console.log('Settings edit form data:', data);
  }
}

