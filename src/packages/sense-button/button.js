import { LitElement,css, html,unsafeCSS } from 'lit-element';

// import root from '../style/root.css';
import stylebutton from '../style/button.styl';
//console.log(stylebutton);


export class SenseButton extends LitElement {
  static get styles() {
		//return [css`${unsafeCSS(root)}`,css`${unsafeCSS(stylebutton)}`]
		return [css`${unsafeCSS(stylebutton)}`]
	}
  static get properties(){
    return {
      title:{type:String},
      type:{type:String,default:'default'}
    }
  }
  _event(e){
    console.log(this)
  }

  render(){
    return html`
    <style>:host{contain: layout style;display: inline-block;}</style>
    <button @click=${this._event} class="btn--${this.type}">
      <slot name="icon-left"></slot>
      <slot>default</slot>
      <slot name="text"></slot>
    </button>
    `;
  }
}

