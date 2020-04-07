//生成基准颜色变量及css相关变量
import './style/base.styl';
import './style/demo.styl';


//组件引入


import { SenseButton } from '~pkg/sense-button/button.js';
import { SenseCard }   from '~pkg/sense-card/card.js';

//组件注册
window.customElements.define('s-button',SenseButton);
window.customElements.define('s-card',SenseCard);