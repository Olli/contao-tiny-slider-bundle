!function(t){function e(e){for(var r,u,c=e[0],s=e[1],a=e[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&d.push(i[u][0]),i[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(f&&f(e);d.length;)d.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},i={"contao-tiny-slider-bundle":0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/bundles/contaotinyslider/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var f=s;o.push(["szV5","tiny-slider"]),n()}({"116/":function(t,e,n){"use strict";function r(t,e){return t.getAttribute(e)}n.d(e,"a",(function(){return r}))},"3QtS":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("4bw/"),i=n("doX8"),o=n("zHkA");function u(){var t,e=document,n=Object(r.a)(),u=Object(i.a)(n),c=e.createElement("div"),s=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return s.type="text/css",c.className="tns-mq-test",n.appendChild(s),n.appendChild(c),s.styleSheet?s.styleSheet.cssText=a:s.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(c).position:c.currentStyle.position,n.fake?Object(o.a)(n,u):c.remove(),"absolute"===t}},"3jwQ":function(t,e,n){"use strict";function r(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}n.d(e,"a",(function(){return r}))},"4bw/":function(t,e,n){"use strict";function r(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}n.d(e,"a",(function(){return r}))},"5kMP":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("sZZZ");function r(t,e,n,r){"insertRule"in t?t.insertRule(e+"{"+n+"}",r):t.addRule(e,n,r)}},"6a45":function(t,e,n){"use strict";function r(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}n.d(e,"a",(function(){return r}))},BRVg:function(t,e,n){"use strict";function r(t,e){"none"!==t.style.display&&(t.style.display="none")}n.d(e,"a",(function(){return r}))},C3Jh:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("4bw/"),i=n("doX8"),o=n("zHkA");function u(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,u=Object(r.a)(),c=Object(i.a)(u),s=n.createElement("p"),a=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",u.insertBefore(s,null),s.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(s).getPropertyValue(a),u.fake?Object(o.a)(u,c):s.remove(),void 0!==e&&e.length>0&&"none"!==e}},CZzP:function(t,e,n){"use strict";function r(t,e,n,r,i,o,u){var c=Math.min(o,10),s=i.indexOf("%")>=0?"%":"px",a=(i=i.replace(s,""),Number(t.style[e].replace(n,"").replace(r,"").replace(s,""))),f=(i-a)/o*c;setTimeout((function i(){o-=c;a+=f;t.style[e]=n+a+s+r;o>0?setTimeout(i,c):u()}),c)}n.d(e,"a",(function(){return r}))},DGq0:function(t,e,n){"use strict";function r(t,e){var n=!1,r=Math.abs(90-Math.abs(t));return r>=90-e?n="horizontal":r<=e&&(n="vertical"),n}n.d(e,"a",(function(){return r}))},DPu6:function(t,e,n){"use strict";function r(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}n.d(e,"a",(function(){return r}))},EVeF:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("fMVK"),i=r.a?function(t,e){Object(r.b)(t,e)||t.classList.add(e)}:function(t,e){Object(r.b)(t,e)||(t.className+=" "+e)}},Jo3q:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("sZZZ");function r(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}},KgU8:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,i)}catch(t){}var o=!!r&&{passive:!0}},Mhio:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("4bw/"),i=n("doX8"),o=n("zHkA");function u(){var t,e=document,n=Object(r.a)(),u=Object(i.a)(n),c=e.createElement("div"),s=e.createElement("div"),a="";c.className="tns-t-subp2",s.className="tns-t-ct";for(var f=0;f<70;f++)a+="<div></div>";return s.innerHTML=a,c.appendChild(s),n.appendChild(c),t=Math.abs(c.getBoundingClientRect().left-s.children[67].getBoundingClientRect().left)<2,n.fake?Object(o.a)(n,u):c.remove(),t}},OQBQ:function(t,e,n){"use strict";function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}n.d(e,"a",(function(){return r}))},OT9h:function(t,e,n){"use strict";function r(){for(var t,e,n,r=arguments[0]||{},i=1,o=arguments.length;i<o;i++)if(null!==(t=arguments[i]))for(e in t)r!==(n=t[e])&&void 0!==n&&(r[e]=n);return r}n.d(e,"a",(function(){return r}))},QcN2:function(t,e,n){"use strict";function r(t,e){"none"===t.style.display&&(t.style.display="")}n.d(e,"a",(function(){return r}))},Rkny:function(t,e,n){"use strict";function r(t,e){return t.hasAttribute(e)}n.d(e,"a",(function(){return r}))},RmEV:function(t,e){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})},X1U1:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("uTG1");function i(t,e){if(t=Object(r.a)(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}},YpGO:function(t,e,n){"use strict";function r(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(r){"ms"===r&&"transform"!==t||e.push(r+n)})),t=e}for(var r=document.createElement("fakeelement"),i=(t.length,0);i<t.length;i++){var o=t[i];if(void 0!==r.style[o])return o}return!1}n.d(e,"a",(function(){return r}))},ZDGe:function(t,e){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e})},ZRhr:function(t,e,n){"use strict";function r(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}n.d(e,"a",(function(){return r}))},aKFY:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("uTG1");function i(t,e){t=Object(r.a)(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}},adWg:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("fMVK"),i=r.a?function(t,e){Object(r.b)(t,e)&&t.classList.remove(e)}:function(t,e){Object(r.b)(t,e)&&(t.className=t.className.replace(e,""))}},doX8:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("oxWU");function i(t){var e="";return t.fake&&(e=r.a.style.overflow,t.style.background="",t.style.overflow=r.a.style.overflow="hidden",r.a.appendChild(t)),e}},fMVK:function(t,e,n){"use strict";var r="classList"in document.createElement("_");n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var i=r?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0}},"i3+m":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=window,i=r.cancelAnimationFrame||r.mozCancelAnimationFrame||function(t){clearTimeout(t)}},jpsT:function(t,e,n){"use strict";function r(t){return("insertRule"in t?t.cssRules:t.rules).length}n.d(e,"a",(function(){return r}))},mvuD:function(t,e,n){"use strict";function r(t,e){return Math.atan2(t,e)*(180/Math.PI)}n.d(e,"a",(function(){return r}))},nfXK:function(t,e,n){"use strict";function r(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}n.d(e,"a",(function(){return r}))},oxWU:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=document.documentElement},sZZZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=window,i=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.msRequestAnimationFrame||function(t){return setTimeout(t,16)}},szV5:function(t,e,n){"use strict";n.r(e);var r=n("L+tW");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}window.tns=window.tns?window.tns:r.a;var c=function(){function t(e,n){i(this,t),document.querySelectorAll(e).forEach((function(t){new s(t).init(n)}))}return u(t,null,[{key:"getSliders",value:function(){return t.sliders}}]),t}(),s=function(){function t(e){i(this,t),this.element=e,this.container=this.element.querySelector(".tiny-slider-container")}return u(t,[{key:"init",value:function(t){this.config=JSON.parse(this.container.getAttribute("data-tiny-slider-config"));var e=this.container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(!this.config.hasOwnProperty("skipInit")||!0!==this.config.skipInit||void 0!==t&&t){this.config.container=this.element.querySelector(this.config.container);var n=this.config.onInit;this.config.onInit=function(t){(this.element.classList.add("tiny-slider-initialized"),this.sliderControls=this.element.querySelector(".tns-controls"),this.sliderControls&&e.length>0&&this.sliderControls.removeAttribute("tabindex"),n)&&new Function(n+"()")()}.bind(this),this.slider=Object(r.a)(this.config),this.container.addEventListener("keydown",this.keyListener.bind(this),!0),c.sliders.push(this.slider)}}},{key:"keyListener",value:function(t){var e=t.target,n=this.slider.getInfo();if(9===t.keyCode){if(t.target===this.sliderControls)return this.slider.goTo(t.shiftKey?"prev":"next"),void(t.shiftKey?n.index>0&&t.preventDefault():n.index+1<n.slideCount&&t.preventDefault());for(;e.parentNode;){if(void 0!==e.parentNode.classList&&e.parentNode.classList.contains("tns-item")){this.slider.goTo(t.shiftKey?"prev":"next");break}e=e.parentNode}}}}]),t}();c.sliders=[],document.addEventListener("DOMContentLoaded",(function(){new c(".tiny-slider")})),window.TinySliderBundle=c,e.default=c},uTG1:function(t,e,n){"use strict";function r(t){return void 0!==t.item}n.d(e,"a",(function(){return r}))},ufzH:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("4bw/"),i=n("doX8"),o=n("zHkA");function u(){var t=document,e=Object(r.a)(),n=Object(i.a)(e),u=t.createElement("div"),c=!1;e.appendChild(u);try{for(var s,a="(10px * 10)",f=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],l=0;l<3;l++)if(s=f[l],u.style.width=s,100===u.offsetWidth){c=s.replace(a,"");break}}catch(t){}return e.fake?Object(o.a)(e,n):u.remove(),c}},"w/wc":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("KgU8");function i(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&r.a;t.removeEventListener(n,e[n],i)}}},w4w5:function(t,e,n){"use strict";function r(t){return"none"!==window.getComputedStyle(t).display}n.d(e,"a",(function(){return r}))},wLB4:function(t,e,n){"use strict";function r(t,e,n,r){if(r)try{t.setItem(e,n)}catch(t){}return n}n.d(e,"a",(function(){return r}))},"xw/A":function(t,e,n){"use strict";function r(t,e,n){for(var r=0,i=t.length;r<i;r++)e.call(n,t[r],r)}n.d(e,"a",(function(){return r}))},yrKC:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("KgU8");function i(t,e,n){for(var i in e){var o=["touchstart","touchmove"].indexOf(i)>=0&&!n&&r.a;t.addEventListener(i,e[i],o)}}},zHkA:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("oxWU");function i(t,e){t.fake&&(t.remove(),r.a.style.overflow=e,r.a.offsetHeight)}}});