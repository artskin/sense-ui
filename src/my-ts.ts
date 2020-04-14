

  import {LitElement, html, css, customElement, property,unsafeCSS} from 'lit-element';
 
  import './style/base.styl';
  import './style/demo.styl';
  //import './packages/sense-button/button.styl';
  const btnStyle = require('./packages/sense-button/button.styl');
  console.log(unsafeCSS(btnStyle))
  // This decorator defines the element.
  @customElement('s-button')
  export class MyElement extends LitElement {
    // This decorator creates a property accessor that triggers rendering and
    // an observed attribute.
    @property({ type: String, reflect: true })
    public type:'default'|'primary'|'warning'|'danger'|'success' = 'default';

    @property({type:String})
    public size:''|'big'|'small'|'mini' = ''

    @property({type:Boolean,reflect:true})
    public wire = ''

    @property({type:String})
    public translateX  = '0'

    @property({type:String})
    public translateY  = '0'

    static styles = css`
    :host {
      contain: layout style;
      display: inline-block;
    }`;

    _event(e){
      let el = e.target;
      //let eStyle = window.getComputedStyle(e.target,':before');
  
      let elWidth  = el.offsetWidth,
          elHeight = el.offsetHeight,
          elCenter={ x:elWidth/2, y:elHeight/2 },
          perX = (e.offsetX-elCenter.x)/elWidth,
          perY = (e.offsetY-elCenter.y)/elHeight;
  
      this.translateX = `${(perX*50).toFixed(2)}%`;
      this.translateY = `${(perY*50).toFixed(2)}%`;
          
      // el.addEventListener("webkitAnimationStart", function() {
      //   console.log("动画开始",...el.classList);
      //   el.classList.remove('animate');
      //   console.log('删除后',...el.classList)
      // })
      el.classList.add('rippleFade');
      
    }
    removeClass(e){
      let el = e.target;
      setTimeout(function(){
        el.classList.remove('rippleFade');
      },500)
    }

    // Render element DOM by returning a `lit-html` template.
    render() {
      return html`
      <style>${unsafeCSS(btnStyle)}</style>
      <button  @mousedown=${this._event} @click=${this.removeClass} class="btn-${this.type}${this.size}${this.wire}" style="--ripple-left:${this.translateX};--ripple-top:${this.translateY}">
        <slot name="icon-left"></slot>
        <slot>default</slot>
        <slot name="text"></slot>
      </button>
      `;
    }
  }