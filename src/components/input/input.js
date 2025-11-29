import template from './input.tmpl.js';
import { templator } from '../../utils/templator.js';

export function Input(props = {}) {
  const defaultProps = {
    className: '',
    wrapperClassName: '',
    type: 'text',
    name: '',
    label: '',
    placeholder: '',
    value: '',
    error: '',
    required: false,
    ...props,
  };

  return templator(template, defaultProps);
}

