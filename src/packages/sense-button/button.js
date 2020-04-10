import { LitElement,css, html,unsafeCSS } from 'lit-element';

import componentsBase from '../components-base.styl';
import styleButton from './button.styl';
//console.log(unsafeCSS(stylebutton));

export class SenseButton extends LitElement {
  //translateStart = '';
  static get styles() {
		//return [css`${unsafeCSS(root)}`,css`${unsafeCSS(stylebutton)}`]
		return [css`${unsafeCSS(componentsBase)}`]
	}
  static get properties(){
    return {
      title          :{type:String},
      disabled       :{type:Boolean},
      open           :{type:Boolean},
      translateStartX:{type:String},
      translateStartY:{type:String},
      type           :{type:String},
      size           :{type:String},
      wire           :{type:String},
      circle         :{type:String},
    }
  }
  constructor(){
    super();
    this.translateStartX = '0px'
    this.translateStartY = '0px'
    this.type = 'default';
    this.circle = '';
    this.wire = '';
    this.size = '';
    
    
  }
  attributeChangedCallback(name, oldval, newval) {
    //console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);

    //boolean属性改为通过css实现
    // if(name == 'circle'){
    //   this.circle = ' is-'+name;
    // }
    // if(name == 'radius'){
    //   this.radius = ' is-'+name;
    // }
    if(name == 'size'){
      this.size = ' btn-'+newval;
    }
    if(name == 'type'){
      this.type = ' btn-'+newval;
    }
    if(name == 'wire'){
      this.wire = ' is-'+name;
    }
  }
  updated(changedProperties) {
    // console.log(changedProperties)
    // changedProperties.forEach((oldValue, propName) => {
    //   console.log(`${propName} changed. oldValue: ${oldValue}`);
    // });
  }
  _event(e){
    console.log(e,this)
    let eStyle = window.getComputedStyle(e.target,':before');
    let el = e.target;

    let elWidth  = el.offsetWidth,
        elHeight = el.offsetHeight,
        elCenter={
          x:elWidth/2,
          y:elHeight/2
        }
        console.log(elWidth,elHeight,elCenter)
        let perX = (((e.offsetX-elCenter.x)/elWidth)*50).toFixed(2);
        let perY = (((e.offsetY-elCenter.y)/elHeight)*50).toFixed(2);
        console.log(perX,perY)
    //console.log(eStyle.left,eStyle.top);
    //e.target.style.top = e.offsetY;
    // this.translateStartX = '-'+e.offsetX/2+"px";
    // this.translateStartY = '-'+e.offsetY/2+"px";

    this.translateStartX = `${perX}%`;
    this.translateStartY = `${perY}%`;
    
    // ev.target.classList.add('animate');
    // setTimeout(()=>{
    //   this.bind(ev);
    //   ev.target.classList.remove('animate');
    //   console.log(ev.target.classList);
      
    // },600,e,ev)
    
    
  }
  rectClick(e){

  }
  //<link rel="stylesheet" href="./style/button.css">
  render(){
    return html`
    <style>${unsafeCSS(styleButton)}</style>
    <button @click=${this._event} class="${this.type}${this.size}${this.wire}" style="--ripple-left:${this.translateStartX};--ripple-top:${this.translateStartY}">
      <slot name="icon-left"></slot>
      <slot>default</slot>
      <slot name="text"></slot>
    </button>
    `;
  }
}

