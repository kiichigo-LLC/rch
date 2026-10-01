import { BaseIcon } from './BaseIcon.js';

export class ArwIcon extends BaseIcon {
  getSvgContent() {
    return `
      <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }
}

customElements.define('arw-icon', ArwIcon);
