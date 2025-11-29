import { Block, Props } from './Block';

export class View<P extends Props = Props> extends Block<P> {
  constructor(props: P = {} as P) {
    super(props);
  }

  protected render(): string {
    return '';
  }
}

