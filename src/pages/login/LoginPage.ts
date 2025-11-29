import { View } from '../../core/View';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Validator } from '../../core/Validation';
import template from './login.tmpl';
import { templator } from '../../utils/templator';

export class LoginPage extends View {
  private loginInput!: Input;
  private passwordInput!: Input;
  private submitButton!: Button;
  private validator!: Validator;

  constructor() {
    super({});
    this.validator = new Validator();
    this.initComponents();
  }

  private initComponents(): void {
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
      text: 'Войти',
    });

    this.children = {
      loginInput: this.loginInput,
      passwordInput: this.passwordInput,
      submitButton: this.submitButton,
    };
  }

  private handleLoginBlur(e: Event): void {
    const target = e.target as HTMLInputElement;
    const error = this.validator.validateField('login', target.value);
    this.loginInput.setError(error);
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
    const form = this.getContent()?.querySelector('#login-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    const loginInputContainer = this.getContent()?.querySelector('[data-component="loginInput"]');
    const passwordInputContainer = this.getContent()?.querySelector('[data-component="passwordInput"]');
    const submitButtonContainer = this.getContent()?.querySelector('[data-component="submitButton"]');

    if (loginInputContainer && this.loginInput.getContent()) {
      loginInputContainer.appendChild(this.loginInput.getContent()!);
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

    const loginValue = this.loginInput.getValue();
    const passwordValue = this.passwordInput.getValue();

    const loginError = this.validator.validateField('login', loginValue);
    const passwordError = this.validator.validateField('password', passwordValue);

    this.loginInput.setError(loginError);
    this.passwordInput.setError(passwordError);

    if (loginError || passwordError) {
      return;
    }

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        data[key] = value;
      }
    }

    console.log('Login form data:', data);
  }
}

