(function(e){function n(n){for(var o,s,u=n[0],c=n[1],a=n[2],l=0,p=[];l<u.length;l++)s=u[l],r[s]&&p.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(p.length)p.shift()();return i.push.apply(i,a||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,u=1;u<t.length;u++){var c=t[u];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},r={app:0},i=[];function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var a=0;a<u.length;a++)n(u[a]);var f=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("64a9"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("header",[e._v("拖拽事件")]),t("div",{attrs:{id:"webId"}},[t("div",{staticClass:"xuanfu",attrs:{id:"moveDiv"},on:{mousedown:e.down,touchstart:e.down,mousemove:e.move,touchmove:function(n){return n.preventDefault(),e.move(n)},mouseup:e.end,touchend:e.end}})])])},i=[],s=(t("3846"),{name:"app",components:{},data:function(){return{flags:!1,position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:""}},methods:{down:function(){var e;this.flags=!0,e=event.touches?event.touches[0]:event,this.position.x=e.clientX,this.position.y=e.clientY,this.dx=moveDiv.offsetLeft,this.dy=moveDiv.offsetTop},move:function(){var e;this.flags&&(e=event.touches?event.touches[0]:event,this.nx=e.clientX-this.position.x,this.ny=e.clientY-this.position.y,this.xPum=this.dx+this.nx,this.yPum=this.dy+this.ny,moveDiv.style.left=this.xPum+"px",moveDiv.style.top=this.yPum+"px",document.addEventListener("touchmove",function(){event.preventDefault()},!1))},end:function(){this.flags=!1}}}),u=s,c=(t("034f"),t("2877")),a=Object(c["a"])(u,r,i,!1,null,null,null),f=a.exports,l=t("2832"),p=t("e1bc");Object(p["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,o["a"].use(l["a"]);var d=[{path:"/App",name:"app",component:f},{path:"/",redirect:"app"}],v=new l["a"]({routes:d});new o["a"]({router:v,render:function(e){return e(f)}}).$mount("#app")},"64a9":function(e,n,t){}});