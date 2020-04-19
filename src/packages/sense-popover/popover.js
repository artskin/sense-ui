import { LitElement,css, html,unsafeCSS } from 'lit-element';
import componentsBase from '../components-base.styl';
import stylePopover from './popover.styl';

export class SensePopover extends LitElement {
  static get styles() {
    return [css`${unsafeCSS(componentsBase)}`]
  }
  static get properties(){
    return {
      type  :{type:String},
      value :{type:String},
      max   :{type:String},
      status:{type:String}
    }
  }
  constructor(){
    super();
    //this.shadowRoot.adoptedStyleSheets = [styles];
    this.value  = "0";
    this.type   = "";
    this.value  = "";
    this.max    = "";
    this.status = "";
  }

  attributeChangedCallback(name, oldval, newval) {
    //console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
    if(name == 'status'){
      this.size = ' status-'+newval;
    }
  }
  _event(e){
    let el = e.target;
    console.log(el.getTotalLength(),e)
    
  }
  render(){
    return html`
    <style>${unsafeCSS(stylePopover)}</style>
    <div class="popover">
      <slot>default</slot>
    </div>
    `;
  }
}

window.customElements.define('s-popover',SensePopover);