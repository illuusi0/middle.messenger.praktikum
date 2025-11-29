import template from './avatar.tmpl.js';
import { templator } from '../../utils/templator.js';

const sizeClassMap = {
  40: 'avatar--sm',
  48: '',
  120: 'avatar--lg',
};

export function Avatar(props = {}) {
  const { size = 48, className = '', ...restProps } = props;
  const sizeClass = sizeClassMap[size] || '';
  const combinedClassName = [sizeClass, className].filter(Boolean).join(' ');

  const defaultProps = {
    className: combinedClassName,
    src: '',
    alt: 'Avatar',
    initials: '',
    ...restProps,
  };

  return templator(template, defaultProps);
}

