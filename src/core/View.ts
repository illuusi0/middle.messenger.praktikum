import { Block } from './Block';
import { Props } from './Block';

export class View extends Block {
  constructor(props: Props = {}) {
    super(props);
  }

  protected render(): string {
    return '';
  }
}

