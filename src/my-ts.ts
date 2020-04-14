

  import {LitElement, html, css, customElement, property,unsafeCSS} from 'lit-element';
 
  import './style/demo.styl';
  //import './packages/sense-button/button.styl';
  const btnStyle = require('./packages/sense-button/button.styl');
  console.log(unsafeCSS(btnStyle))
  // This decorator defines the element.
  @customElement('my-element')
  export class MyElement extends LitElement {

    // This decorator creates a property accessor that triggers rendering and
    // an observed attribute.
    @property({ type: String, reflect: true })
    public type:'default'|'primary'|'warning'|'danger'|'success' = 'default';

    @property({type:String,reflect:true})
    public size:''|'big'|'small'|'mini' = ''

    @property({type:Boolean,reflect:true})
    public wire = ''

    static styles = css`
      span {
        color: green;
      }`;

    // Render element DOM by returning a `lit-html` template.
    render() {
      return html`
      <style>${unsafeCSS(btnStyle)}</style>
      <button @click=${this._event} class="${this.type}${this.size}${this.wire}" style="--ripple-left:${this.translateStartX};--ripple-top:${this.translateStartY}">
        <slot name="icon-left"></slot>
        <slot>default</slot>
        <slot name="text"></slot>
      </button>
      `;
    }
  }