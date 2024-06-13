
import { NumberCount } from './number-count.js';

window.customElements.define('number-count', NumberCount);

declare global {
  interface HTMLElementTagNameMap {
    'number-count': NumberCount;
  }
}

export default NumberCount;