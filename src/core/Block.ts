import { EventBus } from './EventBus';

export type Props = Record<string, unknown>;

export class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  protected eventBus: EventBus;
  private _element: HTMLElement | null = null;
  protected props: Props;
  protected children: Record<string, Block>;

  constructor(props: Props = {}) {
    const eventBus = new EventBus();
    this.props = this._makePropsProxy(props);
    this.children = {};
    this.eventBus = eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this) as (...args: unknown[]) => void);
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this) as (...args: unknown[]) => void);
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this) as (...args: unknown[]) => void);
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this) as (...args: unknown[]) => void);
  }

  private _makePropsProxy(props: Props): Props {
    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value) => {
        const oldValue = target[prop];
        target[prop] = value;
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, value);
        return true;
      },
      deleteProperty: () => {
        throw new Error('Нет доступа');
      },
    });
  }

  init(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(): void {
  }

  dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return oldProps !== newProps;
  }

  setProps = (nextProps: Props): void => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  private _render(): void {
    const template = this.render();
    const fragment = document.createElement('template');
    fragment.innerHTML = template;
    const newElement = fragment.content.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    this._addEvents();
    this._renderChildren();
  }

  private _renderChildren(): void {
    Object.entries(this.children).forEach(([id, child]) => {
      const container = this._element?.querySelector(`[data-component="${id}"]`);
      if (container && child.getContent()) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
        container.appendChild(child.getContent()!);
        child.dispatchComponentDidMount();
      }
    });
  }

  protected render(): string {
    return '';
  }

  getContent(): HTMLElement | null {
    return this._element;
  }

  private _addEvents(): void {
    const events = (this.props.events as Record<string, EventListener> | undefined) || {};
    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  private _removeEvents(): void {
    const events = (this.props.events as Record<string, EventListener> | undefined) || {};
    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  show(): void {
    if (this._element) {
      this._element.style.display = 'block';
    }
  }

  hide(): void {
    if (this._element) {
      this._element.style.display = 'none';
    }
  }
}

