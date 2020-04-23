# Sense-UI

<img src="./public/link.svg" alt="logo" height="66">


<!-- ![logo](./public/link.svg) -->

🌱 
SenseUI is a Web Components &amp; Custom Elements for Future Web Applications.👽
> 基于web标准的组件，面向未来web应用的组件，原生开发，Vue,React,Angular 都可使用。

> 采用用css-variables scale, 控制主题变量
> dom构建 采用tagged-template literals
> js交互AnimationEvent()

## 轻量极速

- 组件基于html5原生标签及属性，减少js模拟；
- 充分利用css3伪类（::before,::after,:root,:host,:not,:target,:valid,:invalid,:placeholder-shown,:required）及动画的交互，较少js操作dom带来的性能损耗；
- 在线动态换肤，无需打包编译；
- 基础样式采用stylus；
- 支持typescript开发。

## Browser Support

The polyfills are intended to work in the latest versions of evergreen browsers. See below
for our complete browser support matrix:

| Polyfill   | IE11+ | Chrome* | Firefox* | Safari 9+* | Chrome Android* | Mobile Safari* |
| ---------- |:-----:|:-------:|:--------:|:----------:|:---------------:|:--------------:|
| Custom Elements | ✓ | ✓ | ✓ | ✓ | ✓| ✓ |
| HTML Imports | ✓ | ✓ | ✓ | ✓| ✓| ✓ |
| Shadow DOM | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Templates | ✓ | ✓ | ✓| ✓ | ✓ | ✓ |


```shell

npm install
npm run dev //启动开发
npm run build //打包

```

## todo-list

- [x] 集成scss,或styl,或less
- [x] 打包后文件浏览器直接运行
- [x] 通过css var 实现换肤
- [x] 添加了scss支持后，css var 变量的值会被编辑问题，改为stylus解决了
- [x] 通过外部css变量的值控制，组件内的样式
- [ ] post-css
- [ ] 添加点击水波：
- [ ] 开发中代码变化热更新：
- [ ] 编辑器支持插件（类似Vetur）



## 开发常用插件

- vscode 支持postcss的插件postcss-sugarss-language
- language-stylus
- [开发备忘文档](./public/doc.md)

## 