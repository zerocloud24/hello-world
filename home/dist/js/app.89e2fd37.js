(function(t){function e(e){for(var n,c,l=e[0],r=e[1],o=e[2],d=0,f=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"04d3":function(t,e,s){"use strict";s("0a53")},"0a53":function(t,e,s){},"4dc5":function(t,e,s){"use strict";s("fc53")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n,a,i=s("2b0e"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("NavBar",{attrs:{menus:t.menus},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}}),s(t.current,{tag:"components"})],1)},l=[],r=(s("7db0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-bar d-flex align-items-center"},[t._m(0),s("div",{staticClass:"menu-box d-flex w-50"},t._l(t.menus,(function(e){return s("div",{key:e.value,staticClass:"menu-item font-16",class:{"is-active":t.value===e.value,"is-bg":"callme"===e.value},on:{click:function(s){return t.$emit("input",e.value)}}},[t._v(t._s(e.label))])})),0)])}),o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo-box w-50 h-100 font-l"},[s("div",{staticClass:"name f316-font h-100"},[t._v("D.va")]),s("div",{staticClass:"bg-prup"})])}],u={name:"NavBar",props:{menus:Array,value:String}},d=u,f=(s("4dc5"),s("2877")),v=Object(f["a"])(d,r,o,!1,null,null,null),p=v.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-box"},[s("div",{staticClass:"banner"},[s("img",{staticClass:"w-100",attrs:{src:t.baseOss+"bg1.png"}}),s("div",{staticClass:"banner-info w-100"},[s("div",{staticClass:"f316-font welcome-en font-max"},[t._v(t._s(t.TextMap.welcomeEn))]),s("div",{staticClass:"welcome-cn font-l"},[t._v(t._s(t.TextMap.welcomeCn))]),s("div",{staticClass:"primary-btn"},[t._v("了解更多 >>")])])]),s("div",{staticClass:"home-container"},[s("div",{staticClass:"experie-box d-flex"},t._l(t.experieList,(function(e,n){return s("div",{key:n,staticClass:"experie-item d-flex align-items-center"},[s("div",{staticClass:"num font-second"},[t._v(t._s(e.num))]),s("div",[s("div",[t._v(t._s(e.en))]),s("div",[t._v(t._s(e.desc))])])])})),0),s("div",{staticClass:"skill-box d-flex"},[s("div",{staticClass:"left d-flex"},t._l(t.skillList,(function(e,n){return s("div",{key:n,staticClass:"skill-item"},[s("img",{attrs:{src:""+t.baseOss+e.iconUrl}}),s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"desc"},[t._v(t._s(e.desc))])])})),0),s("div",{staticClass:"right"},[s("div",{staticClass:"f316-font font-204"},[s("span",[t._v(t._s(t.TextMap.canIDo.split("|")[0]))]),s("span",{staticClass:"text-yellow"},[t._v(t._s(t.TextMap.canIDo.split("|")[1]))])]),s("pre",{staticClass:"skill-text"},[t._v(t._s(t.TextMap.skillInfo))]),s("div",{staticClass:"primary-btn"},[t._v("查看作品 >>")])])]),s("div",{staticClass:"chooseme-box"},[s("div",{staticClass:"f316-font font-204"},[s("span",[t._v(t._s(t.TextMap.chooseme.split("|")[0]))]),s("span",{staticClass:"text-yellow"},[t._v(t._s(t.TextMap.chooseme.split("|")[1]))])]),s("p",{staticClass:"desc"},[t._v(t._s(t.TextMap.choosemeDesc))]),s("SkillChart")],1)]),s("PreWorks")],1)},_=[],C=function(){return[{num:"24+",en:"YEARS OLD",desc:"今年11月就25岁哦~"},{num:"3+",en:"WORKING YEARS",desc:"三年工作年限"},{num:"30+",en:"PROJECT EXPERIENCE",desc:"30多个项目经验"}]},b=function(){return[{name:"UI Design",desc:"用户界面(User Interface)设计以及切图，包括移动端和PC端。",iconUrl:"icon1.png"},{name:"Illustration",desc:"学习插画技能近一年，能够完成运营插画设计以及UI人物插画情绪版设计。",iconUrl:"icon2.png"},{name:"Motion design",desc:"能够完成简易加载动效设计，正在学习优设网《动效周期表》。",iconUrl:"icon3.png"}]},h=function(){return[{name:"PS/Sketch",percent:90},{name:"AI",percent:80},{name:"AE",percent:35},{name:"Figma",percent:45},{name:"Axure",percent:45}]},x=function(){return[{name:"学习能力超棒!",percent:80,desc:"近期工作方面主要学习方向-插画；业余学习方向-游戏剪辑。",color:"#FEBC5B"},{name:"统筹能力好",percent:70,desc:"做事情条理清晰，顾全大局。主持过公司周年庆、负责过音乐节舞台协助工作。",color:"#E96F94"},{name:"情绪管理强",percent:75,desc:"心理学毕业，考取了心理咨询师三级证书，有良好的情绪调节能力。",color:"#5B89FE"}]},g=function(){return[{name:"扁平人物情绪版",desc:"一套扁平的人物插画情绪版设计，包括工作、金融…",time:"2021.06.03",imgUrl:""},{name:"云链钱包APP",desc:"云链钱包是一个去中心化数字资产钱包…",time:"2021.05.26",imgUrl:""},{name:"Bingo交易所",desc:"Bingo交易所是一个数字货 币交易平台…",time:"正在开发",imgUrl:""},{name:"Bingo交易所",desc:"Bingo交易所是一个数字货 币交易平台…",time:"正在开发",imgUrl:""}]},k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skill-chart d-flex"},[s("div",{staticClass:"w-50 left"},[s("div",{staticClass:"title font-m"},[t._v("Professional skill")]),s("div",{staticClass:"chart-bar-box"},t._l(t.skillBarData,(function(e,n){return s("div",{key:n,staticClass:"bar-item"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"bar-bg w-100"}),s("div",{staticClass:"bar-active",style:{width:e.percent+"%"}})])})),0)]),s("div",{staticClass:"w-50 right"},[s("div",{staticClass:"title font-m"},[t._v("Personal qualities")]),s("div",{staticClass:"chart-pie-box d-flex"},t._l(t.skillPieData,(function(e,n){return s("div",{key:n,staticClass:"pie-item"},[s("div",{staticClass:"pie-box",style:{background:e.color}},[s("div",{staticClass:"circle"}),t._m(0,!0),s("div",{staticClass:"right"},[s("div",{staticClass:"right-deg",style:{transform:"rotate("+(3.6*(100-e.percent)-180)+"deg)"}})]),s("div",{staticClass:"num"},[t._v(t._s(e.percent)+"%")])]),s("div",{staticClass:"name text-center"},[t._v(t._s(e.name))]),s("p",{staticClass:"desc font-xs"},[t._v(t._s(e.desc))])])})),0)])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left"},[s("div",{staticClass:"left-deg"})])}],w={name:"SkillChart",data:function(){return{skillBarData:h(),skillPieData:x()}}},O=w,E=(s("dbe6"),Object(f["a"])(O,k,y,!1,null,null,null)),P=E.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pre-works d-flex",style:{backgroundImage:"url("+t.baseOss+"bg2@2x.png)"}},[s("div",{staticClass:"left"},[s("div",{staticClass:"f316-font font-204"},[s("span",[t._v(t._s(t.TextMap.recentWork.split("|")[0]))]),s("span",{staticClass:"text-yellow"},[t._v(t._s(t.TextMap.recentWork.split("|")[1]))])]),s("pre",{staticClass:"skill-text"},[t._v(t._s(t.TextMap.recentWorkDesc))]),s("div",{staticClass:"primary-btn"},[t._v("查看全部 >>")])]),s("div",{staticClass:"right",attrs:{id:"pre-works-container"}},[s("div",{staticClass:"pre-work-list d-flex",style:{left:t.offset+"rem"},attrs:{id:"pre-works-content"}},t._l(t.workList,(function(e,n){return s("div",{key:n,staticClass:"work-item"},[s("div",{staticClass:"img-box"}),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"desc"},[t._v(t._s(e.desc))]),s("div",{staticClass:"time small"},[t._v(t._s(e.time))])])])})),0),s("div",{staticClass:"switch-btn"},[s("div",{staticClass:"btn to-left-btn",class:{disabled:t.offset>=0},on:{click:function(e){return t.handleSwitch("toleft")}}},[t._v("←")]),s("div",{staticClass:"btn to-right-btn",class:{disabled:t.offset<=-t.maxOffset},on:{click:function(e){return t.handleSwitch("toright")}}},[t._v("→")])])])])},S=[],M=(s("ac1f"),s("1276"),16.46),I={name:"PreWorks",data:function(){return{workList:g(),offset:0,maxOffset:M}},methods:{getRightBoxWidth:function(){var t=document.querySelector("#pre-works-container").clientWidth,e=document.querySelector("#pre-works-content").clientWidth,s=window.getComputedStyle(document.querySelector("html"),null).getPropertyValue("font-size").split("px")[0]||16;this.maxOffset=(e-t)/parseInt(s)},handleSwitch:function(t){var e="toleft"===t?M:-M,s=this.offset,n=this.maxOffset,a=s+e;this.offset=a>0?0:a<-n?-n:a}},mounted:function(){this.getRightBoxWidth()}},W=I,D=(s("73f5"),Object(f["a"])(W,T,S,!1,null,null,null)),j=D.exports,B={name:"HomeBox",data:function(){return{experieList:C(),skillList:b()}},components:{SkillChart:P,PreWorks:j}},U=B,A=(s("04d3"),Object(f["a"])(U,m,_,!1,null,null,null)),L=A.exports,$={},R=Object(f["a"])($,n,a,!1,null,null,null),q=R.exports,F={name:"App",data:function(){return{currentTab:"home"}},components:{NavBar:p},computed:{current:function(){var t=this;return this.menus.find((function(e){return e.value===t.currentTab})).component},menus:function(){return[{value:"home",label:"首页",component:L},{value:"profile",label:"简介",component:q},{value:"works",label:"作品",component:""},{value:"callme",label:"联系我",component:""}]}}},N=F,J=(s("034f"),Object(f["a"])(N,c,l,!1,null,null,null)),Y=J.exports,H=(s("c11b"),{welcomeEn:"WELCOME  TO  MY  WORLD",welcomeCn:"Hi，这里是D.va的个人网站，很高兴认识你！",canIDo:"What can | I do",skillInfo:"作为一名UI设计师，\n我擅长UI设计，包括移动端和网页端; \n擅长插画， \n包括运营插画和人物情绪版设计； \n能做简单的AE动效……",chooseme:"Why you | choose me",choosemeDesc:"选我当然是因我过硬的技能、有趣的灵魂和微厚的…脸皮，哈哈~说正经的，专业技能方面，熟练掌握PS、AI、Axure 熟悉AE、Figma；个人突出特质方面，自学能力超棒（做设计以来从未间断练习）、情绪调节能力一流（毕竟心理学专业）、 统筹能力强（主持公司周年庆、草莓音乐节志愿者）",recentWork:"My recent | works",recentWorkDesc:"近期作品包括公司项目和个人练习，\n公司项目以移动端为主;\n个人练习均为原创，有平时打卡也有比赛作品。"});i["a"].config.productionTip=!1,i["a"].prototype.baseOss="https://lingyun-1303231715.cos.ap-chengdu.myqcloud.com/homepage/",i["a"].prototype.TextMap=H,new i["a"]({render:function(t){return t(Y)}}).$mount("#app")},"610d":function(t,e,s){},"73f5":function(t,e,s){"use strict";s("610d")},"85ec":function(t,e,s){},c11b:function(t,e,s){},cd05:function(t,e,s){},dbe6:function(t,e,s){"use strict";s("cd05")},fc53:function(t,e,s){}});
//# sourceMappingURL=app.89e2fd37.js.map