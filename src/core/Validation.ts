export type ValidationRule = {
  pattern: RegExp;
  message: string;
};

export type ValidationRules = Record<string, ValidationRule>;

export const validationRules: ValidationRules = {
  first_name: {
    pattern: /^[А-ЯЁA-Z][а-яёa-z-]+$/,
    message: 'Латиница или кириллица, первая буква заглавная, без пробелов, цифр и спецсимволов (кроме дефиса)',
  },
  second_name: {
    pattern: /^[А-ЯЁA-Z][а-яёa-z-]+$/,
    message: 'Латиница или кириллица, первая буква заглавная, без пробелов, цифр и спецсимволов (кроме дефиса)',
  },
  login: {
    pattern: /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/,
    message: 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов и спецсимволов (кроме дефиса и подчёркивания)',
  },
  email: {
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    message: 'Латиница, может включать цифры и спецсимволы, обязательно должна быть @ и точка после неё',
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    message: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  phone: {
    pattern: /^\+?\d{10,15}$/,
    message: 'От 10 до 15 символов, состоит из цифр, может начинаться с плюса',
  },
  message: {
    pattern: /.+/,
    message: 'Сообщение не должно быть пустым',
  },
};

export class Validator {
  private rules: ValidationRules;

  constructor(rules: ValidationRules = validationRules) {
    this.rules = rules;
  }

  validate(fieldName: string, value: string): string {
    const rule = this.rules[fieldName];
    if (!rule) {
      return '';
    }

    if (!rule.pattern.test(value)) {
      return rule.message;
    }

    return '';
  }

  validateForm(formData: FormData): Record<string, string> {
    const errors: Record<string, string> = {};

    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        const error = this.validate(key, value);
        if (error) {
          errors[key] = error;
        }
      }
    }

    return errors;
  }

  validateField(fieldName: string, value: string): string {
    return this.validate(fieldName, value);
  }
}

