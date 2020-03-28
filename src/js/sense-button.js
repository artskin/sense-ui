import { LitElement,css, html,unsafeCSS } from 'lit-element';

// import root from '../style/root.css';
import stylebutton from '../style/button.styl';
console.log(stylebutton);
console.log(unsafeCSS(stylebutton));


export class SenseButton extends LitElement {
  static get styles() {
		//return [css`${unsafeCSS(root)}`,css`${unsafeCSS(stylebutton)}`]
		//return [css`${unsafeCSS(stylebutton)}`]
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
    ${this.icons()}
    <style>:host{contain: layout style;display: inline-block;}${stylebutton}</style>
    <button @click=${this._event} class="btn--${this.type}">
      <i class="material-icons">account_circle</i>
      <i class="material-icons">mail</i>
      <slot name="icon-left"></slot>
      <slot>default</slot>
      <slot name="text"></slot>
    </button>
    `;
  }
  icons() {
		return html`<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>`
	}
}

