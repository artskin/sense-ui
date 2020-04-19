import { LitElement,css, html,unsafeCSS } from 'lit-element';
import componentsBase from '../components-base.styl';
import styleProgress from './progress.styl';

export class SenseProgress extends LitElement {
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
    if(this.type =='line'){
      return html`
      <style>${unsafeCSS(styleProgress)}</style>
      <div class="progress">
        <progress class=${this.status} value=${this.value} max=${this.max}></progress>
        
        ${this.status=='success'? html`<span class="icon-cancelwhite"></span>`: html`<span class="text-value">${(this.value/this.max)*100}%</span>`}
        ${this.status=='active'? html`<div class="active"></div>`:null}
      </div>
      `;
    }
    if(this.type == 'circle'){
      return html`
      <style>${unsafeCSS(styleProgress)}</style>
      <div class="progress progress-circle">
        <svg viewBox="0 0 100 100">
          <defs>
            <linearGradient id="borderlinear">
              <stop offset="0%" stop-color="#0F4C81"/>
              <stop offset="80%" stop-color="#4C8EC9"/>
            </linearGradient>
          </defs>
          <circle @click=${this._event} class="progress-bg" cx="50%" cy="50%" r="47%" />
          <circle class="current-value" stroke-linecap="round" cx="50%" cy="50%" r="47%"
          stroke-dasharray=${this.value*3 + '% 249%'} />
        </svg>
        <span class="text-value">${(this.value/this.max)*100}%</span>
      </div>
      `;
    }
    
  }
}

window.customElements.define('s-progress',SenseProgress);