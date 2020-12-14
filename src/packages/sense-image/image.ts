
import {LitElement, html, css, customElement, property,query,unsafeCSS} from 'lit-element';

const componentsBase = require('../components-base.styl');
const btnStyle = require('./input.styl');

@customElement('s-input')
export class SenseInput extends LitElement {
  static styles = css`${unsafeCSS(componentsBase)}`;
  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property({ type: String, reflect: true })
  public type:'text'|'number'|'password'|'search'|'datetime' = 'text';

  @property({type:String})
  public size:'medium'|'big'|'small'|'mini' = 'medium'

  @property({type:String,reflect:true})
  public placeholder = ''

  @property({type:String,reflect:true})
  public value = ''

  @property({type:String,reflect:true})
  public label = ''

  @property({type:String,reflect:true})
  public required = ''

  @property({type:Boolean,reflect:true})
  public ripple = ''

  @property({type:String})
  public translateX  = '0'

  @property({type:String})
  public translateY  = '0'

  @query("#btn") 
  public $btn!: HTMLElement;

  connectedCallback(){
    super.connectedCallback();
    if(this.ripple){
      //console.log(this.target.$btn)
      this.addListeners(this);
    }
  }
  protected addListeners(el?){
    if(el){
      el.addEventListener('mousedown',(ev)=>{
        let elinner = ev.target.$btn;
        let elInfo = {
          width : elinner.offsetWidth,
          height: elinner.offsetHeight,
        }
        this.translateX = `${((ev.offsetX-elInfo.width/2)/elInfo.width*25).toFixed(2)}%`;
        this.translateY = `${((ev.offsetY-elInfo.height/2)/elInfo.height*25).toFixed(2)}%`;

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
    <div class="input btn-${this.size}">
      <slot name="icon-left"></slot>
      <input type=${this.type} value=${this.value} placeholder=${this.placeholder} required=${this.required} />
      <slot name="icon-right"></slot>
      <label>${this.label}</label>
    </div>
    `;
  }
}