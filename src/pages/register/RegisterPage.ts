import { View } from '../../core/View';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Validator } from '../../core/Validation';
import template from './register.tmpl';
import { templator } from '../../utils/templator';

export class RegisterPage extends View {
  private emailInput!: Input;
  private loginInput!: Input;
  private firstNameInput!: Input;
  private secondNameInput!: Input;
  private phoneInput!: Input;
  private passwordInput!: Input;
  private submitButton!: Button;
  private validator!: Validator;

  constructor() {
    super({});
    this.validator = new Validator();
    this.initComponents();
  }

  private initComponents(): void {
    this.emailInput = new Input({
      name: 'email',
      label: 'Почта',
      type: 'email',
      placeholder: 'Введите почту',
      required: true,
      events: {
        blur: this.handleEmailBlur.bind(this),
      },
    });

    this.loginInput = new Input({
      name: 'login',
      label: 'Логин',
      type: 'text',
      placeholder: 'Введите логин',
      required: true,
      events: {
        blur: this.handleLoginBlur.bind(this),
      },
    });

    this.firstNameInput = new Input({
      name: 'first_name',
      label: 'Имя',
      type: 'text',
      placeholder: 'Введите имя',
      required: true,
      events: {
        blur: this.handleFirstNameBlur.bind(this),
      },
    });

    this.secondNameInput = new Input({
      name: 'second_name',
      label: 'Фамилия',
      type: 'text',
      placeholder: 'Введите фамилию',
      required: true,
      events: {
        blur: this.handleSecondNameBlur.bind(this),
      },
    });

    this.phoneInput = new Input({
      name: 'phone',
      label: 'Телефон',
      type: 'tel',
      placeholder: '+7 (999) 999-99-99',
      required: true,
      events: {
        blur: this.handlePhoneBlur.bind(this),
      },
    });

    this.passwordInput = new Input({
      name: 'password',
      label: 'Пароль',
      type: 'password',
      placeholder: 'Введите пароль',
      required: true,
      events: {
        blur: this.handlePasswordBlur.bind(this),
      },
    });

    this.submitButton = new Button({
      className: 'button button--primary button--full',
      type: 'submit',
      text: 'Зарегистрироваться',
    });

    this.children = {
      emailInput: this.emailInput,
      loginInput: this.loginInput,
      firstNameInput: this.firstNameInput,
      secondNameInput: this.secondNameInput,
      phoneInput: this.phoneInput,
      passwordInput: this.passwordInput,
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

  private handlePasswordBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('password', target.value);
    this.passwordInput.setError(error);
  }

  protected render(): string {
    return templator(template, {});
  }

  componentDidMount(): void {
    const form = this.getContent()?.querySelector('#register-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    const emailInputContainer = this.getContent()?.querySelector('[data-component="emailInput"]');
    const loginInputContainer = this.getContent()?.querySelector('[data-component="loginInput"]');
    const firstNameInputContainer = this.getContent()?.querySelector('[data-component="firstNameInput"]');
    const secondNameInputContainer = this.getContent()?.querySelector('[data-component="secondNameInput"]');
    const phoneInputContainer = this.getContent()?.querySelector('[data-component="phoneInput"]');
    const passwordInputContainer = this.getContent()?.querySelector('[data-component="passwordInput"]');
    const submitButtonContainer = this.getContent()?.querySelector('[data-component="submitButton"]');

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
    if (phoneInputContainer && this.phoneInput.getContent()) {
      phoneInputContainer.appendChild(this.phoneInput.getContent()!);
    }
    if (passwordInputContainer && this.passwordInput.getContent()) {
      passwordInputContainer.appendChild(this.passwordInput.getContent()!);
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
    const passwordValue = this.passwordInput.getValue();

    const emailError = this.validator.validateField('email', emailValue);
    const loginError = this.validator.validateField('login', loginValue);
    const firstNameError = this.validator.validateField('first_name', firstNameValue);
    const secondNameError = this.validator.validateField('second_name', secondNameValue);
    const phoneError = this.validator.validateField('phone', phoneValue);
    const passwordError = this.validator.validateField('password', passwordValue);

    this.emailInput.setError(emailError);
    this.loginInput.setError(loginError);
    this.firstNameInput.setError(firstNameError);
    this.secondNameInput.setError(secondNameError);
    this.phoneInput.setError(phoneError);
    this.passwordInput.setError(passwordError);

    if (emailError || loginError || firstNameError || secondNameError || phoneError || passwordError) {
      return;
    }

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        data[key] = value;
      }
    }

    console.log('Register form data:', data);
  }
}

