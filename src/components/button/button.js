import template from './button.tmpl.js';
import { templator } from '../../utils/templator.js';

export function Button(props = {}) {
  const defaultProps = {
    className: 'button',
    type: 'button',
    text: 'Button',
    ...props,
  };

  return templator(template, defaultProps);
}

