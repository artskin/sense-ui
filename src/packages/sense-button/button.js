import { LitElement,css, html,unsafeCSS } from 'lit-element';

// import root from '../style/root.css';
import stylebutton from './button.styl';
//console.log(stylebutton);


export class SenseButton extends LitElement {
  //translateStart = '';
  static get styles() {
		//return [css`${unsafeCSS(root)}`,css`${unsafeCSS(stylebutton)}`]
		return [css`${unsafeCSS(stylebutton)}`]
	}
  static get properties(){
    return {
      title          :{type:String},
      disabled       :{type:Boolean},
      open           :{type:Boolean},
      translateStartX:{type:String},
      translateStartY:{type:String},
      type           :{type:String},
    }
  }
  constructor(){
    super();
    this.translateStartX = '0px'
    this.translateStartY = '0px'
    this.type = 'default'
  }
  _event(e){
    //console.log(e.target,this)
    let eStyle = window.getComputedStyle(e.target,':before');
    //console.log(eStyle.left,eStyle.top);
    
    e.target.style.top = e.offsetY;
    this.translateStartX = e.offsetX+"px";
    this.translateStartY = e.offsetY+"px";
    if(e.target.classList.contains('animate')){
      e.target.classList.remove('animate')
    }
    e.target.classList.add('animate');
    //console.log(e.target.style);
  }
  rectClick(e){

  }

  render(){
    return html`
    <style>:host{contain: layout style;display: inline-block;}</style>
    <button @click=${this._event} class="btn--${this.type}" style="--ripple-left:${this.translateStartX};--ripple-top:${this.translateStartY}">
      <slot name="icon-left"></slot>
      <slot>default</slot>
      <slot name="text"></slot>
    </button>
    `;
  }
}

