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
      translateX:{type:String},
      translateY:{type:String},
      type           :{type:String},
      size           :{type:String},
      wire           :{type:String},
      circle         :{type:String},
    }
  }
  constructor(){
    super();
    this.translateX = '0px'
    this.translateY = '0px'
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
    let el = e.target;
    //let eStyle = window.getComputedStyle(e.target,':before');

    let elWidth  = el.offsetWidth,
        elHeight = el.offsetHeight,
        elCenter={ x:elWidth/2, y:elHeight/2 },
        perX = (e.offsetX-elCenter.x)/elWidth,
        perY = (e.offsetY-elCenter.y)/elHeight;

    this.translateStartX = `${(perX*50).toFixed(2)}%`;
    this.translateStartY = `${(perY*50).toFixed(2)}%`;
       
    // el.addEventListener("webkitAnimationStart", function() {
    //   console.log("动画开始",...el.classList);
    //   el.classList.remove('animate');
    //   console.log('删除后',...el.classList)
    // })
    el.classList.add('rippleFade');
    el.addEventListener("animationend", function() {
      console.log('动画结束')
      el.classList.remove('rippleFade');
    })
  }
  removeClass(e){
    let el = e.target;
    setTimeout(function(){
      el.classList.remove('rippleFade');
    },500)
  }
  
  //<link rel="stylesheet" href="./style/button.css">
  render(){
    return html`
    <style>${unsafeCSS(styleButton)}</style>
    <button @mousedown=${this._event} class="${this.type}${this.size}${this.wire}" style="--ripple-left:${this.translateX};--ripple-top:${this.translateY}">
      <slot name="icon-left"></slot>
      <slot>default</slot>
      <slot name="text"></slot>
    </button>
    `;
  }
}

window.customElements.define('s-button',SenseButton);