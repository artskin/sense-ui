
import {LitElement, html, css, customElement, property,query,unsafeCSS} from 'lit-element';

const componentsBase = require('../components-base.styl');
const btnStyle = require('./switch.styl');

@customElement('s-switch')
export class SenseSwitch extends LitElement {
  static styles = css`${unsafeCSS(componentsBase)}`;
  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property({ type: Boolean, reflect: true })
  public disabled = null;

  @property({ type: Boolean, reflect: true })
  public checked = null;

  @property({ type: String, reflect: true })
  public name = null;


  @query("#btn") 
  public $btn!: HTMLElement;

  connectedCallback(){
    super.connectedCallback();

  }
  protected addListeners(el?){
    if(el){
      el.addEventListener('mousedown',(ev)=>{
        let elinner = ev.target.$btn;
        let elInfo = {
          width : elinner.offsetWidth,
          height: elinner.offsetHeight,
        }
        elinner.classList.add('rippleFade');
        elinner.addEventListener("animationend", function() {
          console.log('动画结束')
          elinner.classList.remove('rippleFade');
        })
      })
    }
  }

  updated(props){
    //console.log(props)
  }

  _event(e:MouseEvent){
    let el = e.target;
    //let eStyle = window.getComputedStyle(e.target,':before');
    if(el){

    }
  }

  removeClass(e){
    let el = e.target;
    setTimeout(function(){
      el.classList.remove('rippleFade');
    },500)
  }

  // Render element DOM by returning a `lit-html` template. @mousedown=${this._event} @click=${this.removeClass}
  render() {
    return html`
    <style>${unsafeCSS(btnStyle)}</style>
    <input type="checkbox" id="switch"><label for="switch"></label>
    `;
  }
}