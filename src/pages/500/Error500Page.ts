import { View } from '../../core/View';
import template from './error500.tmpl';
import { templator } from '../../utils/templator';

export class Error500Page extends View {
  protected render(): string {
    return templator(template, {});
  }
}

