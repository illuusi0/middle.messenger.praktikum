import { Block, Props } from '../../core/Block';
import template from './avatar.tmpl';
import { templator } from '../../utils/templator';

export interface AvatarProps extends Props {
  className?: string;
  src?: string;
  alt?: string;
  initials?: string;
  size?: number;
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  protected render(): string {
    const size = this.props.size || 48;
    const style = `width: ${size}px; height: ${size}px;`;
    
    return templator(template, {
      className: this.props.className || '',
      src: this.props.src || '',
      alt: this.props.alt || '',
      initials: this.props.initials || '',
      style,
    });
  }
}

