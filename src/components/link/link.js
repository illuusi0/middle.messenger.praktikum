import template from './link.tmpl.js';
import { templator } from '../../utils/templator.js';

export function Link(props = {}) {
  const defaultProps = {
    className: '',
    href: '#',
    text: 'Link',
    ...props,
  };

  return templator(template, defaultProps);
}

