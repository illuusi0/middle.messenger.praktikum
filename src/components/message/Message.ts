import { Block, Props } from '../../core/Block';
import template from './message.tmpl';
import { templator } from '../../utils/templator';

export interface MessageProps extends Props {
  text: string;
  time: string;
  isOwn?: boolean;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  protected render(): string {
    return templator(template, {
      text: this.props.text,
      time: this.props.time,
      isOwn: this.props.isOwn || false,
    });
  }
}

