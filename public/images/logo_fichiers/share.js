(self.webpackChunkfld_website=self.webpackChunkfld_website||[]).push([[557],{132:function(t,e,n){"use strict";n.d(e,{y:function(){return r}});var r=function(){function t(e,n){if(void 0===n&&(n={}),!(this instanceof t))return new t(e,n);this._listeners=[];var r=this.dispatch.bind(this);this.subscribe=this.subscribe.bind(this),this.dispatch=n.middleware&&n.middleware(r)||r,this.set=this.set.bind(this),this.get=this.get.bind(this),this.set(e)}return t.prototype.subscribe=function(t){var e=this._listeners;return e.push(t),function(){var n=e.indexOf(t);n<0||e.splice(n,1)}},t.prototype.dispose=function(){this._listeners.splice(0,this._listeners.length)},t.prototype.dispatch=function(t,e){return this.set("function"==typeof t?t.call(void 0,this._value,e):t)},t.prototype.set=function(t){return this.notify(this._value=t)},t.prototype.get=function(){return this._value},t.prototype.notify=function(t){for(var e=this._listeners.slice(),n=0,r=e.length;n<r;n++)e[n].call(void 0,t);return t},t}()},138:function(t,e,n){"use strict";function r(t){return Array.isArray(t)?t:[t]}n.d(e,{rY:function(){return r}})},755:function(t,e,n){"use strict";function r(t,e){return void 0===e&&(e=document),e.querySelector(t)}function o(t,e){return void 0===e&&(e=document),i(e.querySelectorAll(t))}function i(t){for(var e=t.length,n=[],r=0;r<e;r++){var o=t.item(r);o instanceof Element&&n.push(o)}return n}n.d(e,{sE:function(){return r},Oq:function(){return o},pm:function(){return i}})},795:function(t,e,n){"use strict";n.d(e,{$v:function(){return y},G:function(){return m}}),n(287);var r=n(132);function o(t){var e,n=t._events;if(n)for(var r in n)for(var i=0,s=n[r];i<s.length;i++){var u=s[i];t.removeEventListener(r,u)}for(t.parentNode&&t.parentNode.removeChild(t);e=t.firstChild;)o(e)}function i(t,e){for(var n in e){if("style"===n){var r=e[n];if("object"==typeof r){s(t.style,r);continue}}t.setAttribute(n,e[n])}}function s(t,e){for(var n in e)t[n]=e[n];return t}var u=n(755);function c(t,e,n){var r=t._events||(t._events={}),o=r[e]||(r[e]=[]);o.indexOf(n)<0&&(o.push(n),t.addEventListener(e,n))}function f(t,e,n){t.removeEventListener(e,n);var r=t._events&&t._events[e];if(r){var o=r.indexOf(n);if(o<0)return;r.splice(o,1)}}var a=function(){function t(t){this.nodes=d(t)}return t.fromElements=function(e){var n=new t(null);return n.nodes=e,n},Object.defineProperty(t.prototype,"node",{get:function(){return this.nodes[0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"className",{get:function(){return this.node.className},enumerable:!1,configurable:!0}),t.prototype.get=function(t){return this.node.getAttribute(t)},t.prototype.set=function(t){for(var e=0,n=this.nodes;e<n.length;e++)i(n[e],t);return this},t.prototype.parent=function(){var e=this.node.parentElement;return null==e?null:new t(e)},t.prototype.hasClass=function(t){return null!=this.nodes.find((function(e){return e.classList.contains(t)}))},t.prototype.appendTo=function(e){e instanceof t&&(e=e.node);for(var n=0,r=this.nodes;n<r.length;n++){var o=r[n];e.appendChild(o)}return this},t.prototype.append=function(t){for(var e=l(t),n=this.node,r=0,o=e;r<o.length;r++){var i=o[r];n.appendChild(i)}return this},t.prototype.remove=function(){for(var t=0,e=this.nodes;t<e.length;t++)o(e[t]);return this.nodes=[],this},t.prototype.empty=function(t){void 0===t&&(t=function(t){return!0});for(var e=document.createDocumentFragment(),n=0,r=this.nodes;n<r.length;n++)for(var i=r[n];i.firstChild;)t(i.firstChild)?o(i.firstChild):e.appendChild(i.firstChild);return this.append(e),this},t.prototype.replace=function(t){for(var e=l(t),n=this.node,r=0,o=e;r<o.length;r++){var i=o[r];n.parentNode.insertBefore(i,n)}return this.nodes=e,this},t.prototype.find=function(e){var n=this.nodes.reduce((function(t,n){return t.concat((0,u.Oq)(e,n))}),[]);return n.length>0?t.fromElements(n):null},t.prototype.each=function(e){return h(this.nodes,(function(n,r){return e(t.fromElements([n]),r)})),this},t.prototype.map=function(e){for(var n=this.nodes,r=n.length,o=new Array(r),i=0;i<r;i++)o[i]=e(t.fromElements([n[i]]),i);return o},t.prototype.toggleClass=function(t,e){return void 0===e&&(e=!this.hasClass(t)),h(this.nodes,(function(n){n.classList.toggle(t,e)})),this},t.prototype.css=function(t){return this.set({style:t})},t.prototype.on=function(t,e){for(var n=0,r=this.nodes;n<r.length;n++)c(r[n],t,e);return this},t.prototype.off=function(t,e){for(var n=0,r=this.nodes;n<r.length;n++)f(r[n],t,e);return this},t}();function l(t){return t instanceof a?t.nodes:d(t)}function d(t){return"string"==typeof t?(t=t.trim())?"<"!==t[0]?(0,u.Oq)(t):(e=t,(n=document.createElement("div")).innerHTML=e,(0,u.pm)(n.childNodes)):[]:t instanceof Node?[t]:Array.isArray(t)?t.reduce((function(t,e){return t.concat(d(e))}),[]):[];var e,n}function h(t,e){for(var n=0,r=t.length;n<r;n++)if(!1===e(t[n],n))return}var p=n(138),v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function y(t){return new a(t)}function m(t,e,n){var o=function(t,e,n){var r={};return"object"!=typeof t||t instanceof Node||Array.isArray(t)?(r.node=t,void 0===n&&"function"==typeof e?r.subs=e:(r.init=e,r.subs=n)):Object.assign(r,t),r}(t,e,n);n=o.subs||function(){return[]},e=o.init;var i=new a(o.node||window),s=(0,r.y)("function"==typeof e?e(i):e),u=s.dispatch,c=s.get,f=n(c()).slice(),l=i.appendTo.bind(i);s.subscribe((function(t){var e=f,r=n(t),o=r.length;if(o!==e.length)throw new Error("Subscriptions array must have same length");for(var i=0;i<o;i++){var s=e[i],u=(0,p.rY)(r[i]),c=u[1],a=s[1];if(!Array.isArray(c)&&"object"==typeof c&&g(a,c)||c!==a){var l=u[0],h=s[0];h&&h(),f[i]=[l&&l.call(void 0,d,c),c]}}}));for(var d={view:i,refs:{},dispatch:s.dispatch,subscribe:s.subscribe,destroy:function(){for(var t=0,e=f;t<e.length;t++){var n=e[t];n&&n[0]&&n[0].call()}s.dispose(),i.remove()},mount:l,getState:s.get,set:function(t){var e=c(),n="function"==typeof t?t(e):t;return u("object"==typeof n?v(v({},e),n):n)}},h=0,y=f.length;h<y;h++){var m=f[h]=(0,p.rY)(f[h]),b=m[0];m[0]=b&&b.call(void 0,d,m[1])}return d}function g(t,e){for(var n in t)if(t[n]!==e[n])return!0;for(var n in e)if(t[n]!==e[n])return!0;return!1}},287:function(){"use strict";document.querySelectorAll||(document.querySelectorAll=function(t){var e,n=document.createElement("style"),r=[];for(document.documentElement.firstChild.appendChild(n),document._qsa=[],n.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),n.parentNode.removeChild(n);document._qsa.length;)(e=document._qsa.shift()).style.removeAttribute("x-qsa"),r.push(e);return document._qsa=null,r}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null})},667:function(t,e,n){"use strict";function r(t){var e=t.view,n=e.find("a"),r=e.find("input"),o=e.find("form");o&&o.on("submit",(function(t){t.preventDefault(),location.href=n.get("href")})),r&&n&&r.on("change",(function(t){var e,r=t.currentTarget.value,o=((null===(e=n.get("href"))||void 0===e?void 0:e.split("?"))||[""])[0];n.set({href:o+"?companyName="+encodeURIComponent(r)})}))}(0,n(795).G)({node:"#shareFooter",init:null,subs:function(t){return[[r]]}})}},0,[[667,666]]]);
//# sourceMappingURL=share.af5b3e3157f8a6213ae1.js.map