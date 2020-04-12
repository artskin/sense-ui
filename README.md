# Sense-UI

<img src="./public/link.svg" alt="logo" height="66" style="float:left;">

<svg width="150" height="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 64">
<path ref="svgPath" d="M103.8,59.8c-28,0-43-59-73-59-14,0-29,12-29,30,0,15,13,29,29,29,30,0,44-59,73-59,15,0,30,9.6,30,30C133.8,46.7,119.8,59.8,103.8,59.8Z" />
</svg>

<!-- ![logo](./public/link.svg) -->

🐳
SenseUI is a Web Components &amp; Custom Elements for Future Web Applications.👽
> 面向未来应用的组件开发，基于web标准的组件，vue,react,angular 都可使用。

## 轻量极速

- 组件基于html5原生标签及属性，减少js模拟；
- 充分利用css3的交互效果，较少js操作dom带来的性能损耗；
- 动态换肤，无需编译打包。

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