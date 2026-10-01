export class BaseIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 1em;
          height: 1em;
        }
        svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      </style>
      ${this.getSvgContent()}
    `;
  }

  getSvgContent() {
    return '';
  }
}
