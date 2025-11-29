import { View } from '../../core/View';
import template from './error404.tmpl';
import { templator } from '../../utils/templator';

export class Error404Page extends View {
  protected render(): string {
    return templator(template, {});
  }
}

