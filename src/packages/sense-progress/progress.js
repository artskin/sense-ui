import { LitElement,css, html,unsafeCSS } from 'lit-element';
import componentsBase from '../components-base.styl';
import styleProgress from './progress.styl';


export class SenseProgress extends LitElement {
  static get styles() {
    return [css`${unsafeCSS(componentsBase)}`]
  }
  static get properties(){
    return {
      type:{type:String},
      value:{type:String},
      max:{type:String},
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
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
    if(name == 'status'){
      this.size = ' status-'+newval;
    }
  }
  _event(e){
    console.log(e)
  }
  render(){
    return html`
    <style>${unsafeCSS(styleProgress)}</style>
    <meter class=${this.status} value=${this.value} max=${this.max}>
      <span>${(this.value/this.max)*100}%</span>
    </meter>
    `;
  }
}

