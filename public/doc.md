# 常用资料备忘

<link rel="stylesheet" href="./style/base.css">
<svg title="sense-logo" width="400" height="130" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 200" class="logo-svg"><path stroke="#fff" d="M380.781,64.312C353.644,1.52,280.806-4.127,231.582,26.965a285.3,285.3,0,0,0-41.319,33.166C22.39,248.262-2.658-15.6,144.647,70.843h.153c2.859,1.948,9.925-1,7.771-6.8v-.191a55.956,55.956,0,0,0-5.193-8.592C114.415,12.533,47.717,18.376,18.764,66.179-10.2,113.567,16.7,173.436,69.723,188.136h.21a131.376,131.376,0,0,0,77.54-8.172,218.126,218.126,0,0,0,43.63-26.731c39.411-28,87.87-108.121,135.127-64.9l.267.267.363.172c19.021,19.4,16.929,55.9-8.917,69.482-27.825,16.834-59.692,6.976-84.6-10.439-18.25,1.11,6.885,24.342,13.52,28.529a86.99,86.99,0,0,0,45.774,15.424C358.7,194.338,406.88,124.467,380.781,64.312Z" class="sense-logo-white logo-fill iosFill"></path> <path d="M155.315,100.243C59.724,197.125-5.895,120.625,25.75,63.7,52.964,18.71,125.769,19.211,149.456,66.03,111.232,17.75,33.5,38.473,44.092,100.854h0C63.3,166.246,138.92,115.857,155.315,100.243Z" class="logo-shadow"></path> <path d="M362.787,155.518h0c0,.01-.01.01-.01.019-36.8,44.224-104.649,42.55-132.191-3.667,27.555,29.731,70.77,31.543,95.3,8.025,42.071-40.558,3.213-106.164-48.283-85.346-20.932,9.151-42.266,32.6-56.275,45.4C317.011-20.7,410.713,88.555,362.787,155.518Z" class="logo-shadow"></path>
</svg>
<style>
  .sense-logo-white{
    background:#fff;
    fill: transparent;
    animation: senseLogoWhite 4s ease-in-out forwards;
  }
  @keyframes senseLogoWhite {
    0% {
      stroke-dasharray: 0 1611px;
    }
    100% {
      stroke-dasharray: 1611px 0;
    }
  }
  .logo-white .logo-fill {
    -webkit-animation: senseLogoWhiteFill 1s linear;
    animation: senseLogoWhiteFill 1s linear;
  }
  .logo-svg .logo-shadow {
    fill: transparent;
    animation: senseLogoShadowEmpty .6s linear forwards;
    animation-delay: 3.5s;
  }
  @keyframes senseLogoShadowEmpty {
    0% {
      fill: transparent;
    }
    100% {
      fill: #ccc;
    }
  }
</style>
<!-- ![logo](./public/link.svg) -->

```shell
npm install webpack webpack-cli --save-dev
npm install lit-element --save-dev
npx webpack-cli init
npm install lit-element --save-dev
npm i --save-dev stylus stylus-loader
npm i --save-dev css-loader
npm i --save-dev style-loader 
```

```shell
webpack 基本配置
  —— rules
  —— alias设置
```
```js
//nodejs检测性能
//检查内存占用
process.memoryUsage()

//垃圾回收
```

https://codepen.io/zavoloklom/pen/Gubja |

https://material-components.github.io/material-components-web-components/demos/button.html | 

https://muse-ui.org/#/zh-CN/button |

https://github.com/material-components/material-components-web-components/tree/4e6be3f4ebf73c786105e346c6c1de8dc3d1ca5a/packages/ripple

https://lit-element.polymer-project.org/guide/properties

#### 参考资料
> - https://open-wc.org/
- 基于rollup的web Components项目。支持styl https://github.com/danielbarion/instruct-contacts

https://developers.google.cn/web/fundamentals/web-components/

stylus功能示例：
http://stylus.github.io/nib/

https://www.html.cn/book/css/selectors/element/invalid.htm

## 插件

- vscode 支持postcss的插件postcss-sugarss-language
- language-stylus

## emoji icon
css 图标 https://css.gg/

https://www.cnblogs.com/daisygogogo/p/11044353.html

https://gitmoji.carloscuesta.me/

https://www.mdui.org/

vscode 在线编辑分享代码 https://stackblitz.com/

## leancloud
领先的Serverless 云服务 https://leancloud.cn/docs/sdk_setup-js.html

## admin tmpl

http://skote-v-light.react.themesbrand.com/login

http://flatfull.com/themes/scale/portlet.html

https://coderthemes.com/greeva/landing/index.html
https://coderthemes.com/greeva/layouts/vertical-dark/index.html

https://pixinvent.com/demo/apex-react-redux-bootstrap-admin-dashboard-template/demo-1/

https://www.bootstrapdash.com/demo/basecampui/template/index.html

http://themedesigner.in/demo/admin-press/landingpage/index.html

http://aba.zarko-m.com/preview/index.html

https://www.bootstrapdash.com/demo/bogy/template/

http://raiseapp-html.themeapollo.com/

https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/landing/#home

https://pixinvent.com/demo/modern-admin-angular-admin-template/landing/#home

http://thevectorlab.net/

https://uxcandy.co/demo/ripple/preview/demo_1/index.html

http://flatfull.com/themes/angulr/html/

https://uxcandy.co/demo/label_pro/preview/demo_2/pages/ui-components/buttons.html