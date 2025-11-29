import template from './error404.tmpl.js';
import { templator } from '../../utils/templator.js';

export function Error404Page() {
  return templator(template, {});
}

