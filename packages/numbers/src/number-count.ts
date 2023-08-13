
import { failVals, successVals } from '@sense/utils';
import inputTimeStyle from './number-count.less?inline';

const tmpl = document.createElement('template');
tmpl.innerHTML = `
  <span id="number" data-value="time">
    <slot></slot>
  </span>
`

/**
* NumberCount: 数字计时组件
* @param {string} step - 步长
* @param {boolean} autoplay - 是否自动开始
* @param {boolean} loop - 是否循环
* @param {string} value - 初始值
* desc: 用于数字计时
**/
export class NumberCount extends HTMLElement {
  step:string | number = '0'
  autoplay:boolean = true
  loop:boolean = true
  value:number = 0
  
  constructor(){
    super()
    this.attachShadow({mode: 'open'});
    // const sheet = new CSSStyleSheet();
    // sheet.replace(nativeStyle).then(res=>{
    //   this.shadowRoot!.adoptedStyleSheets.push(res)
    // })
    // const linkStyle = document.createElement('link');
    // linkStyle.rel = 'stylesheet';
    // linkStyle.href = '/lib/html5-native.min.css';
    // this.shadowRoot!.appendChild(linkStyle);
    // this.shadowRoot!.innerHTML = `
    //   <style></style>`
    const inputStyle = document.createElement('style');
    inputStyle.textContent = inputTimeStyle
    this.shadowRoot!.appendChild(inputStyle);
    this.shadowRoot!.appendChild(tmpl.content.cloneNode(true));

  }

  static get observedAttributes(){
    return ["value","sort",'step','autoplay','disabled']; // 指定观察的属性，这样attributeChangedCallback才会起作用
  }

  get el():HTMLElement{ return this.shadowRoot!.querySelector('#number')! }

  attributeChangedCallback(name:string,ov:string,nv:string){
    console.warn('attributeChangedCallback',name,ov,nv)
    this.attributeUpdate(name, nv);
  }
  parsingAttr = (value: string | boolean) => {
    if (failVals.includes(value)) { return false }
    if (successVals.includes(value)) { return true }
    return value
  }

  attributeUpdate(name: string, value: string) {
    (this as any)[name] = value;
  }
  
  connectedCallback(){
    this.init()
  }
  init(){
    //this.el.style.transform = `translateY(-${this.step}em)`;
    this.el.classList.add('transform')
    this.el.style.setProperty('--value',`-${this.step}em`);
    if(this.autoplay){
      console.log('autoStart',this.autoplay)
      
      this.numberRun()
    }
  }
  numberRun(){
    window.setInterval(()=>{
      if(this.autoplay){
        this.value += Number(this.step);
        if(this.value > 9){
          this.el.style.setProperty('--fade-time',`.1s`);
          this.value = 0;
        }else{
          this.el.style.setProperty('--fade-time',`.8s`);
        }
        // this.setAttribute('value',String(this.value));
        this.el.style.setProperty('--value',`-${this.value}em`);
        // console.warn(this.value)
      }
    },1000)
  }
  end(){
    this.emitValue(0)
  }
  emitValue(v:number){
    const evt = new CustomEvent('input',{'detail':{timestamp:v}})
    this.dispatchEvent(evt)
  }
  clearValue(){
    this.value = ''
    this.setAttribute('timestamp','')
    this.setAttribute('value','');
  }
  
  disconnectedCallback(){
    this.clearValue()
  }
}