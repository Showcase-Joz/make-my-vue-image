(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"217e":function(e,t,r){e.exports=r.p+"img/vue-logo.47fccbbe.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,o,a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{backgroundImage:"url("+e.makeTemplateProps.backgroundImage+")"},attrs:{id:"app"}},[e.makeTemplateProps.showLogos?r("div",{staticStyle:{"z-index":"2"}},[r("Logos")],1):e._e(),r("h1",[e._v(e._s(e.makeTemplateProps.headline))]),r("Shapes")],1)},i=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logos"},[n("img",{attrs:{src:r("9b19")}}),n("div",{staticClass:"seperator"}),n("img",{attrs:{src:r("217e")}})])}],u={name:"Logos"},f=u,p=(r("6a60"),r("2877")),d=Object(p["a"])(f,c,l,!1,null,"6356fead",null),h=d.exports,m=(r("99af"),r("d81d"),{name:"Shapes",render:function(){var e=arguments[0];function t(){return Math.floor(500*Math.random()+100)}function r(){return Math.floor(500*Math.random()+900)}return e("div",{class:"shape-container",style:{overflow:"hidden"}},[e("svg",{class:"svg-shapes",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"100 100 600 600",preserveAspectRatio:"xMidYMid slice"}},[[0,1,2,3,4].map((function(n){return e("circle",{key:n,attrs:{r:Math.floor(900*Math.random())+100,cx:Math.floor(900*Math.random()),cy:Math.floor(900*Math.random()),"stroke-width":Math.floor(200*Math.random()+75),"stroke-dasharray":"".concat(t()," ").concat(r())}})}))]),e("svg",{style:{pointerEvents:"none"}},[e("defs",[e("linearGradient",{attrs:{id:"bggrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%"}},[e("stop",{attrs:{offset:"0%"},style:{stopColor:"#E9336B"}}),e("stop",{attrs:{offset:"100%"},style:{stopColor:"#ff8674"}})])])])])}}),v=m,g=(r("94ea"),Object(p["a"])(v,n,o,!1,null,null,null)),b=g.exports,y={computed:{makeTemplateProps:function(){return window.templateProps||{headline:"This is my first vue of make!",showLogos:!0,backgroundImage:""}}}},w={name:"App",components:{Logos:h,Shapes:b},mixins:[y]},x=w,M=(r("034f"),Object(p["a"])(x,s,i,!1,null,null,null)),_=M.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(_)}}).$mount("#app")},"6a60":function(e,t,r){"use strict";r("6e12")},"6e12":function(e,t,r){},"85ec":function(e,t,r){},8636:function(e,t,r){},"94ea":function(e,t,r){"use strict";r("8636")},"9b19":function(e,t,r){e.exports=r.p+"img/logo.885f7005.svg"}});
//# sourceMappingURL=app.68b63aa8.js.map