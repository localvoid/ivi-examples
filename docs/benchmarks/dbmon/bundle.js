!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);class i{constructor(t,e,n,i,o){this._f=t,this._l=this,this._r=null,this._c=null,this._t=e,this._k=0,this._p=n,this._i=null,this._s=o,this._cs=i,this._e=null}k(t){return this._f|=64,this._k=t,this}e(t){return null!==t&&(this._f|=256,this._e=t),this}t(t){return this._f|=-2147483616,this._c=t,this}c(){const t=arguments;let e=null,n=null;for(let i=0,l=0;i<t.length;++i,++l){let r=t[i];if(null!==r){"object"!==typeof r&&(r=o(r));const t=r._l,i=r._f;if(t===r)0===(64&i)&&(r._k=l);else if(0===(128&i)){let t=r;do{0===(64&t._f)&&(t._k=l),++l,t=t._r}while(null!==t);--l}null!==n?(r._l=n,n._r=r):e=r,n=t}}return null!==e&&(e._l=n,this._f|=16,this._c=e),this}}const o=t=>new i(1,null,t,"",void 0);function l(t){return 0!==(1032&t._f)?l(t._c):t._i}function r(t,e){const n={c:t,shouldUpdate:e};return t=>new i(8,n,t,"",void 0)}let s={};function a(t){const e=s;return s=t,e}function c(t){s=t}function u(){return s}const d=requestAnimationFrame,f=t=>{Promise.resolve().then(t)};function h(t,e){const n=t.length-1,i=t.pop();e!==n&&(t[e]=i)}function p(t,e){const n=t.indexOf(e);h(t,n)}function m(t){for(let e=0;e<t.length;++e)!0===t[e]()&&h(t,e--)}const _=()=>{},v=[];function y(t){return function(){try{return t.apply(void 0,arguments)}catch(e){throw v.forEach(t=>{t(e)}),e}}}(()=>{let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});window.addEventListener("test",null,n)}catch(e){}})(),KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;const x="GestureEvent"in window,g=Node.prototype,w=Element.prototype,b=(Object.prototype.hasOwnProperty,g.insertBefore),T=g.removeChild,M=g.replaceChild,C=g.cloneNode,E=w.setAttribute,k=(w.setAttributeNS,w.removeAttribute),S="http://www.w3.org/2000/svg";function O(t,e){let n,i,o;if(null===t)H(e);else if(null===e)F(t);else if(t instanceof Array)if(e instanceof Array){for(n=0;n<t.length&&n<e.length;)(i=t[n])!==(o=e[n++])&&(null!==o&&j(o),null!==i&&P(i));for(;n<e.length;)null!==(i=e[n++])&&j(i);for(;n<t.length;)null!==(i=t[n++])&&P(i)}else for(j(e),n=0;n<t.length;++n)null!==(i=t[n])&&P(i);else H(e),P(t)}function H(t){if(t instanceof Array)for(let e=0;e<t.length;++e){const n=t[e];null!==n&&j(n)}else j(t)}function F(t){if(t instanceof Array)for(let e=0;e<t.length;++e){const n=t[e];null!==n&&P(n)}else P(t)}function j(t){t.src.add(t)}function P(t){t.src.remove(t)}function A(t,e){T.call(t,l(e)),N(e)}function N(t){const e=t._f;if(0!==(1048&e)){let n=t._c;for(;null!==n;)N(n),n=n._r;if(0!==(8&e)){const e=t._i.detached;if(null!==e)if("function"===typeof e)e();else for(let t=0;t<e.length;t++)e[t](!0)}}0!==(256&e)&&F(t._e)}function q(t,e,n){const i=e._f;if((-2147482600&i)>0){const o=e._i;let l=e._c;if(0!==(16&i))for(;null!==l;)q(o,l,n),l=l._r;else if(0!==(8&i)){const i=o.select;!0===o.dirty||null!==i&&!0===i(u())?U(t,l,e._c=o.update(e._p),n):q(t,l,n)}else{!0===n&&(e._i=Object.assign({},u(),e._p));const i=a(e._i);q(t,l,n),c(i)}}}function L(t,e){t.textContent="";do{N(e),e=e._r}while(null!==e)}function R(t,e){const n=e._f,i=e._p;let o,l=null;if(0!==(1&n))l=o=document.createTextNode(i);else{const r=e._t;if(0!==(256&n)&&H(e._e),0!==(2&n)){const s=0!==(512&n);0===(4&n)?o=s?document.createElementNS(S,r):document.createElement(r):(null===r._i&&R(t,r),o=C.call(r._i,!0)),l=o;const a=e._cs;if(a&&(!0===s?E.call(o,"class",a):o.className=a),void 0!==i&&D(o,void 0,i),void 0!==e._s&&G(o,void 0,e._s),0!==(16&n)){let t=e._c;for(;null!==t;)I(o,null,t),t=t._r}else 0!==(32&n)&&""!==e._c&&(o.textContent=e._c)}else if(0!==(8&n)){l={dirty:!1,update:null,select:null,detached:null};const n=r.c(l);l.update=n,o=R(t,e._c=n(i))}else{const n=a(l=Object.assign({},u(),i));o=R(t,e._c),c(n)}}return e._i=l,o}function I(t,e,n){b.call(t,R(t,n),e)}function U(t,e,n,i){if(e===n)return void q(t,n,i);let o;const r=e._f,s=n._f;if(0!==(523887&(r^s))||0!==(12&r)&&e._t!==n._t||e._k!==n._k)M.call(t,R(t,n),l(e)),N(e);else{const l=e._p,d=n._p;if(n._i=o=e._i,0!==(1&s))l!==d&&(o.data=d);else{const f=e._c;let h=n._c;if(e._e!==n._e&&O(e._e,n._e),0!==(2&s)){let t=n._cs;if(e._cs!==t&&(void 0===t&&(t=""),0!==(512&s)?E.call(o,"class",t):o.className=t),l!==d&&D(o,l,d),e._s!==n._s&&G(o,e._s,n._s),f!==h)if(0===(32&r))if(null===f)do{I(o,null,h),h=h._r}while(null!==h);else null===h?L(o,f):B(o,f,h,i);else{const t=o.firstChild;null!==t?t.nodeValue=h:o.textContent=h}}else if(0!==(8&s)){const e=n._t;!0===o.dirty||l!==d&&(void 0===e.shouldUpdate||!0===e.shouldUpdate(l,d))?(U(t,f,n._c=o.update(d),i),o.dirty=!1):(n._c=f,q(t,n,i))}else{l===d&&!0!==i||(o=Object.assign({},u(),d),i=!0),n._i=o;const e=a(o);U(t,f,h,i),c(e)}}}}function B(t,e,n,i){let o=e._l,r=n._l,s=0,a=0;t:for(;;){for(;e._k===n._k&&0===(64&(e._f^n._f));){if(U(t,e,n,i),a++,e===o?s=1:e=e._r,n===r){s|=2;break t}if(n=n._r,s)break t}for(;o._k===r._k&&0===(64&(o._f^r._f));){if(U(t,o,r,i),a++,e===o?s=1:o=o._l,n===r){s|=2;break t}if(r=r._l,s)break t}break}if(s){if(s<3)if(s<2){const e=Q(r);for(;I(t,e,n),n!==r;)n=n._r}else for(;A(t,e),e!==o;)e=e._r}else{let c=0,u=0,d=0;const f=[];let h,p,m,_=n;for(;m=_._k,64&_._f?(void 0===h&&(h=new Map),h.set(m,u)):(void 0===p&&(p=new Map),p.set(m,u)),f[u++]=_,_!==r;)_=_._r;const v=new Array(u).fill(-1);let y=0;for(_=e;m=_._k,void 0===(s=0!==(64&_._f)?void 0===h?void 0:h.get(m):void 0===p?void 0:p.get(m))?_._k=null:(d=d>s?1e9:s,v[s]=c,U(t,_,f[s],i),y++),c++,_!==o;)_=_._r;if(a||y){for(s=c-y;s>0;)null===e._k&&(A(t,e),s--),e=e._r;if(1e9===d){const e=V(v);for(s=e.length-1;u>0;)v[--u]<0?I(t,Q(r),r):s<0||u!==e[s]?b.call(t,l(r),Q(r)):s--,r=r._l}else if(y!==u)for(;u>0;)v[--u]<0&&I(t,Q(r),r),r=r._l}else{L(t,e);do{I(t,null,n),n=n._r}while(null!==n)}}}function Q(t){const e=t._r;return null===e?null:l(e)}function V(t){const e=t.slice(),n=[];n[0]=0;let i,o,l,r=0;for(let s=0;s<t.length;++s){const a=t[s];if(-1!==a)if(t[l=n[r]]<a)e[s]=l,n[++r]=s;else{for(i=0,o=r;i<o;)t[n[l=(i+o)/2|0]]<a?i=l+1:o=l;a<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(o=n[r];r>=0;)n[r--]=o,o=e[o];return n}function G(t,e,n){const i=t.style;let o,l;if(void 0===e)for(o in n)void 0!==(l=n[o])&&i.setProperty(o,l);else if(void 0!==n)for(o in n)l=n[o],e[o]!==l&&(void 0!==l?i.setProperty(o,l):i.removeProperty(o))}function z(t,e,n,i){n!==i&&("object"===typeof i?i.u(t,e,void 0===n?void 0:n.v,i.v):("boolean"===typeof i&&(i=i?"":void 0),void 0===i?k.call(t,e):E.call(t,e,i)))}function D(t,e,n){let i;if(void 0===e)for(i in n)z(t,i,void 0,n[i]);else if(void 0!==n)for(i in n)z(t,i,e[i],n[i])}const J=[],K=t=>J.find(e=>e.container===t);function W(){for(let t=0;t<J.length;++t){const e=J[t],{container:n,current:i,next:o}=e;e.next=void 0,o?(i?U(n,i,o,!1):(I(n,null,o),x&&(n.onclick=_)),e.current=o):i&&(null===o?(A(n,i),p(J,e),--t):q(n,i,!1))}}function X(t){for(;t.v.length>0;){const e=t.v;let n=0;t.v=[];do{e[n++]()}while(n<e.length)}}let Y=0,Z=1;const $={v:[]},tt={v:[]},et={v:[]},nt=[],it=[];let ot=0;const lt=t=>y(function(){Y|=1,t.apply(void 0,arguments),X($),Y&=-4,++Z}),rt=lt(_),st=()=>Z,at=t=>lt(e=>{Y|=16,t(e),0!==(4&Y)&&(ot=void 0===e?performance.now():e,m(nt),0!==(32&Y)&&W(),X(tt),m(it),X(et)),Y&=-61}),ct=at(_);function ut(t){var e;void 0!==t&&0!==(1&t)&&0===(8&Y)?0===(16&(Y|=12))&&(e=ct,$.v.push(e),0===(3&Y)&&(Y|=2,f(rt))):0===(4&Y)&&0===(16&(Y|=4))&&d(ct)}function dt(t){Y|=32,ut(t)}function ft(t,e,n){const i=K(e);i?i.next=t:J.push({container:e,next:t,current:null}),dt(n)}function ht(t,e,n){const i=t.select;let o,l,r=0;return t.select=(t=>{if(null!==i&&!0===i(t))return!0;if(void 0!==o){const n=e(l,t,o);if(r=st(),o!==n)return o=n,!0}return!1}),t=>(void 0!==o&&(void 0!==n&&!0===n(l,t)||l!==t)&&(o=void 0),(void 0===o||r<st())&&(o=e(t,u(),o)),l=t,o)}function pt(t,e){let n=null,i=null;for(let o=0;o<t.length;++o){const l=e(t[o],o);null!==l&&(null!==i?(l._l=i,i._r=l):n=l,i=l)}return null!==n?(n._l=i,n._f|=128,n):null}const mt=(t,e,n)=>new i(47106,"div",e,t,n),_t=(t,e,n)=>new i(157698,"span",e,t,n),vt=(t,e,n)=>new i(167938,"table",e,t,n),yt=(t,e,n)=>new i(169986,"tbody",e,t,n),xt=(t,e,n)=>new i(172034,"td",e,t,n),gt=(t,e,n)=>new i(188418,"tr",e,t,n);class wt{constructor(t,e){this.elapsed=t,this.query=e}static rand(){const t=15*Math.random();let e;return e=Math.random()<.1?"vacuum":Math.random()<.2?"<IDLE> in transaction":"SELECT blah FROM something",new wt(t,e)}}const bt=new wt(0,"***");class Tt{constructor(t){this.id=Tt._nextId++,this.name=t,this.queries=null,this.update()}update(){const t=[],e=Math.floor(10*Math.random()+1);for(let n=0;n<e;n++)t.push(wt.rand());this.queries=t}getTopFiveQueries(){const t=this.queries.slice(0,5);for(t.sort(function(t,e){return t.elapsed-e.elapsed});t.length<5;)t.push(bt);return t}}Tt._nextId=0;var Mt,Ct,Et=100,kt=function(t,e,n,i){this.min=t,this.max=e,this.mean=n,this.last=i},St=function(){function t(t){this.samples=[],this.maxSamples=t,this._i=-1}return t.prototype.addSample=function(t){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=t},t.prototype.each=function(t){for(var e=this.samples,n=0;n<e.length;n++)t(e[(this._i+1+n)%e.length],n)},t.prototype.calc=function(){var t=this.samples;if(0===t.length)return new kt(0,0,0,0);for(var e=t[(this._i+1)%t.length],n=e,i=0,o=0;o<t.length;o++){var l=t[(this._i+1+o)%t.length];l<e&&(e=l),l>n&&(n=l),i+=l}var r=t[this._i],s=i/t.length;return new kt(e,n,s,r)},t}(),Ot=[],Ht=-1,Ft=(Mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}Mt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),jt=30,Pt=Et,At=function(){function t(t){var e=this;this._sync=function(){e.sync(),e._dirty=!1},this.name=t,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return t.prototype.invalidate=function(){var t;this._dirty||(this._dirty=!0,t=this._sync,Ot.push(t),-1===Ht&&requestAnimationFrame(function(t){Ht=-1;var e=Ot;Ot=[];for(var n=0;n<e.length;n++)e[n]()}))},t.prototype.sync=function(){throw new Error("sync method not implemented")},t}();!function(t){t[t.HideMin=1]="HideMin",t[t.HideMax=2]="HideMax",t[t.HideMean=4]="HideMean",t[t.HideLast=8]="HideLast",t[t.HideGraph=16]="HideGraph",t[t.RoundValues=32]="RoundValues"}(Ct||(Ct={}));var Nt=function(t){function e(e,n,i,o){var l=t.call(this,e)||this;l.flags=n,l.unitName=i,l.samples=o;var r=document.createElement("div");r.style.cssText="text-align: center",r.textContent=l.name;var s=document.createElement("div");return 0===(n&Ct.HideMin)?(l.minText=document.createElement("div"),s.appendChild(l.minText)):l.minText=null,0===(n&Ct.HideMax)?(l.maxText=document.createElement("div"),s.appendChild(l.maxText)):l.maxText=null,0===(n&Ct.HideMean)?(l.meanText=document.createElement("div"),s.appendChild(l.meanText)):l.meanText=null,0===(n&Ct.HideLast)?(l.lastText=document.createElement("div"),s.appendChild(l.lastText)):l.lastText=null,l.element.appendChild(r),l.element.appendChild(s),0===(n&Ct.HideGraph)?(l.canvas=document.createElement("canvas"),l.canvas.style.cssText="display: block; padding: 0; margin: 0",l.canvas.width=Pt,l.canvas.height=jt,l.ctx=l.canvas.getContext("2d"),l.element.appendChild(l.canvas)):(l.canvas=null,l.ctx=null),l}return Ft(e,t),e.prototype.sync=function(){var t,e,n,i,o=this,l=this.samples.calc(),r=jt/(1.2*l.max);0===(this.flags&Ct.RoundValues)?(t=l.min.toFixed(2),e=l.max.toFixed(2),n=l.mean.toFixed(2),i=l.last.toFixed(2)):(t=Math.round(l.min).toString(),e=Math.round(l.max).toString(),n=Math.round(l.mean).toString(),i=Math.round(l.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+t+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+e+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+n+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+i+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,Pt,jt),this.ctx.fillStyle="#0f0",this.samples.each(function(t,e){o.ctx.fillRect(e,jt,1,-t*r)}))},e}(At),qt=(function(t){function e(e,n){var i=t.call(this,e)||this;return i.counter=n,i.text=document.createElement("div"),i.element.appendChild(i.text),i}Ft(e,t),e.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(At),null);function Lt(){qt||((qt=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(qt))}function Rt(t){void 0===t&&(t=Ct.HideMin|Ct.HideMax|Ct.HideMean|Ct.RoundValues),Lt();var e=new St(Et),n=new Nt("FPS",t,"",e);qt.appendChild(n.element);var i=0,o=60;requestAnimationFrame(function t(l){i>0&&(o+=2/121*(1e3/(l-i)-o)),i=l,e.addSample(o),n.invalidate(),requestAnimationFrame(t)})}function It(t){if(void 0===t&&(t=Ct.HideMin|Ct.HideMean),Lt(),void 0!==performance.memory){var e=new St(Et),n=new Nt("Memory",t,"MB",e);qt.appendChild(n.element),function t(){e.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),n.invalidate(),setTimeout(t,30)}()}}var Ut=function(t,e,n){this.data=new St(Et),this.widget=new Nt(t,n,e,this.data),this.startTime=-1},Bt={};function Qt(t,e){void 0===e&&(e=0),Lt();var n=Bt[t];void 0===n&&(Bt[t]=n=new Ut(t,"ms",e),qt.appendChild(n.widget.element))}function Vt(t){var e=performance.now(),n=Bt[t];void 0!==n&&-1!==n.startTime&&(n.data.addSample(e-n.startTime),n.widget.invalidate())}let Gt=.5,zt=50;const Dt=function(t){if(0===t.length)return{};const e={};for(let n=0;n<t.length;++n){const i=t[n].split("=",2);1===i.length?e[i[0]]="":e[i[0]]=decodeURIComponent(i[1].replace(/\+/g," "))}return e}(window.location.search.substr(1).split("&"));void 0!==Dt.n&&(zt=parseInt(Dt.n,10)),void 0!==Dt.m&&(Gt=parseFloat(Dt.m));const Jt=new class{constructor(t){this.dbs=[];for(let e=0;e<t;e++)this.dbs.push(new Tt("cluster"+(e+1))),this.dbs.push(new Tt("cluster"+(e+1)+" slave"))}update(){const t=this.dbs;for(let e=0;e<t.length;e++)t[e]=new Tt(t[e].name)}randomUpdate(t){const e=this.dbs;for(let n=0;n<e.length;n++)Math.random()<t&&(e[n]=new Tt(e[n].name))}}(zt);function Kt(t){if(0===t)return"";if(t>60){const e=Math.floor(t/60),n=(t%60).toFixed(2).split(".");return e+":"+n[0]+"."+n[1]}return t.toFixed(2)}function Wt(t){return t>=20?"label label-important":t>=10?"label label-warning":"label label-success"}function Xt(t){return t>0?t>=10?"Query elapsed warn_long":t>=1?"Query elapsed warn":"Query elapsed short":""}const Yt=r(()=>t=>mt("popover left").c(mt("popover-content").t(t),mt("arrow"))),Zt=r(t=>{const e=ht(t,t=>Jt.dbs[t]);return t=>{const n=e(t),i=n.getTopFiveQueries(),o=n.queries.length;return gt().c(xt("dbname").t(n.name),xt("query-count").c(_t(Wt(o)).t(o)),pt(i,(t,e)=>xt(Xt(t.elapsed)).k(e).c(Kt(t.elapsed),Yt(t.query))))}}),$t=r(()=>t=>vt("table table-striped latest-data").c(yt().c(pt(t.dbs,(t,e)=>Zt(e).k(t.id)))));document.addEventListener("DOMContentLoaded",()=>{Rt(),It(),Qt("view update");const t=document.createElement("div");t.style.display="flex";const e=document.createElement("input");e.type="range",e.style.marginBottom="10px",e.style.marginTop="5px";const n=document.createElement("label");n.textContent="mutations : "+(100*Gt).toFixed(0)+"%",e.addEventListener("change",t=>{Gt=Number.parseFloat(t.target.value)/100,n.textContent="mutations : "+(100*Gt).toFixed(0)+"%"}),t.appendChild(n),t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);const i=document.getElementById("app");ft($t(Jt),i),setTimeout(function t(){var e;Jt.randomUpdate(Gt),void 0!==(e=Bt["view update"])&&(e.startTime=performance.now()),at(dt)(),Vt("view update"),setTimeout(t,0)},0)})}]);