const tmpl = document.createElement("template");
tmpl.innerHTML = `
  <style>
    /* @import url(./css/root.css); */
    :host{
      /* CSS containment FTW. https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain*/
      /* contain: content; */
      contain: layout style;
      /*background:var(--button-bg,#fff);外部样式传入*/
      /* padding:1px 3px 5px 1px; */
      /* padding: 4px; */
      /* overflow: visible; */
      /* display: inline-flex; */
      /* vertical-align: top;
      outline: none; */
    }
    /* :host(:hover) button{
      background:#c00;
    } */
    :host .btn--primary,
    :host .btn--success,
    :host .btn--warning,
    :host .btn--danger{
      color: #fff;
    }
    :host .btn--primary{ /* color host when it has class="primary" */
      background-color:var(--primary,royalblue);
      border-color:var(--primary,royalblue);
      /* color: var(--wireColor); */
    }
    :host .btn--primary:hover{
      background-color:var(--primary-hover,royalblue);
      border-color:var(--primary-hover,royalblue);
    }
    :host .btn--primary:active{
      background-color:var(--primary-active,royalblue);
      border-color:var(---primary-active,royalblue);
    }
    :host .btn--success{
      background-color:var(--success,seagreen);
      border-color:var(--success,seagreen);
    }
    :host .btn--success:hover{
      background-color:var(--success-hover,seagreen);
      border-color:var(--success-hover,seagreen);
    }
    :host .btn--success:active{
      background-color:var(--success-active,seagreen);
      border-color:var(---success-active,seagreen);
    }
    :host .btn--warning{
      background-color:var(--warning,coral);
      border-color:var(--warning,coral);
    }
    :host .btn--warning:hover{
      background-color:var(--warning-hover,coral);
      border-color:var(--warning-hover,coral);
    }
    :host .btn--danger{
      background-color:var(--danger,crimson);
      border-color:var(--danger,crimson);
    }
    :host .btn--danger:hover{
      background-color:var(--danger-hover,crimson);
      border-color:var(--danger-hover,crimson);
    }
    :host(.parent-class) {
      /*父级className对应样式*/
      font-size: 21px;
    }
    :host([disabled]) { /* style when host has disabled attribute. */
      /* background: grey; */
      pointer-events: none;
      opacity: 0.4;
    }
    :host .is--circle{
      --borderRadius: 2em;
      
    }
    :host .btn--mini{
      --fontSize: 12px;
    }
    :host .btn--big{
      --fontSize: 18px;
    }
    :host .is--wire{
      background-color: transparent;
      color: rgb(0,0,0);
    }

    button{
      padding:0.8em 1.4em;
      border-width: 1px;
      border-style: solid;
      border-radius:var(--borderRadius,0.24em);
      cursor: pointer;
      /* height: 36px; */
      /* font-size: 14px; */
      font-size: var(--fontSize,14px);
      line-height:1;
      /* transform: scale(var(--ggs,1)); */
      /* box-shadow: 1px 2px 3px rgba(0,0,0,.15); */
      outline: none;
      /* display: inline-flex;
      box-sizing: border-box; */
    }
    button:focus{border:1px solid green;}
    button::before{
      content: '';
      position: absolute;
      opacity: 0;
      pointer-events: none;
      top: calc(-50%);
      left: calc(-50%);
      width: 200%;
      height: 200%;
    }
    button slot{
      pointer-events: none;
    }
    button.is--shadow{
      /* position: relative;
      z-index: 100; */
      /* flex: 1 1 auto; */
      /* box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); */
      box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
    }
    button.is--shadow:focus{
      box-shadow: 1px 2px 6px rgba(0,0,0,.35);
    }

    
    ::slotted{
      color:red
    }
  </style>
  <button>
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="text"></slot>
  </button>
`

class CButton extends HTMLElement {
  constructor(){
    super();
    //const tmpl = document.getElementById('vdom-button');
    this._shadowRoot = this.attachShadow({mode:"open"});//open 可通过element.shadowRoot 访问
    this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
    this.option = {
      size:["mini",'big','large'],
      arrts:["type","myclass","size","circle","wire"]
    }
  }

  //FIXME: 按钮大小设置
  
  static get observedAttributes(){
    // 指定观察的属性，这样attributeChangedCallback才会起作用
    return ["type","myclass","size","circle","wire","shadow"];
  }

  get type(){
    return this.hasAttribute('disabled');
  }
  set type(type){
    this.setAttribute["type",type]
  }

  get myclass(){
    return this.hasAttribute('class');
  }
  set myclass(val){
    this.setAttribute["myclass",val]
  }


//生命周期函数
  //当 custom element首次被插入文档DOM时，被调用
  connectedCallback(){
    //console.log("custom element首次被插入")
  }

  //当 custom element从文档DOM中删除时，被调用
  disconnectedCallback(){
    console.log("custom element从文档DOM中删除时")
  }

  //当 custom element增加、删除、修改自身属性时，被调用
  attributeChangedCallback(name,oldVal,newVal){
    //console.log(name,oldVal,newVal)
    let el = this.shadowRoot.querySelector('button');

    //el.classList.add('btn--'+newVal)

    let index = this.option.size.indexOf(newVal)

    //console.log(this.option.size[index])
    // if(newVal){
    //   this.classList.add('btn--'+newVal)
    // }
    
    if(name =='size'){
      //this.classList.add('is--'+name);//外部添加样式
      el.classList.add('btn--'+newVal)
    }
    if(name =='type'){
      //this.classList.add('is--'+name);//外部添加样式
      el.classList.add('btn--'+newVal)
    }
    
    if(name =='circle'){
      //this.classList.add('is--'+name);//外部添加样式
      el.classList.add('is--'+name)
    }
    if(name =='shadow'){
      //this.classList.add('is--'+name);//外部添加样式
      el.classList.add('is--'+name)
    }
    if(name =='wire'){
      //this.classList.add('is-'+name);//外部添加样式
      el.classList.add('is--'+name)
    }
    // switch(attr) {
    //     case 'myclass':
    //         console.log('myclass',attr)
    //     case 'type':
    //         console.log('type',attr)
    //     case 'size':
            
    // }
    this._updateRendering();
  }
  // 根据变化的属性，改变组件的UI
  _updateRendering(){
    let shadowVdom = this.shadowRoot;
    let childNodes = shadowVdom.childNodes;
    for(let i=0;i<childNodes.length;i++){
      if(childNodes[i].nodeName === 'STYLE'){
        //console.log('childNodes[i]: ', childNodes[i].textContent);
      }
      
    }
  }

  //TODO: 事件交互，内外
  
}

customElements.define("s-native-button",CButton);