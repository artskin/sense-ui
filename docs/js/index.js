let targetName ='main';
let menuData = [
  {
    title:'组件',
    list:[
      {url:'button',name:'按钮'},
      {url:'card',name:'卡片'},
      {url:'progress',name:'进度条'},
      {url:'pagination',name:'分页'}
    ]
  },
  {
    title:'typescript',
    list:[
      {url:'ts-button',name:'按钮'},
    ]
  },
  {
    title:'Other',
    list:[
      {url:'doc',name:'文档'},
      {url:'cdn',name:'cdn调用方式'},
    ]
  }
]
function $_(el){
  return document.querySelector(el);
}
function creatTagDom(){
  const menuVdom = `
    ${menuData.map(item =>`
    <h3>
      ${item.title}
    </h3>
    <ul>
    ${item.list.map(vt =>
      `<li><a target=${targetName} href=${vt.url+'.html'}>${(vt.url).charAt(0).toUpperCase()+(vt.url).slice(1)} <em>${vt.name}</em></a></li>`
    ).join('')}
    </ul>
    `
    ).join('')}
  `;
  $_('.side-menu').innerHTML = menuVdom;
};
if($_('.side-menu')){
  creatTagDom();
}


function menuToggle(){
  console.log($_('.side-menu'))
  $_('.side-menu').classList.toggle('show');
}
let colorPicker = $_('input');
//colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.styleSheets[0].addRule(':root','--primary:'+event.target.value);
  //$_("html").style.setProperty('--primary',event.target.value);
  if(window.frames['main']){
    //window.frames['main'].document.querySelector('html').style.setProperty('--primary',event.target.value);
    window.frames['main'].document.styleSheets[1].addRule(':root','--primary:'+event.target.value);
  }
}