!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),s=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([o]).join("\n")}var i,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){(t=n(0)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){(t=n(0)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){(t=n(0)(!1)).push([e.i,":host {\n  contain: layout style;\n  display: inline-block;\n}\n",""]),e.exports=t},function(e,t,n){(t=n(0)(!1)).push([e.i,"button {\n  padding: 0.8em 1.4em;\n  border-width: 1px;\n  border-style: solid;\n  outline: none;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 14px;\n  line-height: 1;\n  overflow: hidden;\n  position: relative;\n}\nbutton slot {\n  pointer-events: none;\n}\n.btn-default {\n  color: #fff;\n  background-color: var(--default, #f0f0f0);\n  border-color: var(--default);\n  color: #999;\n}\n.btn-default:hover {\n  background-color: var(--default-hover, #e6e6e6);\n  border-color: var(--default-hover);\n}\n.btn-default:active {\n  background-color: var(--default-active, #dcdcdc);\n  border-color: var(--default-active);\n}\n.btn-default:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n.btn-primary {\n  color: #fff;\n  background-color: var(--primary, #f0f0f0);\n  border-color: var(--primary);\n}\n.btn-primary:hover {\n  background-color: var(--primary-hover, #e6e6e6);\n  border-color: var(--primary-hover);\n}\n.btn-primary:active {\n  background-color: var(--primary-active, #dcdcdc);\n  border-color: var(--primary-active);\n}\n.btn-primary:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n.btn-success {\n  color: #fff;\n  background-color: var(--success, #f0f0f0);\n  border-color: var(--success);\n}\n.btn-success:hover {\n  background-color: var(--success-hover, #e6e6e6);\n  border-color: var(--success-hover);\n}\n.btn-success:active {\n  background-color: var(--success-active, #dcdcdc);\n  border-color: var(--success-active);\n}\n.btn-success:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n.btn-warning {\n  color: #fff;\n  background-color: var(--warning, #f0f0f0);\n  border-color: var(--warning);\n}\n.btn-warning:hover {\n  background-color: var(--warning-hover, #e6e6e6);\n  border-color: var(--warning-hover);\n}\n.btn-warning:active {\n  background-color: var(--warning-active, #dcdcdc);\n  border-color: var(--warning-active);\n}\n.btn-warning:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n.btn-danger {\n  color: #fff;\n  background-color: var(--danger, #f0f0f0);\n  border-color: var(--danger);\n}\n.btn-danger:hover {\n  background-color: var(--danger-hover, #e6e6e6);\n  border-color: var(--danger-hover);\n}\n.btn-danger:active {\n  background-color: var(--danger-active, #dcdcdc);\n  border-color: var(--danger-active);\n}\n.btn-danger:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n:host([wire]) .btn-default {\n  color: #fff;\n  background-color: var(--danger-default, #f0f0f0);\n  border-color: var(--default);\n  color: var(--default);\n}\n:host([wire]) .btn-default:hover {\n  background-color: var(--danger-default-hover, #e6e6e6);\n  border-color: var(--default-hover);\n}\n:host([wire]) .btn-default:active {\n  background-color: var(--danger-default-active, #dcdcdc);\n  border-color: var(--default-active);\n}\n:host([wire]) .btn-default:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n:host([wire]) .btn-primary {\n  color: #fff;\n  background-color: var(--danger-primary, #f0f0f0);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n:host([wire]) .btn-primary:hover {\n  background-color: var(--danger-primary-hover, #e6e6e6);\n  border-color: var(--primary-hover);\n}\n:host([wire]) .btn-primary:active {\n  background-color: var(--danger-primary-active, #dcdcdc);\n  border-color: var(--primary-active);\n}\n:host([wire]) .btn-primary:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n:host([wire]) .btn-warning {\n  color: #fff;\n  background-color: var(--danger-warning, #f0f0f0);\n  border-color: var(--warning);\n  color: var(--warning);\n}\n:host([wire]) .btn-warning:hover {\n  background-color: var(--danger-warning-hover, #e6e6e6);\n  border-color: var(--warning-hover);\n}\n:host([wire]) .btn-warning:active {\n  background-color: var(--danger-warning-active, #dcdcdc);\n  border-color: var(--warning-active);\n}\n:host([wire]) .btn-warning:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n:host([wire]) .btn-danger {\n  color: #fff;\n  background-color: var(--danger-opacity, #f0f0f0);\n  border-color: var(--danger);\n  color: var(--danger);\n}\n:host([wire]) .btn-danger:hover {\n  background-color: var(--danger-opacity-hover, #e6e6e6);\n  border-color: var(--danger-hover);\n}\n:host([wire]) .btn-danger:active {\n  background-color: var(--danger-opacity-active, #dcdcdc);\n  border-color: var(--danger-active);\n}\n:host([wire]) .btn-danger:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n:host([wire]) .btn-success {\n  color: #fff;\n  background-color: var(--success-opacity, #f0f0f0);\n  border-color: var(--success);\n  color: var(--success);\n}\n:host([wire]) .btn-success:hover {\n  background-color: var(--success-opacity-hover, #e6e6e6);\n  border-color: var(--success-hover);\n}\n:host([wire]) .btn-success:active {\n  background-color: var(--success-opacity-active, #dcdcdc);\n  border-color: var(--success-active);\n}\n:host([wire]) .btn-success:focus {\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n}\n:host([circle]) button,\n:host([radius]) button {\n  border-radius: 3em;\n}\n:host([circle]) button {\n  padding: 0.8em;\n}\n:host([disabled]) button {\n/* style when host has disabled attribute. */\n  pointer-events: none;\n  opacity: 0.5;\n}\n:host([shadow]) button {\n  box-shadow: 1px 3px 6px rgba(0,0,0,0.3);\n}\n:host([ripple]) button::before {\n  content: '';\n  width: 200%;\n  height: 200%;\n  border-radius: 30%;\n  pointer-events: none;\n  position: absolute;\n  left: calc(-50%);\n  top: calc(-50%);\n  z-index: 1;\n}\n:host([ripple]) button::before {\n  background-color: #fff;\n  opacity: 0;\n  margin-left: var(--ripple-left);\n  margin-top: var(--ripple-top);\n}\n:host([ripple]) button.rippleFade::before {\n  opacity: 0.15;\n  animation: ripple 0.5s ease-out;\n}\n:host button.btn-mini {\n  padding: 0.4em 0.7em;\n  font-size: 12px;\n}\n:host .btn-small {\n  padding: 0.6em 1em;\n}\n:host .btn-big {\n  padding: 1em 2em;\n}\n@-moz-keyframes ripple {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes ripple {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes ripple {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes ripple {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"MyElement",(function(){return ce}));function r(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${i}--\x3e`,c=new RegExp(`${i}|${a}`);class l{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,a=-1,l=0;const{strings:p,values:{length:f}}=e;for(;l<f;){const e=o.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)d(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=p[l],n=u.exec(t)[2],r=n.toLowerCase()+"$lit$",o=e.getAttribute(r);e.removeAttribute(r);const s=o.split(c);this.parts.push({type:"attribute",index:a,name:n,strings:s}),l+=s.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const r=e.parentNode,o=t.split(c),s=o.length-1;for(let t=0;t<s;t++){let n,s=o[t];if(""===s)n=h();else{const e=u.exec(s);null!==e&&d(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(s)}r.insertBefore(n,e),this.parts.push({type:"node",index:++a})}""===o[s]?(r.insertBefore(h(),e),n.push(e)):e.data=o[s],l+=s}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&a!==s||(a++,t.insertBefore(h(),e)),s=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(n.push(e),a--),l++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),l++}}else o.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const d=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},p=e=>-1!==e.index,h=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let s=g(r),i=r[s],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==i&&i.index===a;)i.index=null!==d?-1:i.index-c,s=g(r,s),i=r[s]}l.forEach(e=>e.parentNode.removeChild(e))}const v=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},g=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(p(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,b=e=>"function"==typeof e&&m.has(e),y={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let s,i=0,a=0,c=r.nextNode();for(;i<n.length;)if(s=n[i],p(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=t.pop(),c=r.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));i++}else this.__parts.push(void 0),i++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=` ${i} `;class x{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const s=u.exec(e);t+=null===s?e+(n?S:a):e.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const P=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class N{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(P(e)||!k(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||P(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(h()),this.endNode=e.appendChild(h())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=h()),e.__insert(this.endNode=h())}insertAfterPart(e){e.__insert(this.startNode=h()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(P(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const n=new w(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new T(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class A extends N{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends C{}let V=!1;(()=>{try{const e={get capture(){return V=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class U{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(V?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function R(e){let t=$.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},$.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i);return n=t.keyString.get(r),void 0===n&&(n=new l(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const $=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,r){const o=t[0];if("."===o){return new A(e,t.slice(1),n).parts}return"@"===o?[new U(e,t.slice(1),r.eventContext)]:"?"===o?[new E(e,t.slice(1),n)]:new N(e,t,n).parts}handleTextExpression(e){return new T(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const L=(e,...t)=>new x(e,t,"html",z),F=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const B=e=>t=>{const n=F(t.type,e);let r=$.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},$.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(i);if(o=r.keyString.get(s),void 0===o){const n=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(n,e),o=new l(t,n),r.keyString.set(s,o)}return r.stringsArray.set(t.strings,o),o},I=["html","svg"],H=new Set,W=(e,t,n)=>{H.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:s}=o;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,e);const i=document.createElement("style");for(let e=0;e<s;e++){const t=o[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}(e=>{I.forEach(t=>{const n=$.get(F(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),f(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const s=document.createTreeWalker(r,133,null,!1);let i=g(o),a=0,c=-1;for(;s.nextNode();){for(c++,s.currentNode===n&&(a=v(t),n.parentNode.insertBefore(t,n));-1!==i&&o[i].index===c;){if(a>0){for(;-1!==i;)o[i].index+=a,i=g(o,i);return}i=g(o,i)}}}(n,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(i,a.firstChild);const e=new Set;e.add(i),f(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),X={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J};class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=X){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||X}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=J){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||D,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||D.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=X){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Y.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function K(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):G(e,t)}const Q=(e,t,n)=>{Object.defineProperty(t,n,e)},Z=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ee="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol();class ne{constructor(e,t){if(t!==te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ee?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=e=>new ne(String(e),te);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const oe={};class se extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ee?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==oe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return oe}}se.finalized=!0,se.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=M.has(t),i=q&&11===t.nodeType&&!!t.host,a=i&&!H.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=M.get(t);void 0===r&&(s(t,t.firstChild),M.set(t,r=new T(Object.assign({templateFactory:R},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:B(r)},n)),a){const e=M.get(c);M.delete(c);const n=e.value instanceof w?e.value.template:void 0;W(r,c,n),s(t,t.firstChild),t.appendChild(c),M.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)};n(1),n(2);const ie=n(3),ae=n(4);let ce=class extends se{constructor(){super(...arguments),this.type="default",this.size="medium",this.wire="",this.ripple="",this.translateX="0",this.translateY="0"}connectedCallback(){super.connectedCallback(),this.ripple&&this.addListeners(this)}addListeners(e){e&&e.addEventListener("mousedown",e=>{let t=e.target.$btn,n=t.offsetWidth,r=t.offsetHeight;this.translateX=`${((e.offsetX-n/2)/n*25).toFixed(2)}%`,this.translateY=`${((e.offsetY-r/2)/r*25).toFixed(2)}%`,t.classList.add("rippleFade"),t.addEventListener("animationend",(function(){console.log("动画结束"),t.classList.remove("rippleFade")}))})}updated(e){}_event(e){e.target}removeClass(e){let t=e.target;setTimeout((function(){t.classList.remove("rippleFade")}),500)}render(){return L`
    <style>${re(ae)}</style>
    <button id="btn" class="btn-${this.type} btn-${this.size}" style="--ripple-left:${this.translateX};--ripple-top:${this.translateY}">
      <slot name="icon-left"></slot>
      <slot>default</slot>
      <slot name="text"></slot>
    </button>
    `}};var le,de;ce.styles=((e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new ne(n,te)})`${re(ie)}`,r([K({type:String,reflect:!0})],ce.prototype,"type",void 0),r([K({type:String})],ce.prototype,"size",void 0),r([K({type:Boolean,reflect:!0})],ce.prototype,"wire",void 0),r([K({type:Boolean,reflect:!0})],ce.prototype,"ripple",void 0),r([K({type:String})],ce.prototype,"translateX",void 0),r([K({type:String})],ce.prototype,"translateY",void 0),r([(le="#btn",(e,t)=>{const n={get(){return this.renderRoot.querySelector(le)},enumerable:!0,configurable:!0};return void 0!==t?Q(n,e,t):Z(n,e)})],ce.prototype,"$btn",void 0),ce=r([(de="s-button",e=>"function"==typeof e?((e,t)=>(window.customElements.define(e,t),t))(de,e):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(de,e))],ce)}]);