import { Block, Props } from '../../core/Block';
import template from './button.tmpl';
import { templator } from '../../utils/templator';

export interface ButtonProps extends Props {
  className?: string;
  type?: string;
  text: string;
  events?: Record<string, (e: Event) => void>;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  protected render(): string {
    return templator(template, {
      className: this.props.className || 'button',
      type: this.props.type || 'button',
      text: this.props.text || 'Button',
    });
  }
}

