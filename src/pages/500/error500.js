import template from './error500.tmpl.js';
import { templator } from '../../utils/templator.js';

export function Error500Page() {
  return templator(template, {});
}

