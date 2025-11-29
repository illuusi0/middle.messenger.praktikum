import { Block, Props } from '../../core/Block';
import template from './input.tmpl';
import { templator } from '../../utils/templator';

export interface InputProps extends Props {
  className?: string;
  wrapperClassName?: string;
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  required?: boolean;
  events?: Record<string, (e: Event) => void>;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  protected render(): string {
    return templator(template, {
      className: this.props.className || '',
      wrapperClassName: this.props.wrapperClassName || '',
      type: this.props.type || 'text',
      name: this.props.name,
      label: this.props.label || '',
      placeholder: this.props.placeholder || '',
      value: this.props.value || '',
      error: this.props.error || '',
      required: this.props.required || false,
    });
  }

  setError(error: string): void {
    this.setProps({ error });
  }

  clearError(): void {
    this.setProps({ error: '' });
  }

  getValue(): string {
    const element = this.getContent()?.querySelector('input') as HTMLInputElement;
    return element?.value || '';
  }
}

