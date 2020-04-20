

import {LitElement, html, css, customElement, property,query,unsafeCSS} from 'lit-element';


const componentsBase = require('./packages/components-base.styl');
const paginationStyle = require('./packages/sense-pagination/pagination.styl');

@customElement('s-button')
export class SensePagination extends LitElement {
  static styles = css`${unsafeCSS(componentsBase)}`;
  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property({ type: String, reflect: true })
  public type:'default'|'primary'|'warning'|'danger'|'success' = 'default';

  @property({type:String})
  public size:'medium'|'big'|'small'|'mini' = 'medium'

  @property({type:Boolean,reflect:true})
  public wire = ''

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
        //console.log(elinner)
        let elInfo = {
          width : elinner.offsetWidth,
          height: elinner.offsetHeight,
        }
        //console.log(ev)
        //console.log(elInfo)
        //console.log(ev.offsetX,elInfo.width/2,elInfo.width)
        this.translateX = `${((ev.offsetX-elInfo.width/2)/elInfo.width*25).toFixed(2)}%`;
        this.translateY = `${((ev.offsetY-elInfo.height/2)/elInfo.height*25).toFixed(2)}%`;

        elinner.classList.add('rippleFade');
        elinner.addEventListener("animationend", function() {
          console.log('动画结束')
          elinner.classList.remove('rippleFade');
        })
      })
      // el.addEventListener('mouseup',(ev)=>{
      //   let elinner = ev.target.$btn;
      //   setTimeout(function(){
      //     elinner.classList.remove('rippleFade');
      //   },300)
      // })
      // el.addEventListener("webkitAnimationEnd", function() {
      //   console.log('动画结束')
      // })
    }

  }
  updated(props){
    //console.log(props)
  }
  _event(e:MouseEvent){
    let el = e.target;
    //let eStyle = window.getComputedStyle(e.target,':before');
    if(el){
      // el.addEventListener('mousedown',()=>{
      //   let elWidth  = el.offsetWidth,
      //     elHeight = el.offsetHeight,
      //     elCenter={ x:elWidth/2, y:elHeight/2 },
      //     perX = (e.offsetX-elCenter.x)/elWidth,
      //     perY = (e.offsetY-elCenter.y)/elHeight;

      //   this.translateX = `${(perX*50).toFixed(2)}%`;
      //   this.translateY = `${(perY*50).toFixed(2)}%`;
      // })

      // el.addEventListener("webkitAnimationStart", function() {
      //   console.log("动画开始",...el.classList);
      //   el.classList.remove('animate');
      //   console.log('删除后',...el.classList)
      // })
      //el.classList.add('rippleFade');
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
    <style>${unsafeCSS(paginationStyle)}</style>
    <button id="btn" class="btn-${this.type} btn-${this.size}" style="--ripple-left:${this.translateX};--ripple-top:${this.translateY}">
      <slot name="icon-left"></slot>
      <slot>default</slot>
      <slot name="text"></slot>
    </button>
    `;
  }
}