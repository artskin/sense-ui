import { LitElement,css, html,unsafeCSS } from 'lit-element';

import style from '../style/style.styl';

// const componentCSS = require('./style/root.scss');
// const componentCSS = require('./style/root.scss');
//console.log(unsafeCSS(style))
class MyElement extends LitElement {
  static get styles() {
		return [css`${unsafeCSS(style)}`]
	}
  // static get styles() {
  //   return css`
  //     :host{
  //       contain:layout style;
        
  //     }
  //     button{
  //       padding:0.8em 1.4em;
  //       border-width: 1px;
  //       border-style: solid;
  //       border-radius:var(--borderRadius,0.24em);
  //       cursor: pointer;
  //       /* height: 36px; */
  //       /* font-size: 14px; */
  //       font-size: var(--fontSize,14px);
  //       line-height:1;
  //       /* transform: scale(var(--ggs,1)); */
  //       /* box-shadow: 1px 2px 3px rgba(0,0,0,.15); */
  //       outline: none;
  //       /* display: inline-flex;
  //       box-sizing: border-box; */
  //     }
  //     button:focus{border:1px solid green;}
  //     // button slot{
  //     //   pointer-events: none;
  //     // }
  //   `
  // }

  render(){
    return html`
    <style>
      button{
        font-size:20px;
      }
    </style>
    <button>
      <slot name="icon-left"></slot>
      <slot>default</slot>
      <slot name="text"></slot>
    </button>
    `;
  }
}

customElements.define('s-button', MyElement);