import { LitElement,css, html,unsafeCSS } from 'lit-element';
import componentsBase from '../components-base.styl';
import styleCard from './card.styl';


export class SenseCard extends LitElement {
  static get styles() {
    return [css`${unsafeCSS(componentsBase)}`]
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
    this.getSlots()
  }
  _event(e){
    console.log(e)
    this.getSlots(e);
  }
  getSlots(){
    let els = this.childNodes;
    for(let i in els){
      if(els[i].slot == 'title'){
        this.hasTitle = true;
      }
    }
    
  }
  render(){
    return html`
    <style>${unsafeCSS(styleCard)}</style>
    <div @click=${this._event}>
      ${this.hasTitle? html`<slot name="title"></slot>`: html`<h3>${this.title}</h3>`}
      <slot>卡片内容...</slot>
    </div>
    `;
  }
}

