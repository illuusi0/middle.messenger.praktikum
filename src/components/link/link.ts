import template from './link.tmpl';
import { templator } from '../../utils/templator';

export function Link(props: Record<string, unknown> = {}): string {
  const defaultProps = {
    className: '',
    href: '#',
    text: 'Link',
    ...props,
  };

  return templator(template, defaultProps);
}

