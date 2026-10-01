import { BaseIcon } from './BaseIcon.js';

export class TagIcon extends BaseIcon {
  getSvgContent() {
    return `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1293 21.9499C19.1224 22.4013 20.25 21.6753 20.25 20.5843L20.25 3.41383C20.25 2.5854 19.5784 1.91383 18.75 1.91383L5.25 1.91383C4.42157 1.91383 3.75 2.5854 3.75 3.41383L3.75 20.5843C3.75 21.6753 4.87756 22.4013 5.87071 21.9499L11.3793 19.446C11.7737 19.2667 12.2263 19.2667 12.6207 19.446L18.1293 21.9499Z" fill="currentColor"/>
      </svg>
    `;
  }
}

customElements.define('tag-icon', TagIcon);
