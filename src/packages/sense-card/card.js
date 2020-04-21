import { LitElement,css, html,unsafeCSS } from 'lit-element';
import componentsBase from '../components-base.styl';
import styleCard from './card.styl';


export class SenseCard extends LitElement {
  static get styles() {
    return [css`${unsafeCSS(componentsBase)}`]
  }
  static get properties(){
    return {
      title:{type:String},
      width:{type:String}
    }
  }
  constructor(){
    super();
    //this.shadowRoot.adoptedStyleSheets = [styles];
    this.title = "";
    this.width = "200px";
    this.getSlots()
  }
  attributeChangedCallback(name, oldval, newval) {
    console.log('Attr change:', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
    if(name =='width'){
      this.width = newval+'px';
    }
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
    <div @click=${this._event} style="width:${this.width}">
      ${this.hasTitle? html`<slot name="title"></slot>`:null}
      ${this.title? html`<h3>${this.title}</h3>`: null}
      <slot>卡片内容...</slot>
    </div>
    `;
  }
}

if(!customElements.get('s-card')){
  customElements.define('s-card',SenseCard);
}
