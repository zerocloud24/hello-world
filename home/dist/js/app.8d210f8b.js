(function(e){function n(n){for(var r,a,c=n[0],l=n[1],i=n[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(n);while(p.length)p.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var i=0;i<c.length;i++)n(c[i]);var s=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0315":function(e,n,t){"use strict";t("a8a1")},"034f":function(e,n,t){"use strict";t("85ec")},"110f":function(e,n,t){},"41a3":function(e,n,t){"use strict";t("110f")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r,o,u=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("NavBar",{attrs:{menus:e.menus},model:{value:e.currentTab,callback:function(n){e.currentTab=n},expression:"currentTab"}}),t(e.current,{tag:"components"})],1)},c=[],l=(t("7db0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"nav-bar d-flex align-items-center"},[e._m(0),t("div",{staticClass:"menu-box d-flex w-50"},e._l(e.menus,(function(n){return t("div",{key:n.value,staticClass:"menu-item font-16",class:{"is-active":e.value===n.value},on:{click:function(t){return e.$emit("input",n.value)}}},[e._v(e._s(n.label))])})),0)])}),i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"logo-box w-50 h-100"},[t("div",{staticClass:"name f316-font h-100"},[e._v("D.va")]),t("div",{staticClass:"bg-prup"})])}],s={name:"NavBar",props:{menus:Array,value:String}},f=s,p=(t("0315"),t("2877")),v=Object(p["a"])(f,l,i,!1,null,null,null),m=v.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home-box"},[e._v("home")])},b=[],h={name:"HomeBox",props:{},data:function(){return{}},computed:{},methods:{},mounted:function(){},components:{},watch:{}},_=h,y=(t("41a3"),Object(p["a"])(_,d,b,!1,null,null,null)),g=y.exports,x={},w=Object(p["a"])(x,r,o,!1,null,null,null),O=w.exports,j={name:"App",data:function(){return{currentTab:"home"}},components:{NavBar:m},computed:{current:function(){var e=this;return this.menus.find((function(n){return n.value===e.currentTab})).component},menus:function(){return[{value:"home",label:"首页",component:g},{value:"profile",label:"简介",component:O},{value:"works",label:"作品",component:""},{value:"callme",label:"联系我",component:""}]}}},T=j,k=(t("034f"),Object(p["a"])(T,a,c,!1,null,null,null)),C=k.exports;u["a"].config.productionTip=!1,new u["a"]({render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,n,t){},a8a1:function(e,n,t){}});
//# sourceMappingURL=app.8d210f8b.js.map