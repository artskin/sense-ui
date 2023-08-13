
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// import './timer-style.less?inline';
import timerStyle from './timer-style.less?inline';

export class TimeCount extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      color: var(--text-color, #000);
    }
  `;

  __shadowRoot: ShadowRoot | null = null;

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  @property({ type: String }) split = ":";

  @property({ type: String }) sort = "asc";// asc | desc

  @property({ type: String }) type = "slide";


  constructor() {
    super();
    this.__shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    super.connectedCallback();
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(timerStyle);
    this.__shadowRoot!.adoptedStyleSheets.push(sheet);
    const customProperties = ['--h','--s','--m'];
    customProperties.forEach((item:string) => {
      try {
        window.CSS.registerProperty({
          name: item,
          syntax: '<integer>',
          inherits: false,
          initialValue: '0',
        })
      } catch (error) {
        //console.warn(error)
      }
    });
  }

  attributeChangedCallback(name: string, ov: string, nv: string): void {
    super.attributeChangedCallback(name, ov, nv);
  }

  __increment() {
    this.counter += 1;
  }

  firstUpdated(){
    const time = this.shadowRoot!.querySelector('.time');
    const d = new Date(2006,1,12,21,20,12);
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    if(time) {
      time!.setAttribute('style',`--ds: ${s};--dm: ${m + s/60};--dh: ${h + m/60 + s/3600};`);
    }
  }

  render() {
    return html`
      <div class="time">
        <span class="hour" data-split="${this.split}"></span>
        <span class="minitus" data-split="${this.split}"></span>
        <span class="seconds"></span>
      </div>
    `;
  }
}
