!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);class i{constructor(t,e,n,i,o){this._f=t,this._l=this,this._r=null,this._c=null,this._t=e,this._k=0,this._p=n,this._i=null,this._s=o,this._cs=i,this._e=null}k(t){return this._f|=64,this._k=t,this}e(t){return null!==t&&(this._f|=256,this._e=t),this}t(t){return this._f|=-2147483616,this._c=t,this}c(){const t=arguments;let e=null,n=null;for(let i=0,l=0;i<t.length;++i,++l){let r=t[i];if(null!==r){"object"!==typeof r&&(r=o(r));const t=r._l,i=r._f;if(t===r)0===(64&i)&&(r._k=l);else if(0===(128&i)){let t=r;do{0===(64&t._f)&&(t._k=l),++l,t=t._r}while(null!==t);--l}null!==n?(r._l=n,n._r=r):e=r,n=t}}return null!==e&&(e._l=n,this._f|=16,this._c=e),this}}const o=t=>new i(1,null,t,"",void 0);function l(t){return 0!==(1032&t._f)?l(t._c):t._i}function r(t,e){const n={c:t,shouldUpdate:e};return t=>new i(8,n,t,"",void 0)}function s(t,e){const n=new i(1024,null,t,"",void 0);return n._c=e,n}let a={};function c(t){const e=a;return a=t,e}function u(t){a=t}function d(){return a}const f=requestAnimationFrame,h=t=>{Promise.resolve().then(t)};function p(t,e){const n=t.length-1,i=t.pop();e!==n&&(t[e]=i)}function _(t,e){const n=t.indexOf(e);p(t,n)}function m(t){for(let e=0;e<t.length;++e)!0===t[e]()&&p(t,e--)}const v=()=>{},y=[];function x(t){return function(){try{return t.apply(void 0,arguments)}catch(e){throw y.forEach(t=>{t(e)}),e}}}(()=>{let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});window.addEventListener("test",null,n)}catch(e){}})(),KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;const g="GestureEvent"in window,w=Node.prototype,b=Element.prototype,M=(Object.prototype.hasOwnProperty,w.insertBefore),T=w.removeChild,C=w.replaceChild,k=w.cloneNode,E=b.setAttribute,S=(b.setAttributeNS,b.removeAttribute),H="http://www.w3.org/2000/svg";function O(t,e){let n,i,o;if(null===t)j(e);else if(null===e)A(t);else if(t instanceof Array)if(e instanceof Array){for(n=0;n<t.length&&n<e.length;)(i=t[n])!==(o=e[n++])&&(null!==o&&P(o),null!==i&&N(i));for(;n<e.length;)null!==(i=e[n++])&&P(i);for(;n<t.length;)null!==(i=t[n++])&&N(i)}else for(P(e),n=0;n<t.length;++n)null!==(i=t[n])&&N(i);else j(e),N(t)}function j(t){if(t instanceof Array)for(let e=0;e<t.length;++e){const n=t[e];null!==n&&P(n)}else P(t)}function A(t){if(t instanceof Array)for(let e=0;e<t.length;++e){const n=t[e];null!==n&&N(n)}else N(t)}function P(t){t.src.add(t)}function N(t){t.src.remove(t)}function F(t,e){T.call(t,l(e)),L(e)}function L(t){const e=t._f;if(0!==(1048&e)){let n=t._c;for(;null!==n;)L(n),n=n._r;if(0!==(8&e)){const e=t._i.detached;if(null!==e)if("function"===typeof e)e();else for(let t=0;t<e.length;t++)e[t](!0)}}0!==(256&e)&&A(t._e)}function q(t,e,n){const i=e._f;if((-2147482600&i)>0){const o=e._i;let l=e._c;if(0!==(16&i))for(;null!==l;)q(o,l,n),l=l._r;else if(0!==(8&i)){const i=o.select;!0===o.dirty||null!==i&&!0===i(d())?G(t,l,e._c=o.update(e._p),n):q(t,l,n)}else{!0===n&&(e._i=Object.assign({},d(),e._p));const i=c(e._i);q(t,l,n),u(i)}}}function R(t,e){t.textContent="";do{L(e),e=e._r}while(null!==e)}function V(t,e){const n=e._f,i=e._p;let o,l=null;if(0!==(1&n))l=o=document.createTextNode(i);else{const r=e._t;if(0!==(256&n)&&j(e._e),0!==(2&n)){const s=0!==(512&n);0===(4&n)?o=s?document.createElementNS(H,r):document.createElement(r):(null===r._i&&V(t,r),o=k.call(r._i,!0)),l=o;const a=e._cs;if(a&&(!0===s?E.call(o,"class",a):o.className=a),void 0!==i&&K(o,void 0,i),void 0!==e._s&&I(o,void 0,e._s),0!==(16&n)){let t=e._c;for(;null!==t;)B(o,null,t),t=t._r}else 0!==(32&n)&&""!==e._c&&(o.textContent=e._c)}else if(0!==(8&n)){l={dirty:!1,update:null,select:null,detached:null};const n=r.c(l);l.update=n,o=V(t,e._c=n(i))}else{const n=c(l=Object.assign({},d(),i));o=V(t,e._c),u(n)}}return e._i=l,o}function B(t,e,n){M.call(t,V(t,n),e)}function G(t,e,n,i){if(e===n)return void q(t,n,i);let o;const r=e._f,s=n._f;if(0!==(523887&(r^s))||0!==(12&r)&&e._t!==n._t||e._k!==n._k)C.call(t,V(t,n),l(e)),L(e);else{const l=e._p,a=n._p;if(n._i=o=e._i,0!==(1&s))l!==a&&(o.data=a);else{const f=e._c;let h=n._c;if(e._e!==n._e&&O(e._e,n._e),0!==(2&s)){let t=n._cs;if(e._cs!==t&&(void 0===t&&(t=""),0!==(512&s)?E.call(o,"class",t):o.className=t),l!==a&&K(o,l,a),e._s!==n._s&&I(o,e._s,n._s),f!==h)if(0===(32&r))if(null===f)do{B(o,null,h),h=h._r}while(null!==h);else null===h?R(o,f):U(o,f,h,i);else{const t=o.firstChild;null!==t?t.nodeValue=h:o.textContent=h}}else if(0!==(8&s)){const e=n._t;!0===o.dirty||l!==a&&(void 0===e.shouldUpdate||!0===e.shouldUpdate(l,a))?(G(t,f,n._c=o.update(a),i),o.dirty=!1):(n._c=f,q(t,n,i))}else{l===a&&!0!==i||(o=Object.assign({},d(),a),i=!0),n._i=o;const e=c(o);G(t,f,h,i),u(e)}}}}function U(t,e,n,i){let o=e._l,r=n._l,s=0,a=0;t:for(;;){for(;e._k===n._k&&0===(64&(e._f^n._f));){if(G(t,e,n,i),a++,e===o?s=1:e=e._r,n===r){s|=2;break t}if(n=n._r,s)break t}for(;o._k===r._k&&0===(64&(o._f^r._f));){if(G(t,o,r,i),a++,e===o?s=1:o=o._l,n===r){s|=2;break t}if(r=r._l,s)break t}break}if(s){if(s<3)if(s<2){const e=z(r);for(;B(t,e,n),n!==r;)n=n._r}else for(;F(t,e),e!==o;)e=e._r}else{let c=0,u=0,d=0;const f=[];let h,p,_,m=n;for(;_=m._k,64&m._f?(void 0===h&&(h=new Map),h.set(_,u)):(void 0===p&&(p=new Map),p.set(_,u)),f[u++]=m,m!==r;)m=m._r;const v=new Array(u).fill(-1);let y=0;for(m=e;_=m._k,void 0===(s=0!==(64&m._f)?void 0===h?void 0:h.get(_):void 0===p?void 0:p.get(_))?m._k=null:(d=d>s?1e9:s,v[s]=c,G(t,m,f[s],i),y++),c++,m!==o;)m=m._r;if(a||y){for(s=c-y;s>0;)null===e._k&&(F(t,e),s--),e=e._r;if(1e9===d){const e=D(v);for(s=e.length-1;u>0;)v[--u]<0?B(t,z(r),r):s<0||u!==e[s]?M.call(t,l(r),z(r)):s--,r=r._l}else if(y!==u)for(;u>0;)v[--u]<0&&B(t,z(r),r),r=r._l}else{R(t,e);do{B(t,null,n),n=n._r}while(null!==n)}}}function z(t){const e=t._r;return null===e?null:l(e)}function D(t){const e=t.slice(),n=[];n[0]=0;let i,o,l,r=0;for(let s=0;s<t.length;++s){const a=t[s];if(-1!==a)if(t[l=n[r]]<a)e[s]=l,n[++r]=s;else{for(i=0,o=r;i<o;)t[n[l=(i+o)/2|0]]<a?i=l+1:o=l;a<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(o=n[r];r>=0;)n[r--]=o,o=e[o];return n}function I(t,e,n){const i=t.style;let o,l;if(void 0===e)for(o in n)void 0!==(l=n[o])&&i.setProperty(o,l);else if(void 0!==n)for(o in n)l=n[o],e[o]!==l&&(void 0!==l?i.setProperty(o,l):i.removeProperty(o))}function J(t,e,n,i){n!==i&&("object"===typeof i?i.u(t,e,void 0===n?void 0:n.v,i.v):("boolean"===typeof i&&(i=i?"":void 0),void 0===i?S.call(t,e):E.call(t,e,i)))}function K(t,e,n){let i;if(void 0===e)for(i in n)J(t,i,void 0,n[i]);else if(void 0!==n)for(i in n)J(t,i,e[i],n[i])}const Q=[],W=t=>Q.find(e=>e.container===t);function X(){for(let t=0;t<Q.length;++t){const e=Q[t],{container:n,current:i,next:o}=e;e.next=void 0,o?(i?G(n,i,o,!1):(B(n,null,o),g&&(n.onclick=v)),e.current=o):i&&(null===o?(F(n,i),_(Q,e),--t):q(n,i,!1))}}function Y(t){for(;t.v.length>0;){const e=t.v;let n=0;t.v=[];do{e[n++]()}while(n<e.length)}}let Z=0,$=1;const tt={v:[]},et={v:[]},nt={v:[]},it=[],ot=[];let lt=0;const rt=t=>x(function(){Z|=1,t.apply(void 0,arguments),Y(tt),Z&=-4,++$}),st=rt(v),at=()=>$,ct=t=>rt(e=>{Z|=16,t(e),0!==(4&Z)&&(lt=void 0===e?performance.now():e,m(it),0!==(32&Z)&&X(),Y(et),m(ot),Y(nt)),Z&=-61}),ut=ct(v);function dt(t){var e;void 0!==t&&0!==(1&t)&&0===(8&Z)?0===(16&(Z|=12))&&(e=ut,tt.v.push(e),0===(3&Z)&&(Z|=2,h(st))):0===(4&Z)&&0===(16&(Z|=4))&&f(ut)}function ft(t){Z|=32,dt(t)}function ht(t,e,n){const i=W(e);i?i.next=t:Q.push({container:e,next:t,current:null}),ft(n)}function pt(t,e,n){const i=t.select;let o,l,r=0;return t.select=(t=>{if(null!==i&&!0===i(t))return!0;if(void 0!==o){const n=e(l,t,o);if(r=at(),o!==n)return o=n,!0}return!1}),t=>(void 0!==o&&(void 0!==n&&!0===n(l,t)||l!==t)&&(o=void 0),(void 0===o||r<at())&&(o=e(t,d(),o)),l=t,o)}function _t(t,e,n){const i=e-t;let o=null,l=null;for(;t<i;){const e=n(t++);null!==e&&(null!==l?(e._l=l,l._r=e):o=e,l=e)}return null!==o?(o._l=l,o._f|=128,o):null}const mt=(t,e,n)=>new i(47106,"div",e,t,n),vt=(t,e,n)=>new i(157698,"span",e,t,n);var yt,xt,gt=100,wt=function(t,e,n,i){this.min=t,this.max=e,this.mean=n,this.last=i},bt=function(){function t(t){this.samples=[],this.maxSamples=t,this._i=-1}return t.prototype.addSample=function(t){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=t},t.prototype.each=function(t){for(var e=this.samples,n=0;n<e.length;n++)t(e[(this._i+1+n)%e.length],n)},t.prototype.calc=function(){var t=this.samples;if(0===t.length)return new wt(0,0,0,0);for(var e=t[(this._i+1)%t.length],n=e,i=0,o=0;o<t.length;o++){var l=t[(this._i+1+o)%t.length];l<e&&(e=l),l>n&&(n=l),i+=l}var r=t[this._i],s=i/t.length;return new wt(e,n,s,r)},t}(),Mt=[],Tt=-1,Ct=(yt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}yt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),kt=30,Et=gt,St=function(){function t(t){var e=this;this._sync=function(){e.sync(),e._dirty=!1},this.name=t,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return t.prototype.invalidate=function(){var t;this._dirty||(this._dirty=!0,t=this._sync,Mt.push(t),-1===Tt&&requestAnimationFrame(function(t){Tt=-1;var e=Mt;Mt=[];for(var n=0;n<e.length;n++)e[n]()}))},t.prototype.sync=function(){throw new Error("sync method not implemented")},t}();!function(t){t[t.HideMin=1]="HideMin",t[t.HideMax=2]="HideMax",t[t.HideMean=4]="HideMean",t[t.HideLast=8]="HideLast",t[t.HideGraph=16]="HideGraph",t[t.RoundValues=32]="RoundValues"}(xt||(xt={}));var Ht=function(t){function e(e,n,i,o){var l=t.call(this,e)||this;l.flags=n,l.unitName=i,l.samples=o;var r=document.createElement("div");r.style.cssText="text-align: center",r.textContent=l.name;var s=document.createElement("div");return 0===(n&xt.HideMin)?(l.minText=document.createElement("div"),s.appendChild(l.minText)):l.minText=null,0===(n&xt.HideMax)?(l.maxText=document.createElement("div"),s.appendChild(l.maxText)):l.maxText=null,0===(n&xt.HideMean)?(l.meanText=document.createElement("div"),s.appendChild(l.meanText)):l.meanText=null,0===(n&xt.HideLast)?(l.lastText=document.createElement("div"),s.appendChild(l.lastText)):l.lastText=null,l.element.appendChild(r),l.element.appendChild(s),0===(n&xt.HideGraph)?(l.canvas=document.createElement("canvas"),l.canvas.style.cssText="display: block; padding: 0; margin: 0",l.canvas.width=Et,l.canvas.height=kt,l.ctx=l.canvas.getContext("2d"),l.element.appendChild(l.canvas)):(l.canvas=null,l.ctx=null),l}return Ct(e,t),e.prototype.sync=function(){var t,e,n,i,o=this,l=this.samples.calc(),r=kt/(1.2*l.max);0===(this.flags&xt.RoundValues)?(t=l.min.toFixed(2),e=l.max.toFixed(2),n=l.mean.toFixed(2),i=l.last.toFixed(2)):(t=Math.round(l.min).toString(),e=Math.round(l.max).toString(),n=Math.round(l.mean).toString(),i=Math.round(l.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+t+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+e+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+n+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+i+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,Et,kt),this.ctx.fillStyle="#0f0",this.samples.each(function(t,e){o.ctx.fillRect(e,kt,1,-t*r)}))},e}(St),Ot=(function(t){function e(e,n){var i=t.call(this,e)||this;return i.counter=n,i.text=document.createElement("div"),i.element.appendChild(i.text),i}Ct(e,t),e.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(St),null);function jt(){Ot||((Ot=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Ot))}function At(t){void 0===t&&(t=xt.HideMin|xt.HideMax|xt.HideMean|xt.RoundValues),jt();var e=new bt(gt),n=new Ht("FPS",t,"",e);Ot.appendChild(n.element);var i=0,o=60;requestAnimationFrame(function t(l){i>0&&(o+=2/121*(1e3/(l-i)-o)),i=l,e.addSample(o),n.invalidate(),requestAnimationFrame(t)})}function Pt(t){if(void 0===t&&(t=xt.HideMin|xt.HideMean),jt(),void 0!==performance.memory){var e=new bt(gt),n=new Ht("Memory",t,"MB",e);Ot.appendChild(n.element),function t(){e.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),n.invalidate(),setTimeout(t,30)}()}}var Nt=function(t,e,n){this.data=new bt(gt),this.widget=new Ht(t,n,e,this.data),this.startTime=-1},Ft={};function Lt(t,e){void 0===e&&(e=0),jt();var n=Ft[t];void 0===n&&(Ft[t]=n=new Nt(t,"ms",e),Ot.appendChild(n.widget.element))}function qt(t){var e=Ft[t];void 0!==e&&(e.startTime=performance.now())}function Rt(t){var e=performance.now(),n=Ft[t];void 0!==n&&-1!==n.startTime&&(n.data.addSample(e-n.startTime),n.widget.invalidate())}function Vt(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function Bt(){const t=new Array(1e4);for(let e=0;e<1e4;e++)t[e]=Vt();return t}function Gt(t,e){if(e>0)if(1===e)for(let n=0;n<1e4;n++)t[n]=Vt();else for(let n=0;n<1e4;n++)Math.random()<e&&(t[n]=Vt())}const Ut=r(t=>{const e=pt(t,(t,e)=>e.data[t]);return t=>vt("pixel",void 0,{background:e(t)})}),zt=r(()=>()=>mt("image").c(_t(0,100,t=>{const e=100*t;return mt("row").k(t).c(_t(0,100,t=>Ut(e+t).k(t)))})));document.addEventListener("DOMContentLoaded",()=>{At(),Pt(),Lt("data update"),Lt("view update");let t=.5;const e=document.createElement("div");e.style.margin="0 auto",e.style.width="80%";const n=document.createElement("input");n.type="range",n.style.width="100%",n.addEventListener("change",e=>{t=Number.parseFloat(e.target.value)/100}),e.appendChild(n),document.body.insertBefore(e,document.body.firstChild);const i=Bt(),o={data:i},l=document.getElementById("app");ht(s(o,zt()),l),requestAnimationFrame(function e(){qt("data update"),Gt(i,t),Rt("data update"),qt("view update"),ct(()=>{ht(s(o,zt()),l)})(),Rt("view update"),requestAnimationFrame(e)})})}]);