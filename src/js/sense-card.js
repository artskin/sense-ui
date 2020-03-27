import { LitElement,css, html,unsafeCSS } from 'lit-element';
//import styles from '../style/root.css';
//import style from '../style/style.styl';

// const componentCSS = require('./style/root.scss');
// const componentCSS = require('./style/root.scss');
//console.log(style)
export class SenseCard extends LitElement {
  static get styles() {
    return css`
    :host{
      
    }
    :host div{
      display:inline-block;
      border:1px solid #ccc;
      border-radius:4px;
      padding:1.4em;
      box-shadow:0 3px 6px rgba(0,0,0,.2)
    }
    `
  }
  static get properties(){
    return {
      title:{type:String}
    }
  }
  constructor(){
    super();
    //this.shadowRoot.adoptedStyleSheets = [styles];
    this.title = "卡片标题";
  }
  render(){
    return html`
    <style>
      @import url('../style/root.css')
      button{
        /*font-size:16px;*/ 
      }
      h3{border-bottom:1px solid #ccc;margin:0;}
    </style>
    <div>
      <h3>${this.title}</h3>
      <slot>默认内容</slot>
    </div>
    `;
  }
}

